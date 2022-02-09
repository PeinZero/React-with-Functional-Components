import React from 'react'
import User from './User'
import Card from '../UI/Card/Card'


const Users = (props) => {
    const userList = props.users.map( (user) => {
        return <User key={user.id} userName = {user.username} userAge = {user.age} />
    })
    return (
        <Card>
            {userList}
        </Card>
    )
}

export default Users
