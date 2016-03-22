var React = require('react');

var PlanetWrapper = React.createClass({

  render: function() {
    return (
      <div className='planet-wrapper' >
        <img src='/dist/images/Jupiter2.svg' className='planet-img' />
      </div>
    );
  }

});

module.exports = PlanetWrapper;