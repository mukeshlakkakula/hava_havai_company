import React from "react";
import "./index.css";
import { FileTrigger, Button } from "@adobe/react-spectrum";
import Airports from "../Airports";
const Body = () => {
  return (
    <div>
      <div>
        <Airports />
      </div>
      <FileTrigger acceptedFileTypes={["image/png"]}>
        <Button variant="primary" style={{ width: "150px" }}>
          Select files
        </Button>
      </FileTrigger>
    </div>
  );
};

export default Body;
