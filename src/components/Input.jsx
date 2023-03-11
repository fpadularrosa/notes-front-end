const Input = ({ className, id, name, type, placeholder, onChange, value }) => {
  return (
    <>
        <input required id={id} className={className} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    </>
  );
};

export default Input;