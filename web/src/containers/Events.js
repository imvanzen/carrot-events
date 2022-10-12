import React, { useState, useEffect } from 'react'
import EventsList from '../components/EventsList'
import EventAddForm from '../components/EventAddForm'

import eventsApi from '../api/events'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await eventsApi.list()
            setEvents(result)
        }
        fetchData()
    }, [])

    const onSubmit = (form) => {
        console.log(form)
    }

    return (
        <div className='events ui segment'>
            <EventAddForm onSubmit={onSubmit} />
            <EventsList events={events} />
        </div>
    )
}

export default Events