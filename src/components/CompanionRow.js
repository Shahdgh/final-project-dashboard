import React from "react"

function CompanionRow(props) {
  const { companion } = props

  return (
    <>
      <tr style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center", padding: "2px" }}>
        <td style={{ fontSize: "12px", fontWeight: "bold" }}>{companion._id}</td>
        <td>
          {companion.firstName} {companion.lastName}
        </td>

        <td>{companion.fileNumber}</td>
        <td>{companion.email}</td>
        <td>{companion.phone}</td>
        <td>
          <img src={companion.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>
      </tr>
    </>
  )
}

export default CompanionRow
