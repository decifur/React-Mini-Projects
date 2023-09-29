import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
    return <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize="20px"/>} />
            <Button text = "VIA CALL" icon = {<IoMdCall fontSize="20px"/>} />
        </div>
        <Button isOutline={true} text = "VIA EMAIL FORM" icon = {<HiMail fontSize="20px"/>} />
    </div>
    <div className={styles.contact_image}></div>
    </section>
}

export default ContactForm;