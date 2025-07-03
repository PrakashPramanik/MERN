export default ()=>{
const s1={
    name: "prakash",
    id:"emgminds123",
    location:"blr"
}
return(
    <Coordinator studentDetails = {s1}/>
)
}


let Coordinator = (props) =>{
    return(
        <>
        <h1>{props.studentDetails.name}</h1>
        <h1>{props.studentDetails.id}</h1>
        <h1>{props.studentDetails.location}</h1>
        </>
    )
}