import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import EventsList from '../components/EventsList'

import eventsApi from '../api/events'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await eventsApi.list()
            setEvents(result.data)
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            return await eventsApi.remove(id)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Grid.Column>
            <EventsList events={events} handleDelete={handleDelete} />
        </Grid.Column>
    )
}

export default Events