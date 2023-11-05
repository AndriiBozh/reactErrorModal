import { useState } from "react";
import "./App.css";
import AddUserInput from "./components/AddUserInput";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <>
      <h1>Add User</h1>
      <AddUserInput addUser={addUser} />
      <Users users={users} />
    </>
  );
}

export default App;
