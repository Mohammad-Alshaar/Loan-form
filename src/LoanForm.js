import "./LoanForm.css";
import "./Modal.css";
import Modal from "./Modal";
import { useState } from "react";
import MyComponent from "./MyComponent";
import { loanInputContext } from "./contexts/LoanFormInputContext";
import { useContext } from "react";
import { informations } from "./contexts/PersonalInformations";
export default function LoanForm() {
  let userData = useContext(informations);
  let initialName = userData.name;
  const [dataForm, setDataForm] = useState({
    name: initialName,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);
  const isDisabled =
    dataForm.name === "" || dataForm.phoneNumber === "" || dataForm.age === "";
  function clickHandler(e) {
    e.preventDefault();
    setMessage(null);
    if (dataForm.age < 18 || dataForm.age > 100)
      setMessage("Age is not allowed");
    else if (
      dataForm.phoneNumber.length < 10 ||
      dataForm.phoneNumber.length > 12
    )
      setMessage("phone number is not allowed");
    setShow(true);
  }
  function divClickHandler(e) {
    if (show === true) setShow(false);
  }
  function phoneNumberChange(value) {
    setDataForm({ ...dataForm, phoneNumber: value });
  }
  function ageChange(value) {
    setDataForm({ ...dataForm, age: value });
  }
  function nameChange(value) {
    setDataForm({ ...dataForm, name: value });
  }
  return (
    <div onClick={divClickHandler}>
      <form>
        <h1>Requesting a Loan </h1>

        {/* <label>Name</label>
        <input
          value={dataForm.name}
          onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })}
        /> */}
        {/* 222222222222222222222222222 */}
        {/* <MyComponent
          label="Name"
          value={dataForm.name}
          changeHandler={nameChange}
        /> */}
        <loanInputContext.Provider
          value={{
            label: "Name",
            value: dataForm.name,
            changeHandler: nameChange,
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>
        {/* 222222222222222222222222222222 */}
        {/* <label>Phone Number</label>
        <input
          value={dataForm.phoneNumber}
          onChange={(e) =>
            setDataForm({ ...dataForm, phoneNumber: e.target.value })
          }
        /> */}

        {/* <MyComponent
          label="phone Number"
          value={dataForm.phoneNumber}
          changeHandler={phoneNumberChange}
        /> */}
        <loanInputContext.Provider
          value={{
            label: "phone Number",
            value: dataForm.phoneNumber,
            changeHandler: phoneNumberChange,
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>
        {/* <label>Age</label>
        <input
          value={dataForm.age}
          onChange={(e) => setDataForm({ ...dataForm, age: e.target.value })}
        /> */}
        {/* <MyComponent
          label="Age"
          value={dataForm.age}
          changeHandler={ageChange}
        /> */}
        <loanInputContext.Provider
          value={{
            label: "Age",
            value: dataForm.age,
            changeHandler: ageChange,
          }}
        >
          <MyComponent />
        </loanInputContext.Provider>
        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={dataForm.isEmployee}
          onChange={(e) =>
            setDataForm({ ...dataForm, isEmployee: e.target.checked })
          }
        />
        <label>Salary</label>
        <select
          value={dataForm.salary}
          onChange={(e) => setDataForm({ ...dataForm, salary: e.target.value })}
        >
          <option>more than 2000$</option>
          <option>more than 4000$</option>
          <option>more than 6000$</option>
        </select>
        <button
          className={isDisabled ? "disabled" : ""}
          onClick={clickHandler}
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
      <Modal visibility={show} message={message} />
    </div>
  );
}
