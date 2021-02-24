import PropTypes from 'prop-types';
import shortid from 'shortid';
import React, { Component } from 'react';
import s from 'components/ContactForm/contactForm.module.css'

export default class ContactForm extends Component{
    loginInputId = shortid.generate();
    state = {
        contacts: [],
        name: '',
        number: ''
      }
      handleNameChange=event=>{
        this.setState({[event.currentTarget.name]:event.currentTarget.value});
      }
        handleSubmit = event => {
          event.preventDefault();
         this.props.onAddContact(this.state);
         this.reset();
        }
        reset = () => {
            this.setState({name: '', number:''})
        }
        render() {
            return (
              <form className={s.contactForm} onSubmit={this.handleSubmit}>
                <label className={s.labelForm} htmlFor={this.loginInputId}>Name</label>
                <input className={s.inputForm} type="text" name="name" id={this.loginInputId} value={this.state.name} onChange={this.handleNameChange}/>
                <label className={s.labelForm} htmlFor={this.loginInputId}>Number</label>
                <input className={s.inputForm}  type="tel" name="number" id={this.loginInputId} value={this.state.number} onChange={this.handleNameChange}/>
                <button className={s.buttonContactForm}type="submit">Add contact</button>
              </form>
            );
          }}

          ContactForm.propTypes = {
            handleSubmit: PropTypes.func,
            onAddContact: PropTypes.func,
            loginInputId: PropTypes.func,
            name: PropTypes.string,
            number: PropTypes.number,
         };