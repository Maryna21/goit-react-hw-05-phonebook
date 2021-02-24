import React from 'react';
import PropTypes from 'prop-types';
import s from 'components/ContactList/contactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import addTransition from 'components/ContactList/transitions/addTransition.module.css';
import Cross from 'svg/cross';

const ContactList = ({contacts, onDeleteContact})=>(
    <TransitionGroup component="ul" className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={addTransition} appear={true} unmountOnExit>
        <li className={s.item}>
          <div>{name}</div>
          <div className={s.number}>{number}</div>
          <button className={s.buttonDelete} type="button" onClick={() => onDeleteContact(id)}><Cross/>
      </button>
        </li>
        </CSSTransition>
    ))}
  </TransitionGroup>

)
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    }),
  )
};
export default ContactList;