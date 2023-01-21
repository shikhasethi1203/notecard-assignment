import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RetrospectiveList from "../../components/RetrospectiveList";
import "./index.css";

const retrospectiveListInfo = [
  {
    id: uuidv4(),
    name: "What went well",
  },
  {
    id: uuidv4(),
    name: "What can be improved",
  },
  {
    id: uuidv4(),
    name: "Start Doing",
  },
  {
    id: uuidv4(),
    name: "Action Items",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");
  }, []);

  return (
    <div>
      <div className="button-wrapper">
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}>
          Logout
        </Button>
      </div>
      <Typography className="retrospective-heading" variant="h3">
        Retrospective
      </Typography>
      <div className="retrospective-content-wrapper">
        {retrospectiveListInfo.map((list) => (
          <RetrospectiveList key={list.id} name={list.name} id={list.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
