--UP

CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    email TEXT,
    password TEXT
);

INSERT INTO Users (email, password) values ('user@domain.tld','123456789');

-- Down
DROP TABLE Users;
