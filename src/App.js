import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends  React.Component{
 constructor()
 {
  super(); 
  this.state={exp:""};
  this.ram=this.ram.bind(this);
  this.submitting=this.submitting.bind(this);
 this.ramz=this.ramz.bind(this);
 }
 ramz(event)
 {
   var l;
   
   try {
    l=eval(this.state.exp);
    this.setState({exp:l});
  } 
  catch(e)
  {
    this.setState({exp:""});
  }
 }
 ram(e)
 {
  var s=this.state.exp;
  var t=e.target.value.toString();
 var c;
 var k=0;
  if(s== ""){
    c= t;
  }
  else{
    
    if(t == '-' || t=='+' || t=='*' || t=='/' || t=='**' ||t=='%')
    {
     if(s.indexOf("+")!=-1 &&s.indexOf("-")!=-1 && s.indexOf("/")!=-1 &&s.indexOf("*")!=-1 && s.indexOf("**")!=-1 &&s.indexOf("%")!=-1)
     {
        c= s + t;
       }
     else
      {
        try {
          c=((eval(s)).toString())+t;
        } 
        catch(e)
        {
          c="";
        }
        
      }
    }
    else{
      c=s+t;
    }


  }
  
  this.setState({exp: c});
 }
 submitting(event)
 {
  event.preventDefault();
  this.setState({exp:""});
 }
 render()
 {
  return(
      <div className="d1"><br /><br />
        <form className="for" onSubmit={this.submitting} >
          <p type="text" className="inpt" >{this.state.exp} </p>
          <br />
          <div className="ramk">
          <button className="butt" type="button" value= "1" onClick={this.ram}>1</button>
          <button className="butt" type="button" value= "2" onClick={this.ram}>2</button>
          <button className="butt" type="button" value= "3" onClick={this.ram}>3</button>
          <button className="butt" type="button" value= "4" onClick={this.ram}>4</button>
          <button className="butt" type="button" value= "5" onClick={this.ram}>5</button>
          <button className="butt" type="button" value= "6" onClick={this.ram}>6</button>
          <button className="butt" type="button" value= "7" onClick={this.ram}>7</button>
          <button className="butt" type="button" value= "8" onClick={this.ram}>8</button>
          <button className="butt" type="button" value= "9" onClick={this.ram}>9</button>
          <button className="butt" type="button" value= "0" onClick={this.ram}>0</button>
          <button className="butt" type="button" value= "+" onClick={this.ram}>+</button>
          <button className="butt" type="button" value= "-" onClick={this.ram}>-</button>
          <button className="butt" type="button" value= "*" onClick={this.ram}>*</button> 
          <button className="butt" type="button" value= "/" onClick={this.ram}>/</button>
          <button className="butt" type="button" value= "**" onClick={this.ram}>^</button>
          <button className="butt" type="button" value= "%" onClick={this.ram}>%</button>  
          <button className="butt" type="button" value= "=" onClick={this.ramz}>=</button>   
          <input type="submit" className="butt" value="AC"  />      
          </div>
          <p className="kl"></p>
          <br />
        </form>
      </div>
  );


 }
}

export default App;
