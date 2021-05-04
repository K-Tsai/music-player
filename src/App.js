import './App.css';
import igor from './pictures/igor.jpg'

function App() {
  return (
    <div className = "player">
      <section className = "details">
        <div className = "now-playing">
          <h3>Playing X of Y</h3>
        </div>
        <div className="track-art">
          <img src = {igor} alt = "album-cover" className="album-art"/>
        </div>
        <div className="track-name">Track Name - Track Artist</div>
      </section>
      <section className = "buttons">
        <div className= "previous-track">
          <i className ="fa fa-step-backward fa-2x"></i>
        </div>
        <div className = "play-button">
          <i className ="fa fa-play-circle fa-5x"></i>
        </div>
        <div className = "next-track">
          <i className = "fa fa-step-forward fa-2x"></i>
        </div>
      </section>
      <section className = "slider_container">
        <div className = "current-time">00:00</div>
        <input type="range" min="1" max = "100"
        value = "0" className="seek-slider"/>
        <div className = "total-duration">00:00</div>
      </section>
      <section class="slider_container">
        <i class="fa fa-volume-down"></i>
        <input type="range" min="1" max="100"
          value="99" class="volume_slider"/>
        <i class="fa fa-volume-up"></i>
      </section>
  </div>
  );
}

export default App;
