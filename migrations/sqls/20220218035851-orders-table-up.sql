/* Replace with your SQL commands */

CREATE TABLE orders (
    id SERIAL PRIMARY KEY, 
    status VARCHAR(64),
    users_id bigint REFERENCES users(id)
);