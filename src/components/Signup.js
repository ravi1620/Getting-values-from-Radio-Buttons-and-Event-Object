import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function Signup() {
  let ageInputRef = useRef();
  let ageResultRef = useRef();
  let firstNameInputRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameInputRef = useRef();
  let lastNameResultRef = useRef();
  let selectStateRef = useRef();
  let resultRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let selectedGender;
  let selectedMS;
  let salutation;

  let loc = useLocation();
  console.log(loc);

  

  let signupAccount = () => {
    if (selectStateRef.current.value == "Select State") {
      alert("Please select your state.");
    } else {
      if (selectedGender == "Male") {
        salutation = "Mr.";
      }
      if (selectedGender == "Female") {
        if (selectedMS == "Single") {
          salutation = "Miss.";
        } else {
          salutation = "Mrs.";
        }
      }
      resultRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value}
            ${lastNameInputRef.current.value}  is from 
            ${selectStateRef.current.value} your account has been created`;
    }
  };

  return (
    <div className="App">
      <h1>
        {loc && loc.state && loc.state.msg
          ? loc.state.msg
          : "No Message to Display here"}
      </h1>

      <form className="form">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            ref={firstNameInputRef}
            minLength="2"
            maxLength="20"
          ></input>
          <span className="span" ref={firstNameResultRef}></span>
        </div>
        <div>
          <label className="label">Last Name</label>
          <input type="text" ref={lastNameInputRef}></input>
          <span className="span" ref={lastNameResultRef}></span>
        </div>
        <div>
          <label className="label">Age</label>
          <input
            type="number"
            minLength="1"
            maxLength="3"
            ref={ageInputRef}
          ></input>
          <span className="span" ref={ageResultRef}></span>
        </div>
        <div>
          <label className="label">Gender</label>
          <label className="label" style={{ width: "auto" }}>
            Male
          </label>
          <input
            type="radio"
            name="Gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "Male";
              }
            }}
          ></input>

          <label className="label" style={{ width: "40px" }}>
            Female
          </label>
          <input
            type="radio"
            name="Gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "Female";
              }
            }}
          ></input>
        </div>
        <div>
          <label className="label">Marital Status</label>
          <label className="label" style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="MS"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "Single";
              }
            }}
          >
          
          </input>

          <label className="label" style={{ width: "auto" }}>Married</label>
          <input
            type="radio"
            name="MS"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "Married";
              }
            }}
          ></input>
        </div>
        <div>
          <label className="label">Address</label>
         <textarea></textarea>
        </div>

        <div>
          <label className="label">Postal Code</label>
          <input type="number"></input>
        </div>
        <div>
          <label className="label">Select State</label>
          <select ref={selectStateRef}>
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chattisgarh</option>
            <option>Gujarat</option>
            <option value="HR">Haryana</option>
            <option>Jammu and Kashmir</option>
            <option>Jarkhand</option>
            <option>Karnataka</option>
            <option>Odisha</option>
            <option>Punjab</option>
          </select>
        
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              signupAccount();
            }}
          >
            Create Account
          </button>
        </div>
        <p ref={resultRef}></p>
        <Link to="/home">Desktop</Link>
      </form>
    </div>
  );
}

export default Signup;
