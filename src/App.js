import React, { useState } from 'react'
import './assets/styles/main.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null)
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
