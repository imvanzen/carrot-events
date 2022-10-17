import React, { useState } from 'react'
import { Button, Form, Icon, Input } from 'semantic-ui-react'
import { DateTimeInput } from 'semantic-ui-calendar-react'

const EventForm = ({ onSubmit, event = {
    first_name: "",
    last_name: "",
    email: "",
    event_date: ""
} }) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(event)

    // const isFieldValid = (name, val) => {
    //     const schema = {
    //         first_name: /^([A-Za-b]+)$/i,
    //         last_name: /^([A-Za-b]+)$/i,
    //         email: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
    //         event_date: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/gmi
    //     }
    //     return val.match(schema[name])
    // }

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

    const errors = {
        first_name: {
            content: 'Please enter a valid email address',
            pointing: 'below',
        },
        last_name: {
            content: 'Please enter a valid email address',
            pointing: 'below',
        },
        email: {
            content: 'Please enter a valid email address',
            pointing: 'below',
        },
        event_date: {
            content: 'Please enter a valid email address',
            pointing: 'below',
        },
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
                    error={errors.email}
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    onChange={onInputChange('last_name')}
                    value={form.last_name}
                    label='Last name'
                    placeholder='Last name'
                    error={errors.email}
                />
            </Form.Group>
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                onChange={onInputChange('email')}
                value={form.email}
                label='Email'
                placeholder='joe@schmoe.com'
                error={errors.email}
            />
            <Form.Field
                id='form-input-control-event-date'
                control={DateTimeInput}
                label='Date & Time'
                name="event_date"
                placeholder="Date Time"
                onChange={onDateTimeChange}
                value={form.event_date}
                iconPosition="left"
                popupPosition="bottom left"
                startMode='month'
                clearable
                closable
                error={errors.email}
            />
            <Button.Group floated='right'>
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content={<><Icon name='remove' /> Cancel</>}
                    icon
                    labelPosition='right'
                />

                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content={<><Icon name='add to calendar' /> Add Event</>}
                    icon
                    labelPosition='right'
                    primary
                    type='submit'
                />
            </Button.Group>
        </Form>
    )
}

export default EventForm