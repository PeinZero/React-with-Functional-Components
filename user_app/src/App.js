import React, {useState} from 'react';
import Users from './components/Users/Users'
import NewUser from './components/NewUser/NewUser'

function App() {
  const [users, setUsers] = useState([])

  const saveNewUserHandler = (username, age) => {
    setUsers( (prevState) => {
      return [{username: username, age: age, id:Math.random().toString()}, ...prevState]
    })
  }

  return (
    <React.Fragment>
      <NewUser onSaveNewUser = {saveNewUserHandler}/>
      { users.length > 0 && <Users users = {users}/>}
    </React.Fragment>
  )
}

export default App;
