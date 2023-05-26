const InvertedButton = (props) => {
    const buttonStyle = "text-roseRed text-sm font-medium bg-white p-3 rounded-full drop-shadow-md hover:scale-110 hover:translate-y-1 hover:-translate-x-1 transition-all duration-150 active:bg-gray-300"
    const extendedButtonStyle = [
      props.className,
      buttonStyle
    ].join(' ')
    
    return (
      <button className={extendedButtonStyle} onClick={props.onClick} type={props.type}>
        {props.children}
      </button>
    );
  };
  
  export default InvertedButton;