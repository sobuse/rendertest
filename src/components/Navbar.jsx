/* eslint-disable no-unused-vars */
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #ddd;
    }
  }
`;

const Navbar = () => {
    return (
      <NavbarContainer>
        <Logo>My App</Logo>
        <NavLinks>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </NavLinks>
      </NavbarContainer>
    );
  };
  
  export default Navbar;