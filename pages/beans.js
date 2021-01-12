import Head from 'next/head';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
      <Col md={6}><img className="big-images" src="/images/beans/arabica.jpg"></img></Col>
      <Col  md={6}>
      <section id="arabica"></section>
        <h2>Arabica</h2>
        <p>Arabica beans were first grown in the southern Arabian peninsula, in the modern day country of Yemen. From there the practice of roasting and brewing the beans spread to Egypt, Turkey and then Europe through the Ottoman Empire. Arabica beans are known for their great yield, making it economically worth while for larger distribution over other coffee types. </p>
        <Button variant="dark" href="/beans/arabica">Read More</Button>
      </Col>
      </Row>

      <Row>
      <section id="robusta"></section>
      <Col md={6}><img className="big-images" src="/images/beans/robusta.jpg"></img></Col>
      <Col md={6}>
        <h2>Robusta</h2>
        <p>Robusta beans originated from Sub-Saharan Africa, though it is mostly now grown in South Asia. With a similar yield to arabica, the main difference is the flavor composition. Robusta is significantly less sweet than arabica, as it contains less sugar. Due to the lack of sugar content, it is usually described as earthy and woody, compared to arabica's sweet and floral notes.</p>
        <Button variant="dark" href="/beans/robusta">Read More</Button>  
      </Col>
      </Row>

      <Row>
      <section id="liberica"></section>
      <Col md={6}><img className="big-images" src="/images/beans/liberica.jpg"></img></Col>
      <Col  md={6}>
        <h2>Liberica</h2>
        <p>While Arabica and Robusta comprise 60 and 39 percent of the world coffee market respectively, Liberica is the remaining 1 percent. Initially found in Liberia, it is currently only grown in South Asia, particularly Philippines. It has the lowest caffeine content, but is slightly more sweet than Arabica. It is not as economical to grow as the other two variants, so its price is significantly higher.</p>
        <Button variant="dark" href="/beans/liberica">Read More</Button>
      </Col>
      </Row>


     <Footer></Footer>
    </div>
  )
}
