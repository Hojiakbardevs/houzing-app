import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Link } from "./style";
import logo from "./../assets/logo/logo.svg";
import { navbar } from "../utils/navbar";
import GenericButton from "./GenericButton";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="logo" onClick={() => navigate("/home")} />
        <Section>
          {navbar.map(({ path, title,hidden }, index) => {
            return (
              <Link key={index} to={path} hidden={hidden}>
                {title}
              </Link>
            );
          })}
        </Section>
        <GenericButton onClick={() => navigate("/login")}>Login</GenericButton>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
