var React = require('react'),
Slider = require('react-slick');
// $ = require('jquery');

var Report = React.createClass({
  getInitialState: function () {
    return {
      tabHasBeenSeen: false
    };
  },

  renderImageSlider: function () {
    var photoRoot = 'static/images/photos/',
        settings = {
          arrows: false,
          autoplay: true,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1
        };
    return (
      <Slider {...settings}>
        <div>
          <img src={photoRoot + 'slider1.jpg'} />
        </div>
        <div>
          <img src={photoRoot + 'slider2.jpg'} />
        </div>
        <div>
          <img src={photoRoot + 'slider3.jpg'} />
        </div>
        <div>
          <img src={photoRoot + 'slider4.jpg'} />
        </div>
        <div>
          <img src={photoRoot + 'slider5.jpg'} />
        </div>
      </Slider>
    )
  },

  // componentDidMount: function () {
  //   if (this.props.activeTab && !this.state.tabHasBeenSeen) {
  //     this.initSlickImageSlider();
  //   }
  // },
  //
  // componentDidUpdate: function () {
  //   if (this.props.activeTab && !this.state.tabHasBeenSeen) {
  //     this.initSlickImageSlider();
  //   }
  // },

  render: function () {
    return (
      <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
        <div className="row report-content-top">
          <div className="small-6 columns">
            <h1>Text Text Text</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </div>
          <div className="small-6 columns">
            {this.renderImageSlider()}
          </div>
        </div>
        <div className="row report-content-bottom">
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
