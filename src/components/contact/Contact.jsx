import { Modal, Wrapper,Item, Form, Input, Label, Textarea , Illustration } from "./StyledComponants";
import {  primaryColors, SecondaryButton } from "../../utils";
import { useState } from "react";
import illustration from '../../assets/illistrations/email.png'


const Contact = () => {

   const [name, setName] = useState("");   
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [msg, setMsg] = useState("");

   const handleNameChange = (event) => {setName(event.target.value); console.log(event.target.value);}
   const handleEmailChange = (event) => {setEmail(event.target.value)}
   const handlePhoneChange = (event) => {setPhone(event.target.value)}
   const handleMsgChange = (event) => {setMsg(event.target.value)}
   const handleFormSubmit = (e) => {
       e.preventDefault();
        alert("Hey => " + name);
   }

    return (
        <Modal>
           <Wrapper>
               <Form action="#">
                   <Item>
                        <Label >Name: </Label>
                        <Input type="text" id="name" placeholder="Name?" value={name} onChange={handleNameChange} />
                   </Item>    
                    <Item>
                        <Label >Email: </Label>
                        <Input type="text" id="Email" placeholder="Email?" value={email} onChange={handleEmailChange} />
                    </Item>    
                    <Item>
                        <Label >Phone: </Label>
                        <Input type="number" id="Phone" placeholder="Phone(optional)?" value={phone} onChange={handlePhoneChange} />
                   </Item>  
                   <Item>
                        <Label >Message: </Label>
                        <Textarea  placeholder="Message..."  id="msg" value={msg} onChange={handleMsgChange} />
                   </Item>  
                        <SecondaryButton 
                            color={primaryColors[100]} 
                            onClick={handleFormSubmit} >
                            Send Email
                        </SecondaryButton>     
                </Form>
           </Wrapper>
           <Illustration src={illustration} />
        </Modal>
    )
}

export default Contact
