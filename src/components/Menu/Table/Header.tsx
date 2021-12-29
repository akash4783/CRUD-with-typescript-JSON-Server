import React from "react";
import {Button} from 'react-bootstrap'
import AddComp from "./AddComp"
import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TableComponent from "./Tablecomp";
import EditUser from "./EditUser";



function Header() {
 
    return (
        <div>
             <Router>
                <div className="header">
                    <span className="user">
                        <Link to="/">User</Link>
                    </span>
                    <span className="orders">
                        <Link to="/orders">Order</Link>
                    </span>
                    <span className="reports">
                        <Link to="/contact">Reports</Link>
                    </span>
                </div>
                
                <Switch>
                    <Route exact path='/' component={TableComponent} />
                    <Route path="/addnew" component={AddComp}/>
                    <Route path="/editUser/:id" component={EditUser}/>
                    {/* <Route exact path='/about' component={About}></Route>
                    <Route exact path='/contact' component={Contact}></Route> */}
                 </Switch>
            </Router> 
           
        </div>
    )
}
export default Header
