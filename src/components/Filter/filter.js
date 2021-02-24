import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition } from 'react-transition-group';
import addTransition from 'components/ContactList/transitions/addTransition.module.css';
import s from 'components/Filter/filter.module.css';

export default function Filter({value, onChangeFilter}){
    return ( 
        
        <CSSTransition timeout={250} classNames={addTransition} appear={true}>
            <form className={s.filter}>
            <label className={s.label}>Find contacts by name</label>
                <input className={s.input} type="name" value={value} onChange={e => onChangeFilter(e.target.value)} />
            </form>
            </CSSTransition>  
            
    )
}
Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
 };