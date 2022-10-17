import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Grid, Message } from 'semantic-ui-react'

const NoMatch = () => {
    let location = useLocation()
    return (
        <Grid.Column>
            <Message warning>
                <Message.Header>Oups!</Message.Header>
                <p>Here is nothing you're looking for. <Link to='/'>Go back</Link></p>
                <p><i>{location.pathname}</i> not exists</p>
            </Message>
        </Grid.Column>
    )
}

export default NoMatch