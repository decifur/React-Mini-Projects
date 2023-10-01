import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[text,setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

    }

    const onViaCall = () => console.log("VIA CALL CLICKED!");
    const onViaChat = () => console.log("VIA CHAT CLICKED!");
    const onViaEmail = () => console.log("VIA EMAIL CLICKED!");

    return <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <Button onClick={onViaChat} text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize="20px"/>} />
            <Button onClick={onViaCall} text = "VIA CALL" icon = {<IoMdCall fontSize="20px"/>} />
        </div>
        <Button onClick={onViaEmail} isOutline={true} text = "VIA EMAIL FORM" icon = {<HiMail fontSize="20px"/>} />

        <form  onSubmit={onSubmit} >
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type='text' name='name' />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="name">Email</label>
                <input type='email' name='email' />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name='text' rows='5'/>
            </div>
            <div style={{display: "flex", justifyContent: "end"}}>
                <Button text = "SUBMIT" />
            </div>
            <div>{"Form Output = " + name + " " + email + " " + text}</div>
        </form>

    </div>
    <div className={styles.contact_image}>
        <img src='/images/contact.svg' alt='Contact Image' />
    </div>
    </section>
}

export default ContactForm;