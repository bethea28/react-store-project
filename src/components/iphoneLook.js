import React from 'react'
import {editor} from './maincss.js' 
import {screen} from './maincss.js' 



const IphoneLook = React.createClass({

	render(){
		return(
			<div style={editor}>
				<center>
				     <textarea onDoubleClick={this.props.synonyms} style={screen} onKeyUp ={this.props.enter} onChange={this.props.handleChange} id='texteditor' onDoubleClick={this.props.definition}/>
				</center>

			 <button id = 'homeButton' style ={{position: "relative", top:90, backgroundColor:'red', width:40, height: 40, borderRadius:50}}> </button>

			
			</div>




		)
	}

})


export default IphoneLook