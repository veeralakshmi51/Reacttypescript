type InterfaceProps={
    title:string,
    disable:boolean
}

function Interface({title,disable}:InterfaceProps) {

  return (
    <div>Interface
        <button disabled={disable}>{title}</button>
    </div>
  )
}

export default Interface