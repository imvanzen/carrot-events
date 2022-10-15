import React, { useState, useEffect } from 'react'
import EventsList from '../components/EventsList'
import EventAddForm from '../components/EventAddForm'

import eventsApi from '../api/events'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await eventsApi.list()
            console.log(result.data)
            setEvents(result.data)
        }
        fetchData()
    }, [])

    const onSubmit = async (form) => {
        const result = await eventsApi.create(form)
        setEvents([result.data, ...events])
    }

    return (
        <div className='events ui segment'>
            <EventAddForm onSubmit={onSubmit} />
            <EventsList events={events} />
        </div>
    )
}

export default Events