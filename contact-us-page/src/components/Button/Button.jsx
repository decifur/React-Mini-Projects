import styles from './Button.module.css';

const Button = ({isOutline,icon,text, ...rest }) => { //             --> can also write this instead of (props)
    // const{isOutline,icon,text} = props;                 --> can also write this instead of (props.icon, props.text...)
    return <button {...rest} className={isOutline ? styles.secondary_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
}

export default Button;