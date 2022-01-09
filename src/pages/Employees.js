import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Button } from "react-bootstrap"
import { FcAddDatabase } from "react-icons/fc"
import EmployeeRow from "../components/EmployeeRow"
import EmployeeAddModal from "../components/EmployeeAddModal"
function Employees() {
  const { employees } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)

  if (!employees) return <p> loding..</p>
  const data = () => {
    return {}
  }
  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>
        Employee List{" "}
        <Button
          style={{ marginLeft: "40px", marginBottom: "10px", fontSize: "40px" }}
          onClick={() => setShow(true)}
          variant=""
        >
          <FcAddDatabase />{" "}
        </Button>
      </h1>
      {/* <div style={{ display: "flex", justifyContent: "flex-top" }}>
   
      </div> */}
      <CDBContainer>
        <CDBTable
          striped
          bordered
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          materialSearch={true}

          //   striped
          //         bordered
          //         entriesOptions={[5, 20, 25]}
          //         checkbox
          //         // paging={false}
          //         materialSearch
        >
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
            <th style={{ width: "20%" }}>Full Name </th>
            <th style={{ width: "10%" }}>EmployeeId</th>
            <th style={{ width: "5%" }}>Email</th>
            <th style={{ width: "10%" }}> Phone</th>
            <th style={{ width: "20%" }}>Avatar</th>
            <th style={{ width: "10%" }}>Job</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>

          <CDBTableBody style={{ textAlign: "center" }}>
            {employees.map(employee => (
              <EmployeeRow key={employee._id} employee={employee} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
      <EmployeeAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Employees
