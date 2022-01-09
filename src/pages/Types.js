import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Button } from "react-bootstrap"
import { FcAddDatabase } from "react-icons/fc"

import TypeRow from "../components/TypeRow"
import TypeAddModal from "../components/TypeAddModal"
function Types() {
  const { types } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)

  if (!types) return <p> loding..</p>
  const data = () => {
    return {}
  }
  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>
        Menu List{" "}
        <Button
          style={{ marginLeft: "40px", marginBottom: "10px", fontSize: "40px" }}
          onClick={() => setShow(true)}
          variant=""
        >
          <FcAddDatabase />{" "}
        </Button>
      </h1>
   
      <CDBContainer>
        <CDBTable
          striped
          bordered
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          materialSearch={true} >
          <tr
            style={{
              textAlign: "center",
              tableLayout: "sticky",
              backgroundColor: "#202F1C",
              color: "white",
              padding: "0px",
            }}
          >
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "20%" }}> Name </th>
            <th style={{ width: "30%" }}> Avatar</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>

          <CDBTableBody style={{ textAlign: "center" }}>
            {types.map(type => (
              <TypeRow key={type._id} type={type} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
      <TypeAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Types