import React, { useState, useEffect, isValidElement } from 'react'

const EventAddForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        event_date: "",

        errors: {
            first_name: "",
            last_name: "",
            email: "",
            event_date: "",
        }
    })

    const isFieldValid = (name, val) => {
        const schema = {
            first_name: /^([A-Za-b]+)$/i,
            last_name: /^([A-Za-b]+)$/i,
            email: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
            event_date: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/gmi
        }

        console.log("isFieldValid", name, val, schema[name])

        return val.match(schema[name])
    }

    const onInputChange = (name) => e => {
        setForm({
            ...form,
            [name]: e.target.value,
            errors: {
                ...form.errors,
                [name]: isFieldValid(name, e.target.value)
            }
        })
    }

    const onFormSubmit = e => {
        e.preventDefault();
        onSubmit(form);
    }

    const isFormValid = () => {
        console.log("isFormValid", form.errors, Object.values(form.errors).any(val => !val));
        return Object.values(form.errors).any(val => !val)
    }

    return (
        <div className="event-add-form ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={onInputChange('first_name')}
                        value={form.first_name} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={onInputChange('last_name')}
                        value={form.last_name} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="last-name"
                        placeholder="Email"
                        onChange={onInputChange('email')}
                        value={form.email} />
                </div>

                <button
                    className="ui button"
                    type="submit"
                    disabled={isFormValid()}>Submit</button>
            </form>
        </div>
    )
}

export default EventAddForm