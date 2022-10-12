import React from 'react'
import EventItem from './EventItem'

const EventsList = ({ events }) => {
    const eventsList = events.map(event => (
        <EventItem key={event.id} event={event} />
    ));
    return (
        <div className='events-list'>
            {eventsList || <div>No events yet</div>}
        </div>
    )
}

export default EventsList