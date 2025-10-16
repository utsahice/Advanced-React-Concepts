function TextInput({ label, name, value, onChange, placeholder }) {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          data-testid={`${name}-input`}
          aria-label={label}
        />
      </div>
    );
  }
  
  export default TextInput;
  