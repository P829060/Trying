import React, { Component } from 'react';
import "./Achievements.css";
import Button from 'react-bootstrap/Button';
import { Card, Row, Col, Container } from "react-bootstrap";

const footballers = [
  {
    name: "Lionel Messi",
    img: "https://2.bp.blogspot.com/-Wj1IEtdz9Pg/UQSFEhcDQtI/AAAAAAAAAY8/cIeSH2SMXxY/s1600/messi+photo+2013+(5).jpg",
    achievements: [
      "8× Ballon d'Or",
      "2022 FIFA World Cup Winner",
      "Copa América 2021 Winner",
      "4× UEFA Champions League",
      "10× La Liga Titles"
    ]
  },
  {
    name: "Cristiano Ronaldo",
    img: "https://www.stadiumrant.com/wp-content/uploads/2025/02/cristiano-ronaldo-of-al-nassr-looks-on-as-he-lines-up-prior-news-photo-1707422901-1-1024x683.jpg",
    achievements: [
      "5× Ballon d'Or",
      "EURO 2016 & Nations League 2019 Winner",
      "5× UEFA Champions League",
      "3× Premier League Titles",
      "Top International Goal Scorer"
    ]
  },
  {
    name: "Pelé",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/221230141332-01-pele-new-york-cosmos.jpg?c=original",
    achievements: [
      "3× FIFA World Cup Winner",
      "Over 1000 Career Goals",
      "6× Brazilian Championships",
      "2× Copa Libertadores",
      "FIFA Player of the Century"
    ]
  },
  {
    name: "Diego Maradona",
    img: "https://www.fcbarcelona.com/photo-resources/2019/12/16/0297bc9e-3c14-4bdc-b7e8-92fa813b69c3/2635_01_24.jpg?width=1200&height=750",
    achievements: [
      "1986 FIFA World Cup Winner",
      "Serie A Champion with Napoli",
      "UEFA Cup Winner",
      "FIFA Goal of the Century",
      "FIFA Player of the Century (shared)"
    ]
  },
  {
    name: "Zinedine Zidane",
    img: "https://talksport.com/wp-content/uploads/sites/5/2025/01/0cb106a0-e01a-42d8-a289-943e299e9bed.jpg?strip=all&w=960",
    achievements: [
      "1998 FIFA World Cup Winner",
      "UEFA Euro 2000 Winner",
      "Ballon d'Or 1998",
      "UEFA Champions League Winner (2002)",
      "3× UCL-Winning Manager"
    ]
  },
  {
    name: "Ronaldinho",
    img: "https://static.wixstatic.com/media/de448a_f66d0b7605dc44c791a15c68481bacdf~mv2.jpg",
    achievements: [
      "2002 FIFA World Cup Winner",
      "Ballon d'Or 2005",
      "UEFA Champions League Winner",
      "La Liga Winner (x2)",
      "FIFA World Player of the Year (2004, 2005)"
    ]
  },
  {
    name: "Johan Cruyff",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/330px-Johan_Cruyff_1974c.jpg",
    achievements: [
      "3× Ballon d'Or",
      "3× European Cups with Ajax",
      "La Liga Champion with Barcelona",
      "1974 World Cup Runner-up",
      "Influential Manager of FC Barcelona"
    ]
  },
  {
    name: "Franz Beckenbauer",
    img: "https://cdn.shopify.com/s/files/1/2981/7458/files/15679410779361_640x0_42729874-5fb6-48cd-8efd-cb6338d401a0_480x480.jpg?v=1696516458",
    achievements: [
      "1974 FIFA World Cup Winner (Captain)",
      "1990 World Cup Winner (Coach)",
      "3× European Cups with Bayern",
      "2× Ballon d'Or",
      "4× Bundesliga Titles"
    ]
  },
  {
    name: "Ronaldo Nazário",
    img: "https://external-preview.redd.it/yO12j-TWxt6Z3ynxNKAEVTeFzg6fYaEH7ZP0dOaRaUk.jpg?auto=webp&s=bea445792eccbbf76c339c71a8332cf527a7ccaf",
    achievements: [
      "1994 & 2002 FIFA World Cup Winner",
      "2× Ballon d'Or",
      "Golden Boot – 2002",
      "La Liga Top Scorer (x2)",
      "UEFA Cup Winner"
    ]
  },
  {
    name: "Michel Platini",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXjxfdDOsd3DdHIkeOOYNTxtQ05EgbqMBeW8BwDlSZ4xqXiSOAnZ7kfIZOtt52bS2br4&usqp=CAU",
    achievements: [
      "3× Ballon d'Or",
      "UEFA Euro 1984 Winner",
      "Serie A Champion with Juventus",
      "UEFA Super Cup Winner",
      "European Cup Winners' Cup"
    ]
  }
];

export default class Info extends Component {
  render() {
    return (
      <div>
        <h1 className="merriweather">Achievements Of The Top 10</h1>
        <Container className="py-4">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center m-sm-4">
            {footballers.map((player, idx) => (
              <Col key={idx}>
                <Card className="custom-card h-100">
                  <Card.Img
                    variant="top"
                    src={player.img}
                    alt={player.name}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <ul>
                      {player.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
