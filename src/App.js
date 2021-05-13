import { useState, useEffect } from "react";
// import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import API from "./utils/API";


function App() {
  const [employees, setEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    API.getEmployees()
    .then((res) => {
      setEmployees(res.data.results)
    })
  },[])

  return (
    <div>
      {/* <SearchForm /> */}
      <Table allEmployees = {employees} />
    </div>
  )
}

export default App;
