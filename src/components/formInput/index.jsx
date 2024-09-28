import styles from './styles.module.css';

function FormInput({
  register,
  type,
  title,
  validation,
  placeholder,
  inputStyles,
}) {
  return (
    <input
      style={inputStyles}
      className={styles.input}
      {...register(title, validation)}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
