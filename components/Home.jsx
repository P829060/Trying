import React, { Component } from 'react';
import GradientText from './GradientText';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.css"

export default class Home extends Component {
  render() {
    return (
            <div>
                <GradientText
                 colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                 animationSpeed={3}
                 showBorder={false}
                className="custom-class"
                >
                Meet The Top 10 Famous Footballers
                </GradientText>
                <div className="d-flex justify-content-center" style={{ marginTop: '100px' }}>
                <Link to="/Top10" style={{ textDecoration: 'none' }}>
                    <Button className="frosted-glow-btn">
                    Meet Them Now!
                    </Button>
                </Link>
                </div>
            </div>
        )
    }
}
