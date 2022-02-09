import React, {useState, useRef} from 'react'
import styles from './NewUser.module.css'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import Modal from '../UI/Modal/Modal'

const NewUser = (props) => {
    const [error, setError] = useState()
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault()
        
        const username = nameInputRef.current.value
        const age = ageInputRef.current.value

        if (username.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if (+age < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }

        props.onSaveNewUser(username, age)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        setError(null)
    }
    
    return (
        <React.Fragment>
            {error && <Modal title={error.title} message={error.message} onClick = {errorHandler}/>}
            <Card className={styles['new-form']}>
                <form onSubmit={formSubmitHandler} className={styles['user_form']}> 
                    <div className={styles['form_control']}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" ref={nameInputRef}/>
                    </div>
                    <div className={styles['form_control']}>
                        <label htmlFor="age">Age (Years)</label>
                        <input type="number" name="age" id="age" ref={ageInputRef}/>
                    </div>
                    <Button type="submit"> Add User </Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default NewUser
