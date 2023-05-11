CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(6) NOT NULL,
	created_at date default current_date
);
INSERT INTO users (user_name, password, email, role) VALUES ('Diar', 'diarbaba22', 'diarxharavina@gmail.com', 'admin');
