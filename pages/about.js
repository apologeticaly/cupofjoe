import Head from 'next/head';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Tools - Cups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
        <Col md={6}>
            <img className="big-images" src="/images/about.jpg"></img>
        </Col>
        <Col md={6}>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem orci. Vivamus dapibus rutrum sem vitae facilisis. Cras elit tellus, consequat in nisi eu, ultrices hendrerit leo. Phasellus consequat facilisis orci, eu semper est gravida a. Fusce ut nisi posuere, bibendum tellus ultricies, dapibus ex. Suspendisse potenti. Nunc porta viverra sodales. Suspendisse tincidunt faucibus est eu molestie. Proin dapibus.</p>
        </Col>
      </Row>
     <Footer></Footer>
    </div>
  )
}
