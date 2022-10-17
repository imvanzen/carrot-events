import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import Events from './containers/Events'
import EventCreate from './containers/EventCreate'
import EventEdit from './containers/EventEdit'

const App = () => {
  return (
    <Router>
      <Container text className='app' style={{ marginTop: '40px' }}>
        <Segment>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Header>Carrot Events App</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Routes>
                <Route exact path="/" element={<Events />} />
                <Route path="/create" element={<EventCreate />} />
                <Route path="/edit/:eventId" element={<EventEdit />} />
              </Routes>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Router>
  )
}

export default App