import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import EventItem from './EventItem';
import './EventsList.css';

const EventsList = ({ events }) => {
    const eventItemsMap = events.map((event) => (
        <EventItem key={event.id} event={event} />
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
                {eventItemsMap}
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