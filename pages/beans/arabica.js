import Head from 'next/head';
import Nav from '../../components/navigation';
import Footer from '../../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beans - Arabica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
      <Col><img className="big-images" src="/images/beans/arabica.jpg"></img></Col>
      </Row>

      <Row>
        <Col>
        <h2>Arabica</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem orci. Vivamus dapibus rutrum sem vitae facilisis. Cras elit tellus, consequat in nisi eu, ultrices hendrerit leo. Phasellus consequat facilisis orci, eu semper est gravida a. Fusce ut nisi posuere, bibendum tellus ultricies, dapibus ex. Suspendisse potenti. Nunc porta viverra sodales. Suspendisse tincidunt faucibus est eu molestie. Proin dapibus.</p>
        </Col>
      </Row>
     <Footer></Footer>
    </div>
  )
}
