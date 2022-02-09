import React from 'react'
import ReactDOM from 'react-dom';

import Card from '../Card/Card'
import Button from '../Button/Button'

import styles from './Modal.module.css'

const Backdrop = props => {
    return <div className={styles['backdrop']} onClick={props.onClick} />
}

const ModalOverlay = props => {
    return (
        <Card className={styles['modal']}> 
            <header className={styles['header']}>
                <h2>{props.title}</h2>
            </header>
            <main className={styles['content']}>
                <p>{props.message}</p>
            </main>
            <footer className={styles['actions']}>
                <Button onClick = {props.onClick}> Okay </Button>
            </footer>
        </Card>
    );
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default Modal
