import { useState } from "react"
type UserProps={
    name:string
}
const User = (props:UserProps) => {
    const [user,setUser]=useState<UserProps>({} as UserProps)
    const handleLoggedin=()=>{
setUser({
    name:'anu'

})
    }
    
  return (
    <div>
        <button onClick={handleLoggedin}>Logged In</button>
        
        <div>User is {user.name}</div>
    </div>
  )
}

export default User