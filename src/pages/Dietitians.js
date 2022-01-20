import DietitianRow from "../components/DietitianRow"
import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Button } from "react-bootstrap"
import { FcAddDatabase } from "react-icons/fc"
import DietitianAddModal from "../components/DietitianAddModal"
function Dietitians() {
  const { dietitians } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>
        Dietitian List{" "}
        <Button
          style={{ marginLeft: "40px", marginBottom: "10px", fontSize: "40px" }}
          onClick={() => setShow(true)}
          variant=""
        >
          <FcAddDatabase />{" "}
        </Button>
      </h1>
      <CDBContainer style={{ marginLeft: "2px", paddingLeft: "0px", textAlgin: "centre" }}>
        <CDBTable striped>
          <CDBTableHeader>
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
              <th style={{ width: "10%" }}>EmployeeId</th>
              <th style={{ width: "10%" }}>Email</th>
              <th style={{ width: "10%" }}> Phone</th>
              <th style={{ width: "20%" }}>Avatar</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </CDBTableHeader>
          <CDBTableBody>
            {dietitians.map(dietitian => (
              <DietitianRow key={dietitian._id} dietitian={dietitian} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
      <DietitianAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Dietitians
