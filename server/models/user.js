const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const pool = new Pool({
  connectionString: "postgres://postgres:dritoni@localhost:5432/lmao_database",
});

class User {
  constructor(user_name, password, email) {
    this.user_name = user_name;
    this.password = password;
    this.email = email;
    this.role = "User";
  }

  static async findByUserName(user_name) {
    const query = {
      text: "SELECT * FROM users WHERE user_name = $1",
      values: [user_name],
    };
    const { rows } = await pool.query(query);
    if (rows.length === 0) {
      return null;
    }
    const userRow = rows[0];
    return new User(
      userRow.user_id,
      userRow.user_name,
      userRow.password,
      userRow.email,
      userRow.role
    );
  }

  static async findOne({ email }) {
    const query = {
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    };
    const { rows } = await pool.query(query);
    if (rows.length === 0) {
      return null;
    }
    const userRow = rows[0];
    return new User(userRow.user_name, userRow.password, userRow.email);
  }
  async emailExists({ email }) {
    const query = {
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    };
    const { rows } = await pool.query(query);
    if (rows.length > 0) {
      throw new Error("a User already exists with this email!");
    }
  }
  async save() {
    const saltRounds = 10;
    if (!this.password) {
      throw new Error("Password is required");
    }

    const hash = await bcrypt.hash(this.password, saltRounds);
    const query = {
      text: "INSERT INTO users(user_name, password, email, role) VALUES($1, $2, $3, $4) RETURNING user_id",
      values: [this.user_name, hash, this.email, this.role],
    };
    const { rows } = await pool.query(query);
    this.user_id = rows[0].user_id;
    return this;
  }

  async checkPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

module.exports = User;
