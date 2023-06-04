import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./RetrospectiveList.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../Redux/action";
import Card from "./Card/Card";
import { IconButton, Typography } from "@mui/material";

function RetrospectiveList(props) {
  const { name, id } = props;
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards)
  // console.log(cards);

  const handleAdd = () => {
    console.log({ inputData, name });
    dispatch(addCard(inputData, name));
    setInputData("");
  };

  const renderCards = () => {
    if (cards && cards[name]) {
      return (
        <div className="cards-wrapper">
          {cards[name].map((card, index) => (
            <Card card={card} cardName={name} key={card.id} />
          ))}
          
        </div>
      );
    }
    return <Typography>Nothing in list</Typography>;
  };

  return (
    <>
      <div className="retrospective-wrapper">
        <div className="head-content">
          <h1>{name}</h1>
          <IconButton color="red" onClick={handleAdd}>
            <AddIcon />
          </IconButton>
        </div>

        {renderCards()}
      </div>
    </>
  );
}
export default RetrospectiveList;
