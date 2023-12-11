import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPrimary);
  padding: 0 130px;
  font-size: 16px;
`;

const getType = ({type}) => {
  switch (type) {
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
    default:
      return {
        background: "transparent",
        border: "1px solid #E6E9EC",
        color: "white",
      };
  }
};

export const Button = styled.button`
  font-size: 14px;
  padding: 12px 40px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  background: transparent;
  border: 1px solid white;

  border-radius: 2px;
  cursor: pointer;
  &:active {
    scale: 0.98;
  }
  ${getType}
`;

export const Section = styled.div`
  display: flex;
  gap: 64px;
  font-style: normal;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 400;
  line-height: 24px; /* 150% */
  &:active {
    color: #faff01;
  }
`;
