var React = require('react');
    // $ = require('jquery');

var Report = React.createClass({
    getInitialState: function () {
      return {
        tabHasBeenSeen: false
      };
    },

    initSlickImageSlider: function () {
      $('.single-item').slick({
        dots: true,
        arrows: false,
        autoplay: true
      });
      this.setState({tabHasBeenSeen: true});
    },

    componentDidMount: function () {
      if (this.props.activeTab && !this.state.tabHasBeenSeen) {
        this.initSlickImageSlider();
      }
    },

    componentDidUpdate: function () {
      if (this.props.activeTab && !this.state.tabHasBeenSeen) {
        this.initSlickImageSlider();
      }
    },

    render: function () {
      return (
        <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
          <div className="row report-content">
            <div className="small-6 columns">
              <h1>Text Text Text</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <div className="single-item">
                <div>
                  <img className="orbit-image" src="https://s-media-cache-ak0.pinimg.com/originals/02/65/fe/0265fe0b04f990cb07f1d11c0b15ad4e.jpg" alt="Space" />
                </div>
                <div>
                  <img className="orbit-image" src="http://3.bp.blogspot.com/-kTB6PIKLFI8/VXxTiGbf88I/AAAAAAAAc48/mRJmPWszVm0/s400/Adventure%2BTime%2BAppisodev.webp" alt="Space" />
                </div>
                <div>
                  <img className="orbit-image" src="http://images6.fanpop.com/image/photos/33400000/Adventure-Time-BroFist-ask-the-adventure-time-ocs-33458232-400-250.jpg" alt="Space" />
                </div>
                <div>
                  <img className="orbit-image" src="http://vignette3.wikia.nocookie.net/adventuretimebdm/images/6/6a/Atwallwidescreen.jpg/revision/latest?cb=20110516210801" alt="Space" />
                </div>
              </div>
            </div>
          </div>
          <div className="row report-content">
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
