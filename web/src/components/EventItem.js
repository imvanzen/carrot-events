import React from 'react'

const EventItem = ({
    event
}) => {
    const {
        first_name,
        last_name,
        email,
        event_date
    } = event;

    const fullName = [first_name, last_name].join(' ')

    return (
        <div className="event-item item">
            <i className="large calendar middle aligned icon"></i>
            <div className="content">
                <a href={`mailto:${email}`} className="header">{fullName}</a>
                <div className="description">{event_date}</div>
            </div>
        </div>
    )
}

export default EventItem