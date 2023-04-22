import React, {useState} from "react";
import Form from "./Form";

function ParentComponent(){
  const[firstName, setFirstName]= useState("mathew")
  const[lastName, setLastName]= useState("prono")

  function handleFirstNameChange(e){
    // console.log(e.target.value)
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }
  return(
    <Form action="">
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
    </Form>
  )
}
export default ParentComponent
