import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import EventForm from '../components/EventForm'

import eventsApi from '../api/events'

const EventCreate = () => {
    const navigate = useNavigate();
    const onSubmit = async (form) => {
        try {
            const result = await eventsApi.create(form)
            if (!result) {
                console.log("Create failed")
            }
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Grid.Column>
            <EventForm onSubmit={onSubmit} />
        </Grid.Column>
    )
}

export default EventCreate