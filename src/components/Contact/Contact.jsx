import React from 'react';
import  styles from "./Contact.module.css";
import instagram from "../../assets/instagram.png"
import github from "../../assets/github1.png"
import linkedin from "../../assets/linkedin.png"
import bg1 from "../../assets/bg1.gif"



function submitForm(e){
    e.preventDefault()
    const scriptURL = 'https://sheet.best/api/sheets/f4e86e1a-a02a-462a-a0e5-05e378c53ae8'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Be patient, I will connect with you shortly....!'
        alert("Thank you for contact");
        setTimeout(function(){
            msg.innerHTML = ''
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
}


function Contact() {
    return (
        <div className={styles.contact_component__space} id="Contact" name="contact">
            <div className={styles.row}>
                <div className={styles.col__2}>
                    <div className={styles.contact__box}>
                        <div className={styles.contact__meta}>
                            <h1 className={styles.hire__text}>Contact Me...</h1>
                            <p className={styles.hire__text_white}>I am available for work. Connect with me via phone:</p>
                            <p className={styles.hire__text_white}><strong>+91 8181853924</strong> or email <strong>ashishgupta08181@gmail.com</strong></p>
                        </div>
                        <div className={styles.input__box}>
                            <form name="submit-to-google-sheet" onSubmit={submitForm}>
                                <input type="text" name="Name" placeholder="Enter Your Name" required/>
                                <input type="email" name="Email" placeholder="Enter Your Email" required/>
                                <div className={styles.col-6}><textarea name="Message" rows="6" fixed placeholder="Enter Your Message"></textarea></div>
                                <button className={styles.btn_contact_pointer} type="submit">Submit</button>
                            </form>
                            <span id="msg"></span>
                        </div>
                    </div>
                </div>
                <div className={styles.col__2}>
                    <img src={bg1} alt="" className={styles.contact__img} />
                    <div class={styles.socialicons}>
                    {/* <a target="_blank" href="">
                                <img src={instagram} alt="li"/>   
                            </a> */}
                            
                            <a target="_blank" href="https://www.linkedin.com/in/ashish-gupta081/">
                                <img src={linkedin} alt="li"/>   
                            </a>
                            <a target="_blank" href="https://github.com/ashishgupta08181">
                                <img src={github} alt="gi" />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;