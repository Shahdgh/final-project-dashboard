import React from "react"
import { CDBTable,  CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Button } from "react-bootstrap"
import { FcAddDatabase } from "react-icons/fc"
import PatientRow from "../components/PatientRow"
import PatientAddModal from "../components/PatientAddModal"

function Patients() {
  const { patients } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)

  if (!Patients) return <p> loding..</p>
  const data = () => {
    return {}
  }
  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>
        Patient List{" "}
        <Button
          style={{ marginLeft: "40px", marginBottom: "10px", fontSize: "40px" }}
          onClick={() => setShow(true)}
          variant=""
        >
          <FcAddDatabase />{" "}
        </Button>
      </h1>

      <CDBContainer>
        <CDBTable striped bordered hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} materialSearch={true}>
          <tr
            style={{
              textAlign: "center",
              tableLayout: "sticky",
              backgroundColor: "#202F1C",
              color: "white",
              padding: "0px",
            }}
          >
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "15%" }}>Full Name </th>
            <th style={{ width: "10%" }}>file Number</th>
            <th style={{ width: "5%" }}>phone</th>
            <th style={{ width: "10%" }}> Avatar</th>
            <th style={{ width: "5%" }}>Blood Type</th>
            <th style={{ width: "15%" }}>Disease</th>
            <th style={{ width: "35%" }}>Actions</th>
          </tr>

          <CDBTableBody style={{ textAlign: "center" }}>
            {patients.map(patient => (
              <PatientRow key={patient._id} patient={patient} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
      <PatientAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Patients
