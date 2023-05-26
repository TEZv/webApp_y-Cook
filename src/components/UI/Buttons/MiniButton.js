const MiniButton = (props) => {
    const buttonStyle = "text-white text-md font-semibold bg-roseRed py-1 rounded-lg drop-shadow-md transition-all active:scale-150"
    const extendedButtonStyle = [
      props.className,
      buttonStyle
    ].join(' ')
    
    return (
      <button className={extendedButtonStyle} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };
  
  export default MiniButton;