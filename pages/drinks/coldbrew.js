import Head from 'next/head';
import Nav from '../../components/navigation';
import Footer from '../../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Drinks - Cold Brew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
      <Col><img className="big-images" src="/images/drinks/coldbrew.jpg"></img></Col>
      </Row>

      <Row>
        <Col>
        <h2>Cold Brew</h2>
        <p>Cold Brew is generally thicker than coffee brewed by other methods, with a viscosity of warm honey. This is due to the higher concentration of suspended and dissolved solids, and has crema on top (a foam with a creamy consistency). As a result of the pressurized brewing process, the flavors and chemicals in a typical cup of Cold Brew are very concentrated.</p>
        </Col>
      </Row>
     <Footer></Footer>
    </div>
  )
}
