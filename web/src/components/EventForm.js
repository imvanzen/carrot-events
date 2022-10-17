import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Icon, Input } from 'semantic-ui-react'
import { DateTimeInput } from 'semantic-ui-calendar-react'

const EventForm = ({ onSubmit, event }) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        event_date: ""
    })

    useEffect(() => {
        if (!event) return
        setForm(event)
    }, [event])

    const hasErrors = (name) => {
        const errors = {
            first_name: {
                content: 'Please enter a valid first name',
                pointing: 'below',
            },
            last_name: {
                content: 'Please enter a valid last name address',
                pointing: 'below',
            },
            email: {
                content: 'Please enter a valid email address',
                pointing: 'below',
            },
            event_date: {
                content: 'Please enter a valid event date',
                pointing: 'below',
            },
        }
        const schema = {
            first_name: /^([A-Za-b]+)$/i,
            last_name: /^([A-Za-b]+)$/i,
            email: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
            event_date: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/gmi
        }
        if (!form[name]) return
        if (form[name].trim().match(schema[name])) return
        return errors[name]
    }

    const onDateTimeChange = (event, { name, value }) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const onInputChange = (name) => (e, data) => {
        setForm({
            ...form,
            [name]: e.target.value
        })
    }

    const onFormSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await onSubmit(form)
        setLoading(false)
    }

    return (
        <Form onSubmit={onFormSubmit} loading={loading}>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    onChange={onInputChange('first_name')}
                    value={form.first_name}
                    label='First name'
                    placeholder='First name'
                    error={hasErrors('first_name')}
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    onChange={onInputChange('last_name')}
                    value={form.last_name}
                    label='Last name'
                    placeholder='Last name'
                    error={hasErrors('last_name')}
                />
            </Form.Group>
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                onChange={onInputChange('email')}
                value={form.email}
                label='Email'
                placeholder='joe@schmoe.com'
                error={hasErrors('email')}
            />
            <Form.Field
                id='form-input-control-event-date'
                control={DateTimeInput}
                label='Date & Time'
                name="event_date"
                placeholder="Date Time"
                dateTimeFormat="YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                onChange={onDateTimeChange}
                value={form.event_date}
                iconPosition="left"
                popupPosition="bottom left"
                startMode='month'
                clearable
                closable
                error={hasErrors('event_date')}
            />
            <Button.Group floated='right'>
                <Link to='/'>
                    <Button
                        id='form-button-control-cancel'
                        icon
                        labelPosition='right'>
                        <Icon name='remove' /> Cancel
                    </Button>
                </Link>

                <Button
                    id='form-button-control-public'
                    icon
                    labelPosition='right'
                    primary
                    type='submit'>
                    <Icon name='add to calendar' /> Add Event
                </Button>
            </Button.Group>
        </Form>
    )
}

export default EventForm