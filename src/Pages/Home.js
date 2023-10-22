import React, { Component } from "react"
import CarouselBox from "../Components/CarouselBox"
import { Container, CardGroup, Card, Button } from "react-bootstrap"
import team1 from "./team1.jpeg"
export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center">Our team</h2>
                    <CardGroup className="m-4">
                        <Card className="m-4 d-none d-md-block">
                            <Card.Img variant="top" src={team1} alt="team1" />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card className="m-4 d-none d-md-block">
                            <Card.Img variant="top" src={team1} alt="team1" />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card className="m-4 d-none d-md-block">
                            <Card.Img variant="top" src={team1} alt="team1" />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        );
    }
}