import React, { useState, useEffect } from 'react'
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react'
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
        try {
            const result = await eventsApi.create(form)
            setEvents([result.data, ...events])
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    return (
        <Segment>
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Header>Carrot Events App</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EventAddForm onSubmit={onSubmit} />
                        <EventsList events={events} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Events