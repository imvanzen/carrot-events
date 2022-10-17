import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../components/EventForm'

import eventsApi from '../api/events'

const EventEdit = ({ event }) => {
    const onSubmit = async (form) => {
        try {
            const result = await eventsApi.update(event.id, form)
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