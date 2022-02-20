/* Replace with your SQL commands */

CREATE TABLE order_products (
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES product(id),
    quantity INTEGER
)