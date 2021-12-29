import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap'
import "./Header.css"
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import Message from '../../Message';
import CustomButton from '../../CustomButton';
import { handlemodaldelete } from '../../../screens/Reports/Users/Apicalls';
const TableComponent = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');
  const [userdata, setuserdata] = useState([]);
  const [filterData, setFilterData] = useState([])


  const handleClose = () => {
  

    setShow(false)
  };
 






  useEffect(() => {
    loaduser()

  }, [])

  const loaduser = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setuserdata(result.data)
    setFilterData(result.data);
    console.log(result.data)

  }
  const handledelete = async (id: any) => {
    setSelected(id);

    setShow(true)
  

  }

  const handleModelDelete = async () => {
    if (selected) {
      // const result = await axios.delete(`http://localhost:3000/users/${selected}`);
      const result = await handlemodaldelete(selected)
      loaduser()
    }
    setShow(false)
  }
  const handleclick = () => {
  

    if (search !== "") {
      const result = filterUsers();
      setFilterData(result);
    }

  }


  const filterUsers = () => {
    const result = userdata.filter((item: any) => {
      const firstname = item.firstname.toLowerCase().includes(search.toLowerCase())
      const lastname = item.lastname.toLowerCase().includes(search.toLowerCase())
      const email = item.email.toLowerCase().includes(search.toLowerCase())
      const mobile = item.mobile.toLowerCase().includes(search.toLowerCase())
      const role = item.role.toLowerCase().includes(search.toLowerCase())
      return firstname || lastname || email || mobile || role
    });
    return result;
  }


  const handleSearchChange = (e: any)=>{
    setSearch(e.target.value);
    if(e.target.value === ''){
      setFilterData(userdata)
    }
  }



  return (
    <div>
      <div> <Link to="/addnew"> <Button variant="outline-dark" className="adduser">Add New+</Button></Link></div>
      <div className="search-button">
        <Form className="d-flex">
          <input
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearchChange}

          />
          <Button onClick={handleclick} variant="outline-success">Search</Button>
        </Form>
     </div>
      {/* <Message textMessage="Hello" />
      <Message textMessage="one" textStyle={{color:'red', fontSize:24}} />
      <Message textMessage="Two" textStyle={{color:'blue', fontSize:200}} />  */}
      <CustomButton name="Add" onClick={() => alert('Hello !!')}/>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item: any, id) =>
            <tr>
              <td key ={item.id}>{id+1}</td>
              <td key={id}>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.role}</td>
              <td></td>
              <td>{<Link to={`/editUser/${item.id}`}><Button variant="info">Edit</Button> </Link>}
                {<Button onClick={() => handledelete(item.id)} variant="danger">Delete</Button>}
              </td>
            </tr>
          )

          }

        </tbody>

        {/* <div> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body style={{ alignSelf: "center" }}> Are you sure?</Modal.Body>
          <Modal.Footer style={{ alignSelf: 'center' }}>

            <Button variant="secondary" onClick={handleModelDelete}>
              Yes

            </Button>
            <Button variant="primary" onClick={handleClose}>
              No

            </Button>

          </Modal.Footer>
        </Modal>
        {/* </div> */}
      </Table>

    </div>
  )
}
export default TableComponent;

