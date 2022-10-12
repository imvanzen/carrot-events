import React, { useState, useEffect } from 'react'
import EventsList from '../components/EventsList'
import EventAddForm from '../components/EventAddForm'
import Route from '../Route'

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
            <Route path='/' render={<EventsList events={events} />} />
            <Route path='/add-event' render={<EventAddForm onSubmit={onSubmit} />} />
        </div>
    )
}

export default Events