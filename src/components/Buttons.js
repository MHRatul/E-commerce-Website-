function Buttons({onClickHandler, Value, title}) {
  return (<button onClick={onClickHandler} value={"value"} className="btns">
    {title}
    </button>
);

}
export default Buttons;