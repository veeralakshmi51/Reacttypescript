export type ProfileProps={
    name:string
}
 function Profile({name}:ProfileProps) {
  return (
    <div>Profile Name is : {name}</div>
  )
}

export default Profile