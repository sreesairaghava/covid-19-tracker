import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import VisualBlock from "./components/VisualBlock";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Container>
        <Row>
          <Col>
            <VisualBlock></VisualBlock>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
