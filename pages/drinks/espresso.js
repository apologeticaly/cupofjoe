import Head from 'next/head';
import Nav from '../../components/navigation';
import Footer from '../../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Drinks - Espresso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>

      <Row>
      <Col><img className="big-images" src="/images/drinks/Espresso.jpg"></img></Col>
      </Row>

      <Row>
        <Col>
        <h2>Espresso</h2>
        <p>Espresso is generally thicker than coffee brewed by other methods, with a viscosity of warm honey. This is due to the higher concentration of suspended and dissolved solids, and has crema on top (a foam with a creamy consistency). As a result of the pressurized brewing process, the flavors and chemicals in a typical cup of espresso are very concentrated.</p>
        <p>Espresso is a method of coffee-brewing, originating in Italy during the early 20th century. It is characteristic for its layer of 'crema' that is caused by the high pressures used to pull each drink. Espresso, though drank around the world on it's own, is mainly used as a base for other drinks, such as caffé latte, caffé macchiato and caffé Americano. The reason it is so versatile as a base, is the high level of coffee oils that are preserved in the liquid, as opposed to other brewing methods in which the oil escapes with the steam. This oil maintains high levels of flavor within each shot, even when diluted by larger quantities of water or milk.</p>
        <p>Unlike pour over methods of making coffee, espresso requires particular machines to pull a correct shot. Though manual hand presses are used, most cafes utilize espresso machines that are equipped with boilers and pumps. To pull a shot with adequate crema, the beans used must be ground extremely fine, to almost a dust granularity. Then, water that is just about boiling, usually 190 °F is then forced under 150 psi through the portafilter and into a shot glass.</p>
        <p>Espresso, dependent on the bean, is noted for its floral notes and honey-like viscosity. If drunk by itself, it is recommended to accompany it with something sweet, to offset the sometimes overwhelming bitterness.</p>
        </Col>
      </Row>
     <Footer></Footer>
    </div>
  )
}
