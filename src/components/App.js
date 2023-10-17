import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <main>
      <Row>
        <Col>
          <h1 className="mt-5">About me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Entrepreneur. I live in Buenos Aires, Argentina. I'm super active on{" "}
            <a href="https://twitter.com/patriciomolina">Twitter</a>, where I
            talk about tech, programming, web3/crypto, and Racing Club de
            Avellaneda.
          </p>
          <p>
            In 2014 I co-founded <a href="Real Trends">Real Trends</a>, the most
            popular platform for online sellers in Mercado Libre. Serving as its{" "}
            <a href="https://en.wikipedia.org/wiki/Chief_technology_officer">
              CTO
            </a>{" "}
            until 2022, I continue my journey with the company as a Board
            Member.
          </p>
        </Col>
      </Row>
    </main>
  );
}

function Footer() {
  return <footer></footer>;
}

function App() {
  return (
    <Container>
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
