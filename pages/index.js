import Head from 'next/head';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>cupofjoe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row className="findyourcup">
        <Col><img className="big-images" src="/images/findyourcup.jpg"></img></Col>
        <div class="centered">
          <h1>Find Your Cup</h1>
          <p>Espresso is generally thicker than coffee brewed by other methods, with a viscosity of warm honey. This is due to the higher concentration of suspended and dissolved solids, and has crema on top (a foam with a creamy consistency). As a result of the pressurized brewing process, the flavors and chemicals in a typical cup of espresso are very concentrated.</p>
          <Button variant="dark" href="/survey">Learn More</Button>
        </div>
        
      </Row>

      <Row>
      <Col className="home-cta" md={4}>
        <img className="section-images" src="/images/beans/arabica.jpg"></img>
        <h2>Beans</h2>
        <p>Most important of all the factors that go brewing is the beans you choose and how you grind them. It's what makes or breaks a cup of coffee.</p>
        <Button variant="dark" href="/beans">Learn More</Button>
      </Col>
      <Col md={4}>
        <img className="section-images" src="/images/tools/filters.jpg"></img>
        <h2>Tools</h2>
        <p>Once you beans are selected, how you prepare them and what tools you use is crucial to the determining the outcome of your particular cup.</p>
        <Button variant="dark" href="/tools">Learn More</Button>
      </Col>
      <Col md={4}>
        <img className="section-images" src="/images/drinks/espresso.jpg"></img>
        <h2>Drinks</h2>
        <p>Coffee around the world is prepared in many different ways. Whether you like it all by itself or accompanied by milk and sugar, there exists a drink for you.</p>
        <Button variant="dark" href="/drinks">Learn More</Button>
      </Col>
      </Row>
     <Footer></Footer>
    </div>
  )
}
