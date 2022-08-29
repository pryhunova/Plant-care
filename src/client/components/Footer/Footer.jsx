import { Component } from "react";
import './Footer.scss'
import sprite from './Images/sprite.svg'

export class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">       
            <ul className="social-list">
            <li className="social-list-item">
              <a href="https://www.linkedin.com/in/nata-pryhunova/">
                  <svg className="social-list-icons"><use href={sprite + "#linkedin_icon"} /></svg>
            </a></li>
            <li className="social-list-item">
              <a href="https://github.com/pryhunova">
                  <svg className="social-list-icons"><use href={sprite + "#github_icon"} /></svg>
            </a></li>
            <li className="social-list-item">
                <a href="https://t.me/npryhunova">
                  <svg className="social-list-icons"><use href={sprite + "#telegram_icon"} /></svg>
            </a></li>
            <li className="social-list-item">
                <a href="https://www.instagram.com/natalie_pryhunova/">
                  <svg className="social-list-icons"><use href={sprite + "#instagram_icon"} /></svg>
            </a></li>
          </ul>  
       </footer>
    );
  }
}