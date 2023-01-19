import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Component1.css";

function Component1() {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  console.log(val, "data-");
  return (
    <>
      <div className="Title_name">
        <h1> What want well</h1>

        <Button onClick={() => handleAdd()}>
          <AddIcon className="Add_sign" />
        </Button>
      </div>
      {val.map((data, i) => {
        return (
          <div className="center_div">
            <div className="main_div_createnote">
              <form className="form">
                <textarea
                  name="content"
                  cols="30"
                  rows="5"
                  placeholder="Write a note..."
                  value={data}
                  onChange={(e) => handleChange(e, i)}
                />
                <Button onClick={() => handleDelete(i)}>
                  <DeleteIcon className="Delete_button" />
                </Button>
                <Button>
                  <EditIcon className="Edit_button" />
                </Button>
              </form>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Component1;
