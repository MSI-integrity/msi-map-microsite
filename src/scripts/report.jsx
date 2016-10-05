var React = require('react');
    // $ = require('jquery');

var Report = React.createClass({
    componentDidUpdate: function (prevProps) {
      if (!prevProps.activeTab && this.props.activeTab) {
          console.log('did mount');
          Foundation.reInit($('.orbit'));
      }
    },

    componentDidMount: function () {
      $('.orbit').foundation();
    },

    render: function () {
      return (
        <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
          <div className="row">
            <div className="small-6 columns">
              <h1>Text Text Text</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
                <ul className="orbit-container">
                  <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                  <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                  <li className="is-active orbit-slide">
                    <img className="orbit-image" src="https://s-media-cache-ak0.pinimg.com/originals/02/65/fe/0265fe0b04f990cb07f1d11c0b15ad4e.jpg" alt="Space" />
                    <figcaption className="orbit-caption">Space, the final frontier.</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://3.bp.blogspot.com/-kTB6PIKLFI8/VXxTiGbf88I/AAAAAAAAc48/mRJmPWszVm0/s400/Adventure%2BTime%2BAppisodev.webp" alt="Space" />
                    <figcaption className="orbit-caption">Lets Rocket!</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://images6.fanpop.com/image/photos/33400000/Adventure-Time-BroFist-ask-the-adventure-time-ocs-33458232-400-250.jpg" alt="Space" />
                    <figcaption className="orbit-caption">Encapsulating</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://vignette3.wikia.nocookie.net/adventuretimebdm/images/6/6a/Atwallwidescreen.jpg/revision/latest?cb=20110516210801" alt="Space" />
                    <figcaption className="orbit-caption">Outta This World</figcaption>
                  </li>
                </ul>
                <nav className="orbit-bullets">
                  <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
                  <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                  <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
                  <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 large-centered columns">
              <h1>Project Description</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Report;
