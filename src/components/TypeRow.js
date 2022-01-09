import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcEditImage,FcDeleteRow } from "react-icons/fc";
import TypeEditModal from "./TypeEditModal";
import TypeDeleteModal from "./TypeDeleteModal";


function TypeRow(props) {
    const { type} = props
    const [editShow, setEditShow] = useState(false)

    const [deleteShow, setDeleteShow] = useState(false)
    return (  
    <>
        <tr style={{fontSize:"13px",fontWeight:"600",textAlign:"center", paddingTop:"200px"}} >
      <td style={{paddingTop:"50px"}}>{type._id}</td>
      <td style={{paddingTop:"50px"}}>
        {type.name} 
      </td>
      <td >
        <img src={type.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td >
        <Button variant="" style={{ fontSize:"30px",fontWeight:"800"}} className="me-2" onClick={() => setEditShow(true)}>
          <FcEditImage/>
        </Button>
       
          <Button style={{ fontSize:"25px",fontWeight:"bold"}}   variant="" onClick={() => setDeleteShow(true)}>
       <FcDeleteRow/>
          </Button>
      
      </td>
      <TypeEditModal show={editShow} setShow={setEditShow} type={type} />
      <TypeDeleteModal show={deleteShow} setShow={setDeleteShow}   typeId={type._id} />
    </tr>
  
    </>);
}

export default TypeRow;