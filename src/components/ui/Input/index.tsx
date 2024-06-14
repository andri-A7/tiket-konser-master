import styles from "./Input.module.scss";

type Proptypes = {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  defaultValue?: string;
  disabled?: boolean;
};

const Input = (props: Proptypes) => {
  const { label, name, type, placeholder, defaultValue, disabled } = props;

  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        id={name}
        className={styles.container__input}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
