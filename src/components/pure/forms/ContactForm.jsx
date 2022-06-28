import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Contact } from '../../../models/contact';

const ContactForm = ({ addNewContact }) => {
  const formRef = useRef('');
  const nameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
  const alertMessageRef = useRef('');

  const addContact = (e) => {
    e.preventDefault();

    const contact = new Contact(
      nameRef.current.value,
      phoneRef.current.value,
      emailRef.current.value,
      false
    );

    if (validForm(nameRef, phoneRef, emailRef, alertMessageRef)) {
      addNewContact(contact);
      formRef.current.reset();
      nameRef.current.focus();
    }
  };

  return (
    <div className='container'>
      <form onSubmit={addContact} action='' ref={formRef} className=''>
        <fieldset>
          <legend className='text-center'>Create a task</legend>
          <div className='form-outline flex-fill mb-2'>
            <label htmlFor='inputName' className='form-label'>
              Name
            </label>
            <input
              type='text'
              ref={nameRef}
              className='form-control'
              id='inputName'
              placeholder='Name'
              autoFocus
            />
          </div>

          <div className='form-outline flex-fill mb-2'>
            <label htmlFor='inputNumber' className='form-label'>
              Number Phone
            </label>
            <input
              type='text'
              ref={phoneRef}
              id='inputNumber'
              minLength={9}
              maxLength={9}
              className='form-control'
              placeholder='999 999 999'
            />
          </div>

          <div className='form-outline flex-fill mb-2'>
            <label htmlFor='inputEmail' className='form-label'>
              Email
            </label>
            <input
              type='email'
              ref={emailRef}
              className='form-control'
              id='inputEmail'
              placeholder='Email'
            />
          </div>

          <div
            ref={alertMessageRef}
            id='inputName'
            className='mb-2 form-text d-none text-danger tex-center'
          >
            Debe completar los campos
          </div>

          <div className=''>
            <button className='d-block btn btn-primary'>Add</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

ContactForm.protoTypes = {
  addNewTask: PropTypes.func.isRequired,
};

const validForm = (nameRef, phoneRef, emailRef, alertMessageRef) => {
  if (!nameRef.current.value) {
    alertMessageRef.current.classList.replace('d-none', 'd-block');
    alertMessageRef.current.textContent = 'Debe completar el campo name';
    nameRef.current.focus();
  } else if (!phoneRef.current.value) {
    alertMessageRef.current.classList.replace('d-none', 'd-block');
    alertMessageRef.current.textContent = 'Debe completar el campo phone';
    phoneRef.current.focus();
  } else if (!emailRef.current.value) {
    alertMessageRef.current.classList.replace('d-none', 'd-block');
    alertMessageRef.current.textContent = 'Debe completar el campo email';
    emailRef.current.focus();
  }

  if (
    nameRef.current.value &&
    phoneRef.current.value &&
    emailRef.current.value
  ) {
    alertMessageRef.current.classList.replace('d-block', 'd-none');
    return true;
  }
};

export default ContactForm;
