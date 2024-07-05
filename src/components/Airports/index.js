import React, { useState } from "react";
import "./index.css";
import { Tooltip, TooltipTrigger, ActionButton } from "@adobe/react-spectrum";

import { MdEdit } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const Airports = () => {
  const tableData = [
    {
      airport: "Los Angeles International Airport",
      country: "United States",
      code: "LAX",
      terminals: 5,
    },
    {
      airport: "Heathrow Airport",
      country: "United Kingdom",
      code: "LHR",
      terminals: 4,
    },
    {
      airport: "Tokyo Haneda Airport",
      country: "Japan",
      code: "HND",
      terminals: 3,
    },
    {
      airport: "Sydney Kingsford Smith Airport",
      country: "Australia",
      code: "SYD",
      terminals: 3,
    },
    {
      airport: "Dubai International Airport",
      country: "United Arab Emirates",
      code: "DXB",
      terminals: 3,
    },
    {
      airport: "Charles de Gaulle Airport",
      country: "France",
      code: "CDG",
      terminals: 3,
    },
    {
      airport: "Frankfurt Airport",
      country: "Germany",
      code: "FRA",
      terminals: 2,
    },
    {
      airport: "John F. Kennedy International Airport",
      country: "United States",
      code: "JFK",
      terminals: 6,
    },
  ];
  const [newObj, setObj] = useState({
    airport: "",
    country: "",
    code: "",
    terminals: "",
  });
  const [activeForm, setForm] = useState(false);

  const [tdata, setTdata] = useState(tableData);

  const toggleActive = () => {
    setForm(!activeForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setObj((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const subMit = (event) => {
    event.preventDefault();
    setTdata([...tdata, newObj]);
    setObj({ airport: "", country: "", code: "", terminals: "" });
    setForm(false);
  };

  const delData = (e) => {
    const newItems = tdata.filter((item) => item.code !== e.target.value);
    setTdata(newItems);
  };

  const table = (
    <table style={{ width: "100%" }}>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        <th>
          All Airports <FaArrowDown />
        </th>
        <th>Country</th>
        <th>Code</th>
        <th>Terminals</th>
      </tr>
      {tdata.map((each) => (
        <>
          <hr />
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{each.airport}</td>
            <td>{each.country}</td>
            <td>{each.code}</td>
            <td>{each.terminals}</td>
            <td>
              <TooltipTrigger>
                <ActionButton aria-label="Edit Name">
                  <MdEdit />
                </ActionButton>
                <Tooltip>Change Name</Tooltip>
              </TooltipTrigger>
            </td>
            <td>
              <button
                className="btn"
                value={each.code}
                id={each.code}
                onClick={delData}
                type="button"
              >
                X
              </button>
            </td>
          </tr>
        </>
      ))}
    </table>
  );
  return (
    <div className="airportOuterContainer">
      <div className="airportTopContainer">
        <h4>Airports</h4>
        <div>
          <button className="addNewBtn" onClick={toggleActive}>
            +Add new
          </button>
        </div>
      </div>{" "}
      <div className={activeForm ? "activeForm " : "notActiveForm"}>
        <hr />
        <form onSubmit={subMit}>
          <h4>Enter Here</h4>
          <input
            type="text"
            placeholder="Airport Name"
            name="airport"
            required
            value={newObj.airport}
            onChange={handleInputChange}
          />{" "}
          <input
            type="text"
            required
            placeholder="Country Name"
            name="country"
            value={newObj.country}
            onChange={handleInputChange}
          />{" "}
          <input
            type="text"
            placeholder="Code"
            required
            name="code"
            value={newObj.code}
            onChange={handleInputChange}
          />{" "}
          <input
            type="number"
            placeholder="Terminals in digits"
            required
            name="terminals"
            value={newObj.terminals}
            onChange={handleInputChange}
          />{" "}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <hr />
      <div>{table}</div>
    </div>
  );
};

export default Airports;
