import React, { useState } from 'react';
import { URL } from '../../../config';

function Contact() {
  const [form, setForm] = useState({
    email: '',
    temat: 'Mam pytanie',
    wiadomosc: ''
  });

  const [messageStatus, setMessageStatus] = useState(null); // Nowy stan lokalny


  const handleChange = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = e => {

    e.preventDefault();

    // if (!form.email||!form.wiadomosc) {
    //   setMessageStatus('Uzupełnij dane');
    //   return;
    // }

    fetch(`${URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setMessageStatus(data.message);
      // alert(`${data.message}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='container aaa'>
      <div className='AB'>{messageStatus && <div className='msg-color'>{messageStatus}</div>}</div>
        <form onSubmit={handleSubmit}>
        <div className="row">
                <div className="col-25 clear-both">
                    <label htmlFor="fname">E-mail</label>
                </div>
                <div className="col-75">
                    <input type="email" id="email" name="email" onChange={handleChange}/>
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label htmlFor="temat">Temat</label>
                </div>
                <div className="col-75">
                    <select id="temat" name="temat" onChange={handleChange}>
                        <option value="Mam Pytanie">Mam pytanie</option>
                        <option value="Coś nie działa na stronie">Coś nie działa na stronie</option>
                        <option value="Inne">Inne</option>
                    </select>
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label htmlFor="subject">Wiadomość
                </label>
                </div>
                <div className="col-75">
                <textarea id="wiadomosc" placeholder="Write something.." name="wiadomosc" onChange={handleChange}></textarea>
                </div>
                </div>

                <div className="row">
                <div className="col-75">
                    <button type="submit" id="msgSend">Wyślij</button>
                    </div>
                </div>
        </form>
    </div>
  );
}

export default Contact;