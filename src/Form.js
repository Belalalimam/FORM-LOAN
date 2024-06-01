import React, { useState } from "react";
import Model from "./Model";
import "./App.css";

const Form = () => {
  const [errorMassage, setErrorMassage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [formInput, setformInput] = useState({
    name: "",
    number: "",
    Age: "",
    gender: false,
    select: "",
    status: "",
  });

  function handelShowModel(event) {
    event.preventDefault();
    setErrorMassage(null);
    const { Age, number } = formInput;
    if (Age < 18 || Age > 100) {
      setErrorMassage("The age is not allowed");
    } else if (number.length < 10 || number.length > 12) {
      setErrorMassage("The number is not allowed");
    }
    setShowModel(true)
  }

  function handelDivClick() {
    if (showModel) {
      setShowModel(false);
    }
  }
  const btnDisable =
    // eslint-disable-next-line eqeqeq
    formInput.name == "" || formInput.number == "" || formInput.Age == "";

  return (
    <div className="flex" onClick={handelDivClick}>
      <form
        className="format"
        onSubmit={(event) => {
          console.log(formInput);
          event.preventDefault();
        }}
      >
        <div className="newLie">
          <br />
          <input
            placeholder="Name"
            name="ob"
            type="text"
            className="formInput"
            value={formInput.name}
            onChange={(event) => {
              setformInput({ ...formInput, name: event.target.value });
            }}
          />
        </div>
        <div>
          <label></label>
          <br />
          <input
            placeholder="Number :"
            type="number"
            className="formInput"
            value={formInput.number}
            onChange={(event) => {
              setformInput({ ...formInput, number: event.target.value });
            }}
          />
        </div>
        <div>
          <label></label>
          <br />
          <input
            placeholder="Age:"
            type="number"
            className="formInput"
            value={formInput.Age}
            onChange={(event) => {
              setformInput({ ...formInput, Age: event.target.value });
            }}
          />
        </div>
        <div className="formCheck">
          <label>gender:</label>
          <input
            type="checkbox"
            checked={formInput.gender}
            value={formInput.gender}
            onChange={(event) => {
              setformInput({ ...formInput, gender: event.target.checked });
            }}
          />
        </div>
        <div>
          <br />
          <select
            className="formInput"
            value={formInput.select}
            onChange={(event) => {
              setformInput({ ...formInput, select: event.target.value });
            }}
          >
            <option>Select:</option>
            <option>html</option>
            <option>react</option>
            <option>css</option>
            <option>js</option>
          </select>
        </div>

        <div className="formCheck">
          <button
            type="button"
            id="btn"
            onClick={handelShowModel}
            className={btnDisable ? "disabled" : ""}
            disabled={btnDisable}
          >
            Submit
          </button>
        </div>
      </form>
      <Model errormassage={errorMassage} isVisable={showModel} />
    </div>
  );
};

export default Form;
