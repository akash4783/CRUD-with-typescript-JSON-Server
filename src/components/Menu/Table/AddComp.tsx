import React, { useState } from 'react'
import { Button,Form,Col,Row } from 'react-bootstrap'
import "./Header.css";
import { postData } from '../../../screens/Reports/Users/Apicalls';

function AddUser(props:any) {
    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
        role:'PROPERTY_OWNERS'

    });
    
    const{firstname,lastname,email,password,mobile}=data

    const handlechange = (e: any) => {
        setdata({...data,[e.target.name]:e.target.value})
        
    }
    const handleclick= async (e:any)=>{
        e.preventDefault();
        if(firstname === ''||lastname===""||email===""||password===""||mobile===""){
            alert("all field required")
        }else if(firstname !== ''||lastname !==""||email !==""||password !==""||mobile !==""){


         const result = await postData(data);
       props.history.push("/")
       
    }
    
    }

    return (

        <div>
            <div className="add-user"> <h5> Add New User </h5></div>
            <hr/>
        <div className="form">
          

<Form className="addform" onSubmit={handleclick}>
    <div>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     First Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text"      
            name="firstname"
            value={firstname}
            onChange={handlechange}
            placeholder="First Name"/>
    </Col>
  </Form.Group>
                </div> 
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     Last Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text"      
            name="lastname"
            value={lastname}
            onChange={handlechange}
            placeholder="Last Name" />
    </Col>
  </Form.Group>
   <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text"      
            name="email"
            value={email}
            onChange={handlechange}
            placeholder="First Name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
  Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password"      
            name="password"
            value={password}
            onChange={handlechange}
            placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
Mobile
    </Form.Label>
    <Col sm="10">
      <Form.Control type="tel"      
            name="mobile"
            value={mobile}
            onChange={handlechange}
            placeholder="Mobile" />
    </Col>
  </Form.Group>
            
                <div className="save"> <span > <Button type="submit" variant="primary">Add</Button></span>

                    <span className="cancle"><Button>Cancle</Button></span>
                </div>

            </Form>
        </div>
        </div>
    )
}

export default AddUser