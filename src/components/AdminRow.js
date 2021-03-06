import React from "react"

function AdminRow(props) {
  const { admin } = props

  return (
    <>
      <tr style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center", padding: "2px" }}>
        <td style={{ fontSize: "12px", fontWeight: "bold" }}>{admin._id}</td>
        <td>
          {admin.firstName} {admin.lastName}
        </td>

        <td>{admin.email}</td>

        <td>
          <img src={admin.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>
      </tr>
    </>
  )
}

export default AdminRow
