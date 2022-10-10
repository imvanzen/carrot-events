import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <div className='app ui container' style={{ marginTop: '10px' }}>
      <Header />
      <Events />
    </div>
  )
}

export default App