import React, { useState, useEffect } from 'react'

const EventAddForm = ({ onTermSubmit }) => {
    const [form, setForm] = useState({
        first_name: null,
        last_name: null,
        email: null,
        event_date: null,
    })

    const onInputChange = (name) => e => {
        setForm({ ...form, [name]: e.target.value })
    }

    const onFormSubmit = e => {
        e.preventDefault();
        onSubmit(form);
    }

    const isFormValid = () => {
        return Object.values(form).any(val => !val)
    }

    return (
        <div className="event-add-form ui segment">
            <form class="ui form" onSubmit={onFormSubmit}>
                <div class="field">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={onInputChange('first_name')}
                        value={form.first_name} />
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={onInputChange('last_name')}
                        value={form.last_name} />
                </div>
                <div class="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="last-name"
                        placeholder="Email"
                        onChange={onInputChange('email')}
                        value={form.email} />
                </div>

                <button class="ui button" type="submit" disabled={isFormValid()}>Submit</button>
            </form>
        </div>
    )
}

export default EventAddForm