import Head from 'next/head';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Drinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
      <Col md={6}><img className="big-images" src="/images/drinks/espresso.jpg"></img></Col>
      <Col  md={6}>
      <section id="espresso"></section>
        <h2>Espresso</h2>
        <p>Espresso is a method of coffee-brewing, originating in Italy during the early 20th century. Espresso is characteristic for its layer of 'crema' that is caused by the high pressures used to pull each drink. Espresso, though drank around the world on it's own, is mainly used as a base for other drinks, such as caffé latte, caffé macchiato and caffé Americano.</p>
        <Button variant="dark" href="/drinks/espresso">Read More</Button>
      </Col>
      </Row>

      <Row>
      <section id="pourover"></section>
      <Col md={6}><img className="big-images" src="/images/drinks/pourover.jpg"></img></Col>
      <Col md={6}>
        <h2>Pour Over</h2>
        <p>One of the oldest methods of making coffee, pour over is the simplest way to make coffee. Utilizing a filter, boiling water and coarse ground beans pour over produces a mellow cup of coffee, lacking the acidity of more dense methods such as espresso. Pour over is a great base for iced coffee, white coffee or even used in cakes it increase their chocolatey flavor.</p>
        <Button variant="dark" href="/drinks/pourover">Read More</Button>
      </Col>
      </Row>

      <Row>
      <Col md={6}><img className="big-images" src="/images/drinks/coldbrew.jpg"></img></Col>
      <Col  md={6}>
        <h2>Cold Brew</h2>
        <p>Made popular on city corners around the world, cold brew is a refreshing drink for any hot summer day. Made simply by mixing coarse coffee grounds and water, through 24+ hours of steeping it is by far the method that produces the sweetest cup of coffee. Since the bean isn't burned in the process of brewing, the oil are left in an unaltered state, providing the best palate possible.</p>
        <Button variant="dark" href="/drinks/other">Read More</Button>
      </Col>
      </Row>


     <Footer></Footer>
    </div>
  )
}
