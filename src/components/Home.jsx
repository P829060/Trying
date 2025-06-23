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
                The Best Footballers in The World
                </GradientText>
                <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/WTJSt4wP2ME?si=ebGcFkM08yARkeST"
                    title="Football Emotions"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
                <div className="d-flex justify-content-center" style={{ margin: '10px' }}>
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
