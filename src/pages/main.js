import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"

function Main() {
    return (
        <Container >
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col className="home-section">
                    <Outlet />
                </Col>
        </Container>
    )
}

export default Main
