--UP

CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);


-- Down
DROP TABLE Users;
