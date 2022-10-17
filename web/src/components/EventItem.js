import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import { DateTime } from 'luxon'

const EventItem = ({
    event
}) => {
    const {
        id,
        first_name,
        last_name,
        email,
        event_date
    } = event;

    return (
        <Table.Row key={id}>
            <Table.Cell>{first_name}</Table.Cell>
            <Table.Cell>{last_name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{DateTime.fromISO(event_date).setLocale('pl-PL').toFormat('FF')}</Table.Cell>
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
                    onClick={() => console.log(`Delete ${id}`)} />
            </Table.Cell>
        </Table.Row>
    )
}

export default EventItem