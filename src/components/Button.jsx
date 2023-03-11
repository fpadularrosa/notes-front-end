const Button = ({ className, children, id, onClick }) => {
  return (
    <>
        <button id={id} className={className} onClick={onClick}>{children}</button>
    </>
  );
};

export default Button;