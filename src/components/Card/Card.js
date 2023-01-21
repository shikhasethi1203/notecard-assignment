import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../RetrospectiveList.css";
import "./Card.css";
import { useDispatch } from "react-redux";
import { deleteCard, handelChangeCard } from "../../Redux/action";
import { IconButton, TextField, Typography } from "@mui/material";

function Card(props) {
  const { card, cardName } = props;

  const dispatch = useDispatch();

  const [isEditEnable, setIsEditEnable] = React.useState(false);
  const [inputText, setInputText] = React.useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleDelete = (i) => {
    dispatch(deleteCard(card.id, cardName));
  };

  const onSubmit = () => {
    dispatch(handelChangeCard(card.id, inputText, cardName));
    setIsEditEnable(false);
  };

  console.log({ isEditEnable, inputText });

  const renderForm = () => (
    <form className="form">
      <TextField
        multiline
        name="content"
        cols="30"
        rows="5"
        placeholder="Write a note..."
        value={inputText}
        onChange={handleChange}
      />
      <button type="submit" onSubmit={onSubmit} style={{ display: "none" }}>
        save
      </button>
    </form>
  );

  const renderContent = () => {
    console.log(card);
    if (!!card.inputText)
      return (
        <Typography
          variant="body1"
          gutterBottom
          style={{ wordWrap: "break-word" }}
        >
          {card.inputText}
        </Typography>
      );
    return (
      <Typography variant="body2" gutterBottom>
        "Please Write Something"
      </Typography>
    );
  };

  return (
    <div className="card_wrapper" key={card.id}>
      <div className="card_content">
        {isEditEnable ? renderForm() : renderContent()}
      </div>
      <IconButton onClick={() => handleDelete(card.id)}>
        <DeleteIcon className="delete_button" />
      </IconButton>
      <IconButton
        onClick={() => {
          setIsEditEnable(!isEditEnable);
        }}
      >
        <EditIcon className="edit_button" />
      </IconButton>
      <Button onClick={onSubmit}>Save</Button>
    </div>
  );
}
export default Card;
