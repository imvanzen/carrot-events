import React from 'react'
import Events from './containers/Events'
import { Container, Header } from 'semantic-ui-react'

const App = () => {
  return (
    <Container text className='app' style={{ marginTop: '40px' }}>
      <Events />
    </Container>
  )
}

export default App