import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Confirm, Table } from 'semantic-ui-react'
import { DateTime } from 'luxon'

const EventItem = ({ event, handleDelete }) => {
    const navigate = useNavigate()
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
        <Table.Row className='event-item' key={id}>
            <Table.Cell>{first_name}</Table.Cell>
            <Table.Cell>{last_name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{formatEventDate(event_date)}</Table.Cell>
            <Table.Cell>
                <Button
                    className='event-item-button-delete'
                    icon='edit'
                    color='green'
                    compact
                    onClick={() => navigate(`/edit/${id}`)} />

                <Button
                    className='event-item-button-delete'
                    icon='delete'
                    color='red'
                    compact
                    onClick={() => setOpen(true)} />

                <Confirm
                    id='event-item-confirm-modal'
                    open={open}
                    header="Delete event"
                    content="Do you really want to delete this event?"
                    onCancel={() => setOpen(false)}
                    onConfirm={() => handleConfirm(id)}
                />
            </Table.Cell>
        </Table.Row>
    )
}

export default EventItem