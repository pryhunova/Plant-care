import { Component } from "react";
import './Hero.scss'
import { Link } from "react-router-dom";

export class Hero extends Component {
  render() {
    return (
      <section className="App-hero">        
          <Link to="/signin">
          <button className="btn">Get Started</button>
          </Link>       
      </section>
    );
  }
}