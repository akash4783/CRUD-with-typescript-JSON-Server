import React from "react";
import AddComp from "../components/Menu/Table/AddComp"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TableComponent from "../components/Menu/Table/Tablecomp";
import EditUser from "../components/Menu/Table/EditUser";



function Routes() {
 
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
                  
                 </Switch>
            </Router> 
           
        </div>
    )
}
export default Routes
