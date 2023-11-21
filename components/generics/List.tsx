type ListProps={
    items:string[]
    // onClick:(value:string)=>void
}

export const List=({items}:ListProps)=>{
    return (
        <div>
            <h2>List Items</h2>
         {items.map((index)=>{
            return(
                <div key={index}>{items}</div>
            )
         })}
        </div>
    )
}