import React, { useState } from "react";
import "./Card.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { v4 as uuid } from "uuid";

export default function Card() {
  const valueObj = {
    content: "",
    id: uuid(),
  };
  const [item, setItem] = useState(valueObj);
  const [note, setNote] = useState([]);

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.taraget. name;;

    const { value, name } = event.target;

    setItem({
      ...item,
      [name]: value,
    });
  };



  const deleteItem = (ItemId) => {
    const newNotes = [...note].filter((item) => item.id !== ItemId);
    setNote(newNotes);
  };

  const addNote = () => {
    setNote([...note, item]);
    console.log(note);
    setItem(valueObj);
  };

  return (
    <div className="center_div">
      <div className="main_div_createnote">
        <form className="form">
          <textarea
            name="content"
            value={item.content}
            cols="30"
            rows="5"
            placeholder="Write a note..."
            onChange={inputEvent}></textarea>

          <Button onClick={() => deleteItem()}>
            <DeleteIcon className="Delete_button" />
          </Button>

          <Button>
            <EditIcon className="Edit_button" />
          </Button>
        </form>
      </div>
      {/* <div className="note_div">
        {note.map((val, id , content)=>{
      return <Card 
        key={id}
        id = {id}
        content = {content}
        deleteNote = {deleteItem(id)}
      /> 
    })}
      </div> */}
    </div>
  );
}
