import { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from './Images/logo.png';

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
      <nav className="logo-nav">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </nav>
      </header>
    );
  }
}