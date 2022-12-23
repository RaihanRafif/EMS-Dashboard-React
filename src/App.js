import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/sidebar';

function App() {

  return (
    <Container>
      <Row>
        <Sidebar/>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
