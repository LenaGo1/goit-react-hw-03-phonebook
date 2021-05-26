import React, { Component } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList/';
import Container from './Components/Container';
import Filter from './Components/Filter';
import shortid from 'shortid';

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
        ],
        filter:''
    }    
    
    addContact = (newContact) => {        
        newContact['id'] = shortid.generate();
        this.state.contacts.some(contact => contact.name === newContact.name)
        ? alert (`${newContact.name} is already in contacts.`)
        :this.setState(prevState=>({ contacts: [newContact, ...prevState.contacts]}))
    }

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value })
        
    }

    getFilteredContacts = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
       
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter))
        
    }

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact =>
                contact.id !== contactId)            
        }))
    }

    resetFilter = () => {
        this.setState({filter: ''})
    }

    render() {
        const visibleContacts = this.getFilteredContacts()
        return (
            <Container>
                <h1>Phonebook</h1>
                {/* передаем проп onSubmit для ContactForm, сюда будет прокидываться data из ContactForm*/}
                <ContactForm onSubmit={this.addContact}/>
                
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.changeFilter} onClick={this.resetFilter}/>
                <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
            </Container>
        )
    }
}

export default App;