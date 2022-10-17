import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import {
  Events,
  EventCreate,
  EventEdit,
  NoMatch
} from './containers'

const App = () => {
  return (
    <Router>
      <Container className='app' text style={{ marginTop: '40px' }}>
        <Segment>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Header>Carrot Events App</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Routes>
                  <Route exact path="/" element={<Events />} />
                  <Route path="/create" element={<EventCreate />} />
                  <Route path="/edit/:eventId" element={<EventEdit />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Router>
  )
}

export default App