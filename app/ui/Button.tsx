const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`py-3 px-5 bg-blue-accent text-white rounded-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
