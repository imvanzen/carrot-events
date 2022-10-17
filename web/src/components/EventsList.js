import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Table } from 'semantic-ui-react'
import EventItem from './EventItem'
import './EventsList.css'

const NoEvents = () => (
    <Table.Row>
        <Table.Cell colSpan={5}>No events</Table.Cell>
    </Table.Row>
)

const EventsList = ({ events, handleDelete }) => {
    const getEventsList = () => {
        if (!events.length) {
            return <NoEvents />
        }

        return events.map((event) => (
            <EventItem
                key={event.id}
                event={event}
                handleDelete={handleDelete} />
        ))
    }

    return (
        <Table className='events-list' compact celled color='orange'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First name</Table.HeaderCell>
                    <Table.HeaderCell>Last name</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.HeaderCell>Event date</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {getEventsList()}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Link to='/create'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='right'
                                primary>
                                <Icon name='add to calendar' /> Add event
                            </Button>
                        </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default EventsList