import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #fdcb9e;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 45%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
    li {
      color: #3f3f44;
      text-align: center;
    }
  }
`;

const MiniNav = ({ open }) => {
  return (
    <Ul className="MiniNav-links" open={open}>
      <Link to="/filters">
        <li>Buscar</li>
      </Link>
      <Link to="/search">
        <li>Favoritos</li>
      </Link>
      <Link to="/create-post">
        <li>Crear Publicación</li>
      </Link>
      <Link to="/">
        <li>Inicio</li>
      </Link>
    </Ul>
  );
};

export default MiniNav;
