import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import axios from "axios"
import Sidebar from "./components/Sidebar"
import React from "react"
import Employees from "./pages/Employees"
import HospitalsContext from "./utils/HospitalsContext"
import Login from "./pages/Login"
import { Row, Col } from "react-bootstrap"
import Dietitians from "./pages/Dietitians"
import Patients from "./pages/Patients"
import Ingredients from "./pages/Ingredients"
import Types from "./pages/Types"
import Meals from "./pages/Meals"
import Admins from "./pages/Admins"
import Companion from "./pages/Companion"
function App() {
  const [employees, setEmployees] = useState([])
  const [dietitians, setDietitians] = useState([])
  const [companions, setCompanions] = useState([])

  
  const [types, setTyps] = useState([])
  const [patients, setPatients] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [profileAdmin, setProfileAdmin] = useState([])
  const [admins, setAdmins] = useState([])
  const [meals, setMeals] = useState([])

  const navigate = useNavigate()

  const getAdmins = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setAdmins(response.data)
    // console.log(response.data)
  }
  const getProfileAdmin = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin/profile", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setProfileAdmin(response.data)
    // console.log(response.data)
  }

  const getPatients = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin/patient", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setPatients(response.data)
    // console.log(response.data)
  }
  const getEmployees = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin/employee", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    const data = response.data
    // console.log(data)
    setEmployees(response.data)
  }

  const getTypes = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/types", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setTyps(response.data)
    // console.log(response)
  }
  const getDietitians = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin/dietitien", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setDietitians(response.data)
    // console.log(response.data)
  }
  const getCompanions = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin/companion", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setCompanions(response.data)
    console.log(response.data)
  }
  const getIngredients = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/admin/ingredients", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setIngredients(response.data)
    // console.log(response.data)
  }
  const getMeals = async () => {
    const response = await axios.get("https://ems-in-hospital.herokuapp.com/api/meals", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setMeals(response.data)
    // console.log(response.data)
  }

  useEffect(() => {
    getAdmins()
    getProfileAdmin()
    getPatients()
    getDietitians()
    getCompanions()////////////
    getEmployees()
    getTypes()
    getIngredients()
    getMeals()
  }, [])

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`https://ems-in-hospital.herokuapp.com/api/admin/login`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      localStorage.tokenDashboard = response.data
      toast.success("login success")
      navigate("/employees")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //********************Add Admins***************************** */
  const addAdmin = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const AdminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("https://ems-in-hospital.herokuapp.com/api/admin/add-admin", AdminBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getAdmins()
      toast.success("add Admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //********************Pastients***************************** */
  //////Dietitians add
  const addPatient = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const patientBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        height: form.elements.height.value,
        weight: form.elements.weight.value,
        age: form.elements.age.value,
        phone: form.elements.phone.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        fileNumber: form.elements.fileNumber.value,
        disease: form.elements.disease.value,
        bloodType: form.elements.bloodType.value,
      }
      await axios.post("https://ems-in-hospital.herokuapp.com/api/admin/patient", patientBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getPatients()
      toast.success("add Patient success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////edit Patient
  const editPatient = async (e, patientId) => {
    e.preventDefault()
    try {
      const form = e.target
      const patientBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        height: form.elements.height.value,
        weight: form.elements.weight.value,
        age: form.elements.age.value,
        phone: form.elements.phone.value,
        avatar: form.elements.avatar.value,
        fileNumber: form.elements.fileNumber.value,
        disease: form.elements.disease.value,
        bloodType: form.elements.bloodType.value,
      }
      await axios.put(`https://ems-in-hospital.herokuapp.com/api/admin/patient/${patientId}`, patientBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getPatients()
      toast.success("edit Patient success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////delete Patient
  const deletePatient = async patientId => {
    try {
      await axios.delete(`https://ems-in-hospital.herokuapp.com/api/admin/patient/${patientId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("Patient deleted")
      getPatients()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //********************Dietitians***************************** */
  //////Dietitians add
  const addDietitian = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const dietitianBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,

        phone: form.elements.phone.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        employeeId: form.elements.employeeId.value,
      }
      await axios.post("https://ems-in-hospital.herokuapp.com/api/admin/dietitien", dietitianBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getDietitians()
      toast.success("add Dietitian success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  /////edit dietitian
  const editDietitian = async (e, dietitianId) => {
    e.preventDefault()
    try {
      const form = e.target
      const dietitianBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,

        avatar: form.elements.avatar.value,
        employeeId: form.elements.employeeId.value,
      }
      await axios.put(`https://ems-in-hospital.herokuapp.com/api/admin/dietitien/${dietitianId}`, dietitianBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getDietitians()
      toast.success("Edit dietitian success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////delete Dietitian
  const deleteDietitian = async dietitianId => {
    try {
      await axios.delete(`https://ems-in-hospital.herokuapp.com/api/admin/dietitien/${dietitianId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("dietitian deleted")
      getDietitians()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //********************Employee***************************** */
  ///add employee
  const addEmployee = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const employeeBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        job: form.elements.job.value,
        phone: form.elements.phone.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        employeeId: form.elements.employeeId.value,
      }
      await axios.post("https://ems-in-hospital.herokuapp.com/api/admin/employee", employeeBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getEmployees()
      toast.success("add employee success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////edit employee
  const editEmployee = async (e, employeeId) => {
    e.preventDefault()
    try {
      const form = e.target
      const employeeBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        job: form.elements.job.value,
        phone: form.elements.phone.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        employeeId: form.elements.employeeId.value,
      }
      await axios.put(`https://ems-in-hospital.herokuapp.com/api/admin/employee/${employeeId}`, employeeBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getEmployees()
      toast.success("Edit employee success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////delete Employee
  const deleteEmployee = async employeeId => {
    try {
      await axios.delete(`https://ems-in-hospital.herokuapp.com/api/admin/employee/${employeeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("Employee deleted")
      getEmployees()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //********************Ingredients***************************** */
  ///add Ingredients
  const addIngredient = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }

      const ingredientBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
        description: form.elements.description.value,
        calories: form.elements.calories.value,
        types: types,
        
      }
      await axios.post("https://ems-in-hospital.herokuapp.com/api/admin/ingredients", ingredientBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getIngredients()
      toast.success("add Ingredients success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////edit Ingredient
  const editIngredient = async (e, ingredientId) => {
    e.preventDefault()
    try {
      const form = e.target
      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }
      const ingredientBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
        description: form.elements.description.value,
        calories: form.elements.calories.value,
        types: types,
      }
      await axios.put(`https://ems-in-hospital.herokuapp.com/api/admin/ingredients/${ingredientId}`, ingredientBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getIngredients()
      toast.success("Edit Ingredients success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////delete Ingredients
  const deleteIngredient = async ingredientId => {
    try {
      await axios.delete(`https://ems-in-hospital.herokuapp.com/api/admin/ingredients/${ingredientId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("Ingredient deleted")
      getIngredients()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //********************Type***************************** */
  ///add Type
  const addType = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const typeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      }
      await axios.post("https://ems-in-hospital.herokuapp.com/api/types", typeBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getTypes()
      toast.success("add Type success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////edit types
  const editType = async (e, typeId) => {
    e.preventDefault()
    try {
      const form = e.target
      const typeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      }
      await axios.put(`https://ems-in-hospital.herokuapp.com/api/types/${typeId}`, typeBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getTypes()
      toast.success("Edit Types success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////delete Types
  const deleteType = async typeId => {
    try {
      await axios.delete(`https://ems-in-hospital.herokuapp.com/api/types/${typeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("type deleted")
      getTypes()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ///logout
  const logout = () => {
    localStorage.removeItem("tokenDashboard")
  }
  ///////////Stor////////
  const store = {
    admins,
    addAdmin,
    profileAdmin,
    types,
    addType,
    editType,
    deleteType,
    login,
    patients,
    addPatient,
    editPatient,
    deletePatient,
    dietitians,
    addDietitian,
    editDietitian,
    deleteDietitian,
    companions,
    employees,
    addEmployee,
    editEmployee,
    deleteEmployee,
    ingredients,
    addIngredient,
    editIngredient,
    deleteIngredient,
    meals,
    logout,
  }
  return (
    <HospitalsContext.Provider value={store}>
      <ToastContainer />
      <Row>
        <Col xs={1} sm={3} style={{ height: "100vh" }}>
          <Sidebar />
        </Col>
        <Col xs={3} sm={9}>
          <Routes>
            <Route path="/employees" element={localStorage.tokenDashboard ? <Employees /> : <Navigate to="/login" />} />
            <Route path="/patients" element={localStorage.tokenDashboard ? <Patients /> : <Navigate to="/login" />} />
            <Route
              path="/ingredients"
              element={localStorage.tokenDashboard ? <Ingredients /> : <Navigate to="/login" />}
            />
            <Route path="/types" element={localStorage.tokenDashboard ? <Types /> : <Navigate to="/login" />} />
            <Route path="/meals" element={localStorage.tokenDashboard ? <Meals /> : <Navigate to="/login" />} />
            <Route path="/admins" element={localStorage.tokenDashboard ? <Admins /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dietitians"
              element={localStorage.tokenDashboard ? <Dietitians /> : <Navigate to="/login" />}
            />
             <Route
              path="/companions"
              element={localStorage.tokenDashboard ? <Companion /> : <Navigate to="/login" />}
            />
          </Routes>
          
        </Col>
      </Row>
    </HospitalsContext.Provider>
  )
}

export default App
