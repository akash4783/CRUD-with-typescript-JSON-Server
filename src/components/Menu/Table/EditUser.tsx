import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useParams} from "react-router";
import { editLoudUser } from "../../../screens/Reports/Users/Apicalls";
import { editSubmit } from "../../../screens/Reports/Users/Apicalls";

const EditUser=(props:any)=>{
    const {id}:any = useParams()
    const [data1,setdata1]=useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
    })

    const{firstname,lastname,email,password,mobile}=data1

const handleme=(e:any)=>{
    setdata1({...data1,[e.target.name]:e.target.value})
   

}

const handlesubmit= async (e:any)=>{
    e.preventDefault()
    // await axios.put(`http://localhost:3000/users/${id}`,data1);
    await editSubmit(id,data1)
    props.history.push("/")

}

const loadusers= async ()=>{
    const result = await editLoudUser(id)
    setdata1(result.data)
    
    
}
useEffect(()=>{
    loadusers()
},[])

    return(
        <div>
            <Form onSubmit={handlesubmit}>
         <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>First Name</Form.Label>  
    <Form.Control type="text" name="firstname" value={firstname} onChange={handleme} placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Last Name</Form.Label>  
    <Form.Control type="text" name="lastname" value={lastname} onChange={handleme} placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>  
    <Form.Control type="text" name="email" value={email} onChange={handleme} placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Password</Form.Label>  
    <Form.Control type="text" name="password" value={password} onChange={handleme} placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicTel">
    <Form.Label>Mobile</Form.Label>  
    <Form.Control type="tel" name="mobile" value={mobile} onChange={handleme} placeholder="Enter name" />
    </Form.Group>
    <Button type="submit" variant="warning">Update</Button>
    <Button variant="primary">cancle</Button>
    </Form>
        </div>
    )
}
export default EditUser