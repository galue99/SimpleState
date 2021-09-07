import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
`;

/**
 * @returns {JSX.Element} - PlanetList component.
 */
export const NavBar = (): JSX.Element => (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            data-testid="my-title-id">
            Star wars characters
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkStyled to="/">Home</LinkStyled>
              <LinkStyled to="/favorites">Favorites</LinkStyled>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
