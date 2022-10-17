import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../components/EventForm'

import eventsApi from '../api/events'

const EventCreate = () => {
    const onSubmit = async (form) => {
        try {
            const result = await eventsApi.create(form)
            if (!result) {
                console.log("Create failed")
            }
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    return (
        <Grid.Column>
            <EventForm onSubmit={onSubmit} />
        </Grid.Column>
    )
}

export default EventCreate