import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcEditImage,FcDeleteRow } from "react-icons/fc";
import DietitianDeleteModal from "./DietitianDeleteModal";
import DietitianEditModal from "./DietitianEditModal";
function DietitianRow(props) {
    const { dietitian} = props
   
    const [editShow, setEditShow] = useState(false)

    const [deleteShow, setDeleteShow] = useState(false)
    return (  
    <>
        <tr style={{fontSize:"15px",fontWeight:"bold",textAlign:"center", padding:"2px"}} >
      <td style={{fontSize:"12px",fontWeight:"bold", }}>{dietitian._id}</td>
      <td>
        {dietitian.firstName} {dietitian.lastName}
      </td>
      
      <td>{dietitian.employeeId}</td>
      <td>{dietitian.email}</td>
      <td>{dietitian.phone}</td>
      <td>
        <img src={dietitian.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>


      <td>
      <Button variant="" style={{ fontSize:"30px",fontWeight:"800"}} className="me-2" onClick={() => setEditShow(true)}>
          <FcEditImage/>
        </Button>
       
          <Button style={{ fontSize:"25px",fontWeight:"bold"}}   variant="" onClick={() => setDeleteShow(true)}>
       <FcDeleteRow/>
          </Button>
      </td>
      <DietitianEditModal show={editShow} setShow={setEditShow} dietitian={dietitian} />
      <DietitianDeleteModal show={deleteShow} setShow={setDeleteShow}  dietitianId={dietitian._id} />
    </tr>
  
    </>
     );
}

export default DietitianRow;