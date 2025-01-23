import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 My App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;