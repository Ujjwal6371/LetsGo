import { useEffect, useState } from "react";

function TravelForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [EmailID,setEmailID] = useState(props.EmailIDValue);
    const [PhoneNo,setPhoneNo] = useState(props.PhoneNoValue);
    const [Travel_Destination,setTravel_Destination] = useState(props.Travel_DestinationValue);

    useEffect(()=>{
        setName(props.NameValue);
        setEmailID(props.EmailIDValue);
        setPhoneNo(props.PhoneNoValue);
        setTravel_Destination(props.Travel_DestinationValue);
    },[props.NameValue,props.EmailIDValue,props.PhoneNoValue,props.Travel_DestinationValue]);
   
    const arr = [Name,EmailID,PhoneNo,Travel_Destination];  //[Raj,raj@gmail.com,1]
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name" />
            <input defaultValue={props.EmailIDValue} onChange={(event)=>setEmailID(event.target.value)} class="form-control my-3" placeholder="Enter your EmailID" />
            <input defaultValue={props.PhoneNoValue} onChange={(event)=>setPhoneNo(event.target.value)} class="form-control my-3" placeholder="What is your PhoneNo" />
            <input defaultValue={props.Travel_DestinationValue} onChange={(event)=>setTravel_Destination(event.target.value)} class="form-control my-3" placeholder="Enter your Dream Destination" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default TravelForm;