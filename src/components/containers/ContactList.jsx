import { useState } from 'react';
import { Contact } from '../../models/contact';
import { ContactComponent } from '../pure/ContactComponent';
import ContactForm from '../pure/forms/ContactForm';

const defaultContact1 = new Contact(
  'Alison',
  987654321,
  'puri@gmail.com',
  true
);

const defaultContact2 = new Contact(
  'Pedro',
  987345621,
  'puri@gmail.com',
  false
);

const defaultContact3 = new Contact(
  'Paul',
  978123645,
  'martinez@gmail.com',
  false
);

const initialContact = [defaultContact1, defaultContact2, defaultContact3];

export const ContactList = () => {
  const [contacts, setContacts] = useState(initialContact);

  const addNewContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleConnected = (contact) => {
    const indexContact = contacts.indexOf(contact);
    const newContacts = [...contacts];
    newContacts[indexContact].connected = !newContacts[indexContact].connected;

    setContacts(newContacts);
  };

  const handleRemoveContact = (contact) => {
    const confirmDelete = window.confirm(`¿Quiere eliminar a ${contact.name}?`);
    if (!contact.connected && confirmDelete) {
      const newContacts = contacts.filter((el) => el.code !== contact.code);
      setContacts(newContacts);
    } else {
      alert(`No se pudo eliminar a ${contact.name}, esta activo!.`);
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='text-center col-12'>
          <h2>Your contacts</h2>
        </div>

        <div className='col col-sm-12 col-lg-4'>
          <ContactForm addNewContact={addNewContact} />
        </div>

        <div className='col col-sm-12 col-lg-8'>
          <div className='card bg-dark overflow-hidden'>
            <div
              className='card-body'
              data-mdb-perfect-scrollbar='true'
              style={{ postion: 'relative', height: '500px' }}
            >
              <table className='table text-white text-center'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Number phone</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Connected</th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((contact) => (
                    <ContactComponent
                      key={contact.code}
                      contact={contact}
                      btnConnected={handleConnected}
                      removeContact={handleRemoveContact}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
