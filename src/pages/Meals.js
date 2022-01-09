
import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext,useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"


import MealRow from "../components/MealRow";
function Meals() {
    const {meals}= useContext(HospitalsContext)
  const [show, setShow] = useState(false)
  
    return ( <>
         <h1 style={{ fontSize: "30px", marginTop: "20px", textAlign: "center" }}>
        Meals List{" "}
  
      </h1>
      <CDBContainer style={{ marginLeft: "2px" ,paddingLeft:"0px", textAlgin:"centre"}}>
        <CDBTable striped>
          <CDBTableHeader>
            <tr    style={{
              textAlign: "center",
              tableLayout: "sticky",
              backgroundColor: "#202F1C",
              color: "white",
              padding: "0px"}}>
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "20%" }}>Requester Information </th>
              <th style={{ width: "15%" }}>Comment </th>
              <th style={{ width: "15%" }}>Status</th>
              <th style={{ width: "20%" }}>Ingrediant</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </CDBTableHeader>
          <CDBTableBody>
            {meals.map(meal => (
              <MealRow key={meal._id} meal={meal} />
            ))}     
          </CDBTableBody>
        
        </CDBTable>
      </CDBContainer>
    
    </> )
}

export default Meals;