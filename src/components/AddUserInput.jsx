import { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddUserInput = (prop) => {
  const [userName, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (userName.trim() === "" || age <= 10) {
      setErrorModal(true);
      return;
    }

    const user = { name: userName, age: age };
    prop.addUser(user);
    setUserName("");
    setUserAge("");
  };

  return (
    <div>
      {errorModal && (
        <ErrorModal
          errorMessage={"Please fill all fields"}
          closeErrorModal={() => setErrorModal(false)}
        />
      )}
      <input
        name="userName"
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        autoComplete="false"
      ></input>
      <input
        name="userAge"
        type="number"
        placeholder="Age"
        value={age}
        min={0}
        onChange={(e) => setUserAge(e.target.value)}
        autoComplete="false"
      />
      <button onClick={handleButtonClick}>Add User</button>
    </div>
  );
};

export default AddUserInput;
