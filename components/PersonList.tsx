import { PersonListProps } from "../Person.Data"

const PersonList = (props:PersonListProps) => {
 return(
    <div>{props.names.map((index)=>{
        return(
            <h2 key={index.first}>{index.first}{index.last}</h2>
        )
    })}</div>
 )
   
}

export default PersonList