CREATE SCHEMA IF NOT EXISTS carrot_events;

SET SCHEMA 'carrot_events';

-- DROP TABLE carrot_events.events
CREATE TABLE IF NOT EXISTS carrot_events.events (
	id uuid NOT NULL,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	event_date timestamp NOT NULL,
	created_at timestamp NOT NULL DEFAULT NOW(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,

	CONSTRAINT event_pk PRIMARY KEY (id)
);
