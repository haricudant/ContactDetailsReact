import React, { Component } from "react";

import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: "1",
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "111-111-111",
        },
        {
          id: "2",
          name: "Michael",
          email: "mk@gmail.com",
          phone: "111-111-111",
        },
        {
          id: "3",
          name: "Nalan Kumarasaamy",
          email: "nk@gmail.com",
          phone: "111-111-111",
        },
      ],
    };
  }

    deleteContact = id => {
      
      const { contacts } = this.state;
      const newContacts = contacts.filter(contact => contact.id !== id);
  
   
      this.setState({
          contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (     
      <React.Fragment>
            {contacts.map((contact => (
                <Contact
                    key={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                    deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
            )))}
      </React.Fragment>
    );
  }
}

export default Contacts;
