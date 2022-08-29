import { Component } from "react";
import './Main.scss'
import identifyPlants from './images/woman-takes-a-photo-of-houseplant-400х400.jpg'
import wateringPlants from './images/guy-watering-plant_400х400.jpg'
import holdingPlants from './images/medium-shot-woman-holding-plant-pot-400х400.jpg'
import growthOfPlant from './images/woman-taking-care-plant-pot_400х400.jpg'

export class Main extends Component {
  render() {
    return (
      <section className="App-main">
        <div className="App-container">
          <div className="futures-list">
          <ul>
            <li>
              <div className="futures-list-item">
              <img src={identifyPlants} alt="Identify plants" />
              <p className="futures-list-description">Identify plants and plant diseases by your photo</p>
            </div></li>
            <li>
              <div className="futures-list-item">
              <p className="futures-list-description">Create a plant watering schedule.</p>
              <img src={wateringPlants} alt="watering plants" />
            </div></li>
            <li>
              <div className="futures-list-item">
              <img src={holdingPlants} alt="woman holding plant" />
              <p className="futures-list-description">Add reminders to your calendar.</p>
            </div></li>
            <li>
              <div className="futures-list-item">
              <p className="futures-list-description">And watch the growth of your beautiful plant.</p>
              <img src={growthOfPlant} alt="beautiful plant" />
            </div></li>
            </ul>
            </div>
        </div>
      </section>
    );
  }
}