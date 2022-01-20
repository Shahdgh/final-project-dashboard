import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"

import CompanionRow from "../components/CompanionRow"
function Companion() {
  const { companions } = useContext(HospitalsContext)
 

  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>Companion List </h1>
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
              <th style={{ width: "20%" }}>Full Name </th>
              <th style={{ width: "20%" }}>patient File</th>
              <th style={{ width: "20%" }}>Email</th>
            
              <th style={{ width: "30%" }}>Avatar</th>
            </tr>
          </CDBTableHeader>
          <CDBTableBody>
            {companions.map(companion => (
              <CompanionRow key={companion._id} companion={companion} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
    </>
  )
}

export default Companion
