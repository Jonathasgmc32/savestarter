CREATE TABLE event_users (
    user_id VARCHAR NOT NULL,
    event_id VARCHAR NOT NULL,
    PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
)