const Form = ({ children, onSubmit, dataTestId, className }) => {
  return (
    <form className={className} onSubmit={onSubmit} data-testid={dataTestId}>
        {
          children
        }
    </form>
  );
};

export default Form;