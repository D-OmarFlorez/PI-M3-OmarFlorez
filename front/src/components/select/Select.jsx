

const Select = ({ name, options, handleChange }) => {
  return (
    <select name={name} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;