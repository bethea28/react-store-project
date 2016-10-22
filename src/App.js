<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Route, Router, hashHistory} from 'react-router'
import $ from 'jquery'
import {editor} from './components/maincss.js' 
import {screen} from './components/maincss.js' 
import IphoneLook from './components/iphoneLook.js' 
import ScreenInfo from './components/screenInfo.js' 
import Process from './components/render.js' 


  

=======
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import ItemPage from './components/ItemPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LookBookPage from './components/LookBookPage';
import SalePage from './components/SalePage';
import ShopPage from './components/ShopPage';
import NavBar from './components/NavBar';
>>>>>>> 90eab54419eb7f47f2e9afdc93b9a8afac49aa5f

var App = React.createClass({

  getInitialState(){
    return ({lines:[], word:'', syn:[], sylls: 0, indx:0, limit:null, select:'', definition:'', meaning:'',background:''})
  },

  setLimit(event){
  event.preventDefault()
  var range = event.target.value 
  this.setState({limit: range})


  },

  handleChange(event){

  event.preventDefault()
  
  

    var arrayOfLines = $('#texteditor').val().split('\n') 

    this.setState({lines: arrayOfLines [this.state.indx], word:name, sylls:null})
    // console.log(arrayOfLines[this.state.indx])
    console.log(arrayOfLines)

    this.getSyll(this.state.lines) 




    // this.setState({indx:})
    // console.log(arrayOfLines)

  var max; 
  var sillyLength = this.state.sylls


  // console.log(name)


  sillyLength == this.state.limit ? max = 0 :  max = 1000
  
  console.log(max)
 
  $("#texteditor").attr({maxLength:max})

  // var x =event.keyCode;

  // if(x == 13){
  
  // }

  },

  enter(event){
  var x =event.keyCode;
    // console.log(this.state.sylls)
   
  if(x == 13){
   
    this.setState({indx: this.state.indx +1, sylls:0, limit: this.state.limit, lines: this.state.lines.concat(' ') })
    console.log('indx:'+ this.state.indx) 
      
  }
    // console.log(this.state.sylls)
  
    // console.log(this.state.sylls)

  },

  finalSyll(result){
  this.setState({ sylls:result.syllables})
  // console.log(this.state.sylls)
  },

  finalDefine(result){
  console.log(result)
  var translation = result.list[0].definition
  this.setState({syn:result.tags ,meaning: translation})
  // alert(translation )
  console.log(this.state.syn)

  },

  finalSyn(result){
  var alts = result
  // this.setState({syn: translation})
  // alert(translation )
  console.log(alts)

  },



  define(event){
  event.preventDefault()
  var selectedtext = window.getSelection().toString()
  this.setState({definition: selectedtext})
  // alert(selectedtext)
  var key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    $.ajax({
      url:"http://api.urbandictionary.com/v0/define?term=" + this.state.definition,

      success:function print(data){
        var result = data
       
        this.finalDefine(result)
       
      }.bind(this)
      

    })

  },

  synonyms(){
  this.state.syn.map(function(a,indx){
    return <span key ={indx}> {a} </span>
  })

  },

getSyll(word){
  // event.preventDefault()

    $.ajax({
      url:'http://rhymebrain.com/talk?function=getWordInfo&word=' +  word,
      success:function print(data){
        var result = data
        
        this.finalSyll(result)
        
      }.bind(this)
      

    })

  },
appBack(){
  // console.log(this.state.background)
  var select = $('select').val()
  // console.log(select)
  this.setState({background: select})
  console.log(this.state.background)
},

resetSyll(){
  // var oldSylls = this.state.sylls
  this.setState({sylls:0})
  
  // var newSylls = oldSylls - this.state.sylls
  // this.setState({sylls:newSylls})

  // console.log(newSylls)
  // var x = event.keyCode;    

  // if(x == 13){

  // }

},

render(){

    return (
<<<<<<< HEAD
        <center>
      {console.log(this.state.background)}
          <h1>Flow Tite</h1> 
          <h1> Music Text Editor</h1>
       
          <IphoneLook synonyms = {this.synonyms} enter = {this.enter} appBack={this.appBackLoop}definition ={this.define} handleChange={this.handleChange} />


          <ScreenInfo syn = {this.synonyms} syllables={this.state.sylls} limit={this.state.limit} select={this.state.select} definition={this.state.definition} meaning ={this.state.meaning} />
           
          <Process appBack={this.appBack}reset={this.resetSyll}definition = {this.state.define} setLim={this.setLimit} />

        </center>
            
=======
      <div className="container-fluid">
        <Header />
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
>>>>>>> 90eab54419eb7f47f2e9afdc93b9a8afac49aa5f
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
  </Router>,  
  document.getElementById('root')

)

