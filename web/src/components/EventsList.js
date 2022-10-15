import React from 'react'
import EventItem from './EventItem'

const EventsList = ({ events }) => {
    const eventsListMap = events.map(event => (
        <EventItem key={event.id} event={event} />
    ));
    return (
        <div className='events-list'>
            {eventsListMap}
        </div>
    )
}

export default EventsList