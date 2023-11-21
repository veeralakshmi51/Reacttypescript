type SampleText={
    name:string
    count?:number//here question mark denotes optional
    isLoggedIn:boolean
}

const Sample = (props:SampleText) => {
  return (
    <div>
        <h1>
            {
            props.isLoggedIn ?`Hello ${props.name}! you have ${props.count} unread messages`:`welcome guest`
                
            }
           
        </h1>
    </div>
  )
}

export default Sample