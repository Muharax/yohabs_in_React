import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    email: '',
    temat: '',
    wiadomosc: ''

    //dodaj więcej pól formularza według potrzeb
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost/react/submit.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='container'>
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
                    <select id="temat" name="temat" value={form.temat} onChange={handleChange}>
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
                <textarea id="wiadomosc" placeholder="Write something.." name="wiadomosc" value={form.wiadomosc} onChange={handleChange}></textarea>
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