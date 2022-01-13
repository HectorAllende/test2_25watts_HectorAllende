import React, { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState(false)
    const [confirmacion, setConfirmacion] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if ([name, email, phone, message].includes('')) {
            setError(true)
            setConfirmacion(false)
            return
        }
        setConfirmacion(true)
        setError(false)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')

        setTimeout(() => {
            setConfirmacion(false)
        }, 2000);

    }

    return (

        <section className='contact after1'>
            <div className='contact_text container'>
                <h1 className='principal'>Get in touch</h1>
                <h1 className='secondary'>We are hiring!</h1>
                <form
                    onSubmit={handleSubmit}
                    autoComplete="new-password"
                >
                    <div className="form_input">
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            autoComplete="off"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form_input">
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            autoComplete="off"
                            onChange={e => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="form_input">
                        <input
                            id="tel"
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            autoComplete="off"
                            onChange={e => setPhone(e.target.value)}

                        />
                    </div>
                    <div className="form_textarea">
                        <textarea
                            id="message"

                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    {error && <p className='form_error'>Attention: All fields are required</p>}
                    {confirmacion && <p className='form_ok'>Message sent successfully</p>}

                    <input type="submit" value="Send" />
                </form>
            </div>
            <div className='contact_img container'>
                <img src="img/contact.png" alt="" className='img-fluid' />
            </div>
        </section>
    );
}

export default Contact;