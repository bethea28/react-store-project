import React from 'react';
import data from './data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Header = React.createClass({
	getInitialState:function(){
		return {images:{}}
	},
	componentDidMount(){
		this.setState({images: data.getImages()})
	},
  render: function() {
    return (
      <div>
        <div className="container-fluid header">
              <img className='img-thumbnail'  alt="Brand" src={this.state.images[1]}/>
            <h1 className='woody'>WOODY MOTH</h1>
        </div>
      </div>
    )
  }

})

export default Header;
