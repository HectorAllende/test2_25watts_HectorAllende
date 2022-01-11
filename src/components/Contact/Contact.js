import React from 'react';


const Contact = () => {
    return (

        <section className='contact after1'>
            <div className='contact_text container'>
                <h1 className='principal'>Get in touch</h1>
                <h1 className='secondary'>We are hiring</h1>

                <form action="">

                    <div class="form_input">
                        <input type="text" placeholder="Name" name="name"
                            autoComplete="new-password"/>
                    </div>
                    <div class="form_input">
                        <input type="email" placeholder="Email" name="email"
                            autoComplete="new-password"/>
                    </div>
                    <div class="form_input">
                        <input type="tel" placeholder="Phone" name="tel"
                            autoComplete="new-password"/>
                    </div>
                    <div class="form_textarea">
                        <textarea placeholder="Message" name="mensaje" cols="30" rows="10"
                        ></textarea>
                    </div>
                        <input type="submit" value="Send" />
                 
                </form>

            </div>
            <div className='contact_img container'>
                <img src="img/contact.png" alt="" />
            </div>



        </section>
    );
}

export default Contact;