import React from 'react';
import {Link} from 'react-router'

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer container-fluid">
        <div >
          <h3>QUESTIONS?</h3>
          <div>EMAIL US AT: 
          WOODYMOTH@GMAIL.COM</div>
          <div className="warranty">
          <Link to='warranty'>WARRANTY </Link>
          </div>
        </div>
      </div>
    )
  }
})

export default Footer;
//inspired in fab footer