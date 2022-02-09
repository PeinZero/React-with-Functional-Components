import React from 'react'
import styles from './User.module.css'

const User = (props) => <div className={styles['user']}>{props.userName} ({props.userAge} years old)</div>

export default User
