import React from "react";
import GenericButton from "../components/GenericButton";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Errorimg from "./../assets/img/404.png"

const BacktoPage = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <img src={Errorimg} alt="" style={{width:'404px'}} />
      {/* <hr /> */}
      <GenericButton onClick={() => navigate("/")} type='primary'>
        Back to page
      </GenericButton>
    </Container>
  );
};

export default BacktoPage;
