import React, { useState, useEffect } from 'react'

import eventsApi from './api/events'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(async () => {
        const result = await eventsApi.list()
        setEvents(result)
    }, [])

    return (
        <div className='events' style={{ marginTop: '10px' }}>
            <Header />
            <div className="ui segment">
                <Route path='/' render={<EventsList items={events} />} />
                <Route path='/add-event' render={<EventAddForm />} />
            </div>
        </div>
    )
}

export default Events