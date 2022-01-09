import React from "react"
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact"
import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Col, Form, Row } from "react-bootstrap"
function Login() {
  const { login } = useContext(HospitalsContext)
  return (
    <Form className="mt-5" onSubmit={login}>
      <CDBCard className="text-center algin-items-center mt-4 mb-2" style={{justifyContent: "center", marginLeft:"50px", width: "44rem" ,height:"33rem"}}>
        <CDBCardBody className="mx-4">
          <div className="text-center algin-items-center mt-4 mb-2">
            <p style={{justifyContent: "center", fontSize:"35px",fontWeight:"600"}} > Login</p>
          </div>
    
          <Form.Group as={Row} className=" text-center algin-items-center mb-2 mb-3">
            <Form.Label  column md="2 fs-5 ">
              Email
            </Form.Label>
            <Col md="6">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>{" "}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2 fs-5 ">
              Password
            </Form.Label>
            <Col md="6">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
          <CDBBtn  style={{ width: "30%",backgroundColor:"#202F1C",border: "none"  }} className="btn-block mt-5 mx-auto" type="submit">
            Login
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </Form>

  )
}
export default Login
