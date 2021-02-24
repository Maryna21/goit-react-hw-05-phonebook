import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from 'components/Error/error.module.css';
import errorTransition from 'components/Error/errorTransition.module.css';
const Error = () => {
    return (
         <CSSTransition
            in={true}
            timeout={250}
            classNames={errorTransition}
            unmountOnExit
        >
            <div className={s.box}>Contact is already exists!</div>
            </CSSTransition>
    )
}
export default Error;