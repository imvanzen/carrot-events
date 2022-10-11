import React from 'react'

const EventsList = ({ events }) => {
    const eventsList = events.map(event => (
        <VideoItem key={event.id} event={event} />
    ));
    return (
        <div className='events-list'>
            {eventsList || <div>No events yet</div>}
        </div>
    )
}

export default EventsList