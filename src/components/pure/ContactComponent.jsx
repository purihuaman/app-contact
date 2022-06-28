import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';

export const ContactComponent = ({ contact, btnConnected, removeContact }) => {
  return (
    <tr className='fw-normal'>
      <td>
        <span className='ms-2'>{contact.name}</span>
      </td>

      <td>
        <span className='ms-2'>{contact.phone}</span>
      </td>

      <td>
        <span className='ms-2'>{contact.email}</span>
      </td>

      <td>
        <span className='ms-2'>{contactIsConected(contact, btnConnected)}</span>
      </td>

      <td>
        <span
          onClick={() => removeContact(contact)}
          className='ms-2 text-danger'
          style={styledCursor}
        >
          <i className='ri-delete-bin-2-line ri-xl'></i>
        </span>
      </td>
    </tr>
  );
};

const contactIsConected = (contact, btnConnected) => {
  if (contact.connected) {
    return (
      <span
        onClick={() => btnConnected(contact)}
        className='d-inline-flex justify-content-center align-items-center gap-1  text-success'
        style={styledCursor}
      >
        <i className='ri-toggle-fill ri-xl'></i>
        ON
      </span>
    );
  } else {
    return (
      <span
        onClick={() => btnConnected(contact)}
        className='d-inline-flex justify-content-center align-items-center gap-1 text-danger'
        style={styledCursor}
      >
        <i className='ri-toggle-line ri-xl'></i>
        OFF
      </span>
    );
  }
};

const styledCursor = {
  cursor: 'pointer',
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};
