const Button = (props) => {
  const buttonStyle = "text-white text-sm font-medium bg-roseRed p-3 rounded-full drop-shadow-md hover:scale-110 hover:translate-y-1 hover:translate-x-1 transition-all duration-150 active:bg-red-800 disabled:bg-gray-300"
  const extendedButtonStyle = [
    props.className,
    buttonStyle
  ].join(' ')
  
  return (
    <button className={extendedButtonStyle} onClick={props.onClick} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
