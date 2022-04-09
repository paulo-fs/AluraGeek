CREATE DATABBASE alurageek;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS category(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS product(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  price NUMERIC(6, 2) NOT NULL,
  info VARCHAR,
  photo VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES category(id)
);
