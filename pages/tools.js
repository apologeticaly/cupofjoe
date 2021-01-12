import Head from 'next/head';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
      <Col md={6}><img className="big-images" src="/images/tools/grinders.jpg"></img></Col>
      <Col  md={6}>
      <section id="grinders"></section>
        <h2>Grinders</h2>
        <p>Of all tools used for brewing a cup of coffee, arguably the most important is the grinder. Though it may seem as simple as throwing your beans into a blade grinder and buzzing away, that won't give you the best possible result. Burr grinders, unlike blade grinders provide a uniform grind, leaving all the beans within a relatively same level of ground.</p>
        <Button variant="dark" href="/tools/grinders">Read More</Button>
      </Col>
      </Row>

      <Row>
      <section id="filters"></section>
      <Col md={6}><img className="big-images" src="/images/tools/filters.jpg"></img></Col>
      <Col md={6}>
        <h2>Filters</h2>
        <p>When making a cup of pour over, the filter used can highly influence the quality of coffee that comes through. Though paper filters are the easiest to use, it is argued that metal filters let oils from the bean pass through that would otherwise be absorbed by paper. If one is to use paper filters, brown papers lack the bleach that is found in white ones, altering the taste of the coffee.</p>
        <Button variant="dark" href="/tools/filters">Read More</Button>
      </Col>
      </Row>

      <Row>
      <section id="cups"></section>
      <Col md={6}><img className="big-images" src="/images/tools/cups.jpg"></img></Col>
      <Col  md={6}>
        <h2>Cups</h2>
        <p>Different coffees are meant to be enjoyed in different sized cups. Latte's for example need the wide deep bowl shape to be able to tilt and turn the cup as the barista makes latte art. Macchiato's need a medium size cup to accommodate a single shot and lots of foam. Espresso only needs a 1OZ glass, so that the unused glass of a larger cup would cool down the espresso faster than necessary.</p>
        <Button variant="dark" href="/tools/cups">Read More</Button>
      </Col>
      </Row>
      
     <Footer></Footer>
    </div>
  )
}
