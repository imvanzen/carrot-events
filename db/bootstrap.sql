CREATE SCHEMA IF NOT EXISTS carrot_events;

SET SCHEMA 'carrot_events';

-- DROP TABLE carrot_events.users
CREATE TABLE IF NOT EXISTS carrot_events.users (
	id uuid NOT NULL,
	firstname varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	created_at timestamp NOT NULL DEFAULT NOW(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,

	CONSTRAINT user_pk PRIMARY KEY (id)
);

-- DROP TABLE carrot_events.events
CREATE TABLE IF NOT EXISTS carrot_events.events (
	id uuid NOT NULL,
	user_id uuid NOT NULL,
	event_date timestamp NOT NULL,
	created_at timestamp NOT NULL DEFAULT NOW(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,

	CONSTRAINT event_pk PRIMARY KEY (id),
	CONSTRAINT user_event_fk
      FOREIGN KEY (user_id) 
	  REFERENCES users(id)
);
