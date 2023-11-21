type PersonProps={
    name:{//object
        firstName:string,
        lastName:string
    }
}
const Person = (props:PersonProps) => {
  return (
    <div><h1>This is {props.name.firstName} {props.name.lastName}</h1></div>
  )
}

export default Person