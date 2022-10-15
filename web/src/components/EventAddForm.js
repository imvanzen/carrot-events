import React, { useState } from 'react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const EventAddForm = ({ onSubmit }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        event_date: ""
    })

    // const isFieldValid = (name, val) => {
    //     const schema = {
    //         first_name: /^([A-Za-b]+)$/i,
    //         last_name: /^([A-Za-b]+)$/i,
    //         email: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
    //         event_date: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/gmi
    //     }
    //     return val.match(schema[name])
    // }

    const onDateTimeChange = (e, data) => {
        console.log(e.target.value)
        console.log(data)
        setForm({
            ...form,
            event_date: data.value
        })
    }

    const onInputChange = (name) => (e, data) => {
        setForm({
            ...form,
            [name]: e.target.value
        })
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        setLoading(true)
        await onSubmit(form)
    }

    const isLoading = () => loading ? 'loading' : ''
    const message = () => (
        (error && (
            <div className="ui error message">
                <div className="header">Form Error</div>
                <p>Something went wrong</p>
                <pre><code>{JSON.stringify(error)}</code></pre>
            </div>
        )) || null
    )

    return (
        <div className="event-add-form ui segment">
            <form className={`ui form ${isLoading()}`} onSubmit={onFormSubmit}>
                {message()}
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

                <div className="field">
                    <SemanticDatepicker onChange={onDateTimeChange} />
                </div>

                <button
                    className="ui button"
                    type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EventAddForm