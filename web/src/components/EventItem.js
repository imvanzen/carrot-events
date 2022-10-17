import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Confirm, Table } from 'semantic-ui-react'
import { DateTime } from 'luxon'

const EventItem = ({ event, handleDelete }) => {
    const [open, setOpen] = useState(false)
    const handleConfirm = async (id) => {
        await handleDelete(id)
        setOpen(false)
    }
    const {
        id,
        first_name,
        last_name,
        email,
        event_date
    } = event;

    const formatEventDate = (date) => DateTime.fromISO(date).setLocale('pl-PL').toFormat('FF')

    return (
        <Table.Row key={id}>
            <Table.Cell>{first_name}</Table.Cell>
            <Table.Cell>{last_name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{formatEventDate(event_date)}</Table.Cell>
            <Table.Cell>
                <Link to={`/edit/${id}`}>
                    <Button
                        icon='edit'
                        color='green'
                        compact />
                </Link>

                <Button
                    icon='delete'
                    color='red'
                    compact
                    onClick={() => setOpen(true)} />

                <Confirm
                    open={open}
                    header="Event Delete"
                    content="Do you really want to delete this event?"
                    onCancel={() => setOpen(false)}
                    onConfirm={() => handleConfirm(id)}
                />

            </Table.Cell>
        </Table.Row>
    )
}

export default EventItem