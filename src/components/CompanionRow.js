import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcDeleteRow } from "react-icons/fc";
;
function CompanionRow(props) {
    const { companion} = props
   
    const [editShow, setEditShow] = useState(false)

    const [deleteShow, setDeleteShow] = useState(false)
    return (  
    <>
        <tr style={{fontSize:"15px",fontWeight:"bold",textAlign:"center", padding:"2px"}} >
      <td style={{fontSize:"12px",fontWeight:"bold", }}>{companion._id}</td>
      <td>
        {companion.firstName} {companion.lastName}
      </td>
      
      <td>{companion.fileNumber}</td>
      <td>{companion.email}</td>
      <td>{companion.phone}</td>
      <td>
        <img src={companion.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>


      <td>
 
          <Button style={{ fontSize:"25px",fontWeight:"bold"}}   variant="" onClick={() => setDeleteShow(true)}>
       <FcDeleteRow/>
          </Button>
      </td>
      {/* <DietitianEditModal show={editShow} setShow={setEditShow} dietitian={dietitian} />
      <DietitianDeleteModal show={deleteShow} setShow={setDeleteShow}  dietitianId={dietitian._id} /> */}
    </tr>
  
    </>
     );
}

export default CompanionRow;