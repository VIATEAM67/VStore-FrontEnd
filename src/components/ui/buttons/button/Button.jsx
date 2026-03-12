import styles from './Button.module.css'

const Button = ({title, onClick, variant = 'primary', disabled = false}) => {
   return (
      <button onClick={onClick}
              className={`${styles.button} ${styles[variant]}`}
              disabled={disabled}
      >
         {title}
      </button>
   )
}

export default Button; 