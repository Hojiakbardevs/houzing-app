import React from "react";
import GenericButton from "../components/GenericButton";
import { useNavigate } from "react-router-dom";

const BacktoPage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>404 Not bad Not Found page</h1>
      <hr />
      <GenericButton onClick={() => navigate("/")} type='primary'>
        Back to page
      </GenericButton>
    </div>
  );
};

export default BacktoPage;
