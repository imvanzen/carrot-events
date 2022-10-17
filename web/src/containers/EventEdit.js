import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import EventForm from '../components/EventForm'

import eventsApi from '../api/events'

const EventEdit = () => {
    const [event, setEvent] = useState(null);
    let { eventId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const event = await eventsApi.getOne(eventId)
                if (!event.data) {
                    console.log("No event found")
                }
                setEvent(event.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [eventId]);

    const onSubmit = async (form) => {
        try {
            const result = await eventsApi.update(eventId, form)
            if (!result) {
                console.log("Update failed")
            }
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    return (
        <Grid.Column>
            <EventForm event={event} onSubmit={onSubmit} />
        </Grid.Column>
    )
}

export default EventEdit