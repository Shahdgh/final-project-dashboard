import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcEditImage,FcDeleteRow,FcViewDetails } from "react-icons/fc";
import PatientDeleteModal from "./PatientDeleteModal";
import PatientEditModal from "./PatientEditModal";
import PatientViewModal from "./PatientViewModal";


function PatientRow(props) {
    const { patient} = props
    const [viewShow, setViewShow] = useState(false)
    const [editShow, setEditShow] = useState(false)

    const [deleteShow, setDeleteShow] = useState(false)
    return (  
    <>
        <tr style={{fontSize:"13px",fontWeight:"600",textAlign:"center", paddingTop:"200px"}} >
      <td style={{paddingTop:"50px"}}>{patient._id}</td>
      <td style={{paddingTop:"50px"}}>
        {patient.firstName} {patient.lastName}
      </td>
      
      <td style={{paddingTop:"50px"}}>{patient.fileNumber}</td>
      
      <td style={{paddingTop:"50px"}}>{patient.phone}</td>
      <td >
        <img src={patient.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      
      <td style={{paddingTop:"50px"}}>{patient.bloodType}</td>
      <td style={{paddingTop:"50px"}}>{patient.disease}</td>
      <td >
      <Button style={{ fontSize:"25px",fontWeight:"bold"}}   variant="" className="me-2" onClick={() => setViewShow(true)}>
          <FcViewDetails/>
        </Button>
        <Button variant="" style={{ fontSize:"25px",fontWeight:"800"}} className="me-2" onClick={() => setEditShow(true)}>
          <FcEditImage/>
        </Button>
       
          <Button style={{ fontSize:"25px",fontWeight:"bold"}}   variant="" onClick={() => setDeleteShow(true)}>
       <FcDeleteRow/>
          </Button>
      
      </td>
      <PatientViewModal show={viewShow} setShow={setViewShow} patient={patient} />
      <PatientEditModal show={editShow} setShow={setEditShow} patient={patient} />
      <PatientDeleteModal show={deleteShow} setShow={setDeleteShow}  patientId={patient._id} />
    </tr>
  
    </>);
}

export default PatientRow;

