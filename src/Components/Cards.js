import React, { Component } from 'react'
import team1 from '../assets/team1.jpeg'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'

export default class Cards extends Component {
  render() {
    return (
      <Container style={{ maxHeight: '40vh' }}>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={team1} alt="team1" />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={team1} alt="team1" />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    )
  }
}
