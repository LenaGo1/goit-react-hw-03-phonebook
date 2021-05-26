import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <div>
        <ul className = {styles.list}>
            {contacts.map(( {id, name, number} ) => (
                <li key={id} className = {styles.item}>
                    <p className = {styles.contact}>{name}: {number}</p>
                    <button className = {styles.button} onClick = {()=> onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
     </div>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    onDeleteContact:PropTypes.func.isRequired
}

export default ContactList;