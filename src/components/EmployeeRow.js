import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcEditImage, FcDeleteRow } from "react-icons/fc"
import EmployeeEditModal from "./EmployeeEditModal"

import EmployeeDeleteModal from "./EmployeeDeleteModal"

function EmployeeRow(props) {
  const { employee } = props
  const [editShow, setEditShow] = useState(false)

  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ paddingTop: "50px" }}>{employee._id}</td>
        <td style={{ paddingTop: "50px" }}>
          {employee.firstName} {employee.lastName}
        </td>

        <td style={{ paddingTop: "50px" }}>{employee.employeeId}</td>
        <td style={{ paddingTop: "50px" }}>{employee.email}</td>
        <td style={{ paddingTop: "50px" }}>{employee.phone}</td>
        <td>
          <img src={employee.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>

        <td style={{ paddingTop: "50px" }}>{employee.job}</td>

        <td>
          <Button
            variant=""
            style={{ fontSize: "30px", fontWeight: "800" }}
            className="me-2"
            onClick={() => setEditShow(true)}
          >
            <FcEditImage />
          </Button>

          <Button style={{ fontSize: "25px", fontWeight: "bold" }} variant="" onClick={() => setDeleteShow(true)}>
            <FcDeleteRow />
          </Button>
        </td>
        <EmployeeEditModal show={editShow} setShow={setEditShow} employee={employee} />
        <EmployeeDeleteModal show={deleteShow} setShow={setDeleteShow} employeeId={employee._id} />
      </tr>
    </>
  )
}

export default EmployeeRow
