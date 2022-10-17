import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EventForm from '../components/EventForm'

import eventsApi from '../api/events'

const EventEdit = () => {
    const [event, setEvent] = useState(null)
    const { eventId } = useParams()
    const navigate = useNavigate()

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
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <EventForm className='event-edit' event={event} onSubmit={onSubmit} />
    )
}

export default EventEdit