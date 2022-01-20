
import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Button } from "react-bootstrap"
import { FcAddDatabase } from "react-icons/fc"
import AdminRow from "../components/AdminRow"
import AdminAddModal from "../components/AdminAddModal"

function Admins() {
  const { admins } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>
        Admins List{" "}
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
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "30%" }}>Full Name </th>
              <th style={{ width: "20%" }}>Email</th>
              <th style={{ width: "40%" }}>Avatar</th>
            </tr>
          </CDBTableHeader>
          <CDBTableBody>
            {admins.map(admin => (
              <AdminRow key={admin._id} admin={admin} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Admins
