import React from "react"
import {
  CDBSidebar,
  CDBContainer,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact"
import Employees from "../pages/Employees"
import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { MdFastfood,MdNoMealsOuline} from "react-icons/md";
import { GoSignOut,GoSignIn} from "react-icons/go";


import{Nav} from "react-bootstrap"
function Sidebar(props) {
  // const {admin}=props
    const { profileAdmin,logout } = useContext(HospitalsContext)
  return (

    <>
    
      <CDBContainer style={{height:"100vh",width:"100%", marginLeft:"0px",marginRight:"0px",position:"fixed"}}>
         
        <CDBSidebar textColor="#fff" backgroundColor="#202F1C">
          <CDBSidebarHeader prefix={<i className="fa fa-bars " />}>Dashboard</CDBSidebarHeader>
          
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="fa fa-hospital-user">
              <Link to="/employees">Employees</Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="fa fa-procedures">
              <Link to="/patients">Patients</Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="fa fa-user-md">
              <Link to="/dietitians">Dietitians</Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="th">
              <Link to="/ingredients">Ingredients</Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem >
              <Link to="/meals">< MdNoMealsOuline style={{fontSize:"17px",marginRight:"15px"}}/>  Meals</Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem >
              <Link to="/types">< MdFastfood style={{fontSize:"17px",marginRight:"15px"}}/>  Types Food</Link>
              </CDBSidebarMenuItem>
              {/* MdFastfood */}
            </CDBSidebarMenu>
            
            <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="fa fa-user-cog"><Link to="/admins">Admin</Link></CDBSidebarMenuItem>
            </CDBSidebarMenu>
            <br/>
            <br/>
            <br/>

            <CDBSidebarMenu>
            <CDBSidebarMenuItem > 
            <img src={profileAdmin.avatar} style={{ objectFit: "scale-down", height: "150px", width: "100%" }} />
            <br/>
            <br/>
          
            <p style={{fontSize:"15px",fontWeight:"600" }} >Email: {profileAdmin.email}</p>
           </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          
          {localStorage.tokenDashboard ? (
            <Nav className="ms-auto">
              <Link style={{fontSize:"20px",marginRight:"100px",textDecoration:"none", color: "white",marginBottom:"30px"}}  to="/" onClick={logout}>
                logout <GoSignOut/>
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
           
            <Link style={{fontSize:"20px",marginRight:"100px",textDecoration:"none", color: "white",marginBottom:"30px"}}  to="/login">
             login <GoSignIn/>
            </Link>
          </Nav>
        )}
          {/* <CDBSidebarFooter  style={{ textAlign: "center" }}>
            <div 
              className="sidebar-btn-wrapper "
              style={{
                padding: "30px 50px",
              }}
            > 
             {localStorage.tokenDashboard ? (<Link to="/login">Login</Link>
            
            </div>
          </CDBSidebarFooter> */}
        </CDBSidebar>
      </CDBContainer>
    </>
  )
}

export default Sidebar