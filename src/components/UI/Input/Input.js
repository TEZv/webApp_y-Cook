const Input = (props) => {
  const inputStyle =
    "w-4/5 lg:w-1/4 font-semibold rounded-lg min-w-4 p-2 self-center";
  const extendedInputStyle = [props.className, inputStyle, props.invalid && "bg-red-200 border-roseRed border-2"].join(" ");
  return (
    <input
      id={props.id}
      type={props.type}
      className={extendedInputStyle}
      onBlur={props.onBlur}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
