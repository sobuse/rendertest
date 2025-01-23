import Layout from './components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 800px;
`;

function App() {
  return (
    <Layout>
      <Title>Welcome to My App</Title>
      <Card>
        <h2>About Us</h2>
        <p>This is a sample React application built with Vite and styled-components.</p>
      </Card>
    </Layout>
  );
}

export default App;