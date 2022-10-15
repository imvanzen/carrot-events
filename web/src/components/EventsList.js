import React from 'react'
import { DateTime } from 'luxon'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import './EventsList.css';

const EventsList = ({ events }) => {
    const eventsListMap = events.map(({
        id,
        first_name,
        last_name,
        email,
        event_date
    }) => (
        <Table.Row key={id}>
            <Table.Cell>{first_name}</Table.Cell>
            <Table.Cell>{last_name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{DateTime.fromISO(event_date).setLocale('pl-PL').toFormat('FF')}</Table.Cell>
        </Table.Row>
    ));
    return (
        <Table compact celled color='orange'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First name</Table.HeaderCell>
                    <Table.HeaderCell>Last name</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.HeaderCell>Event date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {eventsListMap}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Button
                            floated='right'
                            icon
                            labelPosition='right'
                            primary>
                            <Icon name='add to calendar' /> Add event
                        </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default EventsList