type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void//it does not need any paramater or return a value 
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.handleClick}>Click Event</button>
  )
}

export default Button