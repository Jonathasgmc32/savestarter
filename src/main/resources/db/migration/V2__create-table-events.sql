CREATE TABLE events (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title VARCHAR(40) NOT NULL,
    description VARCHAR(300) NOT NULL,
    location TEXT NOT NULL,
    type text NOT NULL,
    date TIMESTAMP NOT NULL,
    img_url text NOT NULL
);