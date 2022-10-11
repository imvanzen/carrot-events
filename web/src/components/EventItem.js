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
            <i class="large calendar middle aligned icon"></i>
            <div class="content">
                <a href={`mailto:${email}`} class="header">{fullName}</a>
                <div class="description">{event_date}</div>
            </div>
        </div>
    )
}

export default EventItem