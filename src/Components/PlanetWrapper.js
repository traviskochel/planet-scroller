var React = require('react');
var classnames = require('classnames');

var PlanetWrapper = React.createClass({

  render: function() {
    return (
      <div className='planet-wrapper' >
        <img 
          key='img-1'
          className='planet-img planet-img--1'
          src='/dist/images/Jupiter2.svg'/>
        <img 
          key='img-2'
          className='planet-img planet-img--2'
          src='/dist/images/Jupiter2.svg'/>
      </div>
    );
  }

});

module.exports = PlanetWrapper;