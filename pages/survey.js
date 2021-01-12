import Head from 'next/head';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container, ButtonGroup, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'

export default function Survey() {
  return (
    <>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2}>Radio 2</ToggleButton>
            <ToggleButton value={3}>Radio 3</ToggleButton>
        </ToggleButtonGroup>
    </>
  )
}
