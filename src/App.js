import React, { Component } from 'react'; 
import * as firebase from 'firebase';


//Component 
import Header from './Header'; 
import Hidebox from './HideBox'; 
import Counter from './Counter'; 
import Guests from './Guests'; 


class App extends Component 
{ 

constructor(){ 
  super(); 

  this.state = { 
    guestForm: "", 
    isHideUnconfirmed:false,
    listOfGuests: [],
    title: "My RSVP My Life",
  }; 

  this.guestRef = firebase.database().ref('Guests')
}

componentDidMount(){
  this.guestRef.on('value', (snapshot) => {
    if (snapshot.val()){
    this.setState({
      listOfGuests: snapshot.val(),
    });
  }else{
    this.setState({
      listOfGuests: [],
    });
  }
  })
}

onIsConfirmChange = (index) => {
  this.state.listOfGuests[index].isConfirm = !this.state.listOfGuests[index].isConfirm;
    this.guestRef.set(this.state.listOfGuests);
}

onDeleteGuest = (index) => {
  this.state.listOfGuests.splice(index,1);  
  this.guestRef.set(this.state.listOfGuests);
}

onChangeGuestForm = (value) => { 
  this.setState({ 
    guestForm: value, 
  }); 
} 

toggleHideUnconfirmed = () => { 
  this.setState({ 
    isHideUnconfirmed: !this.state.isHideUnconfirmed, 
  }); 
} 

onAddGuests = (e) => {
  e.preventDefault();

  var newGuest = {
    name: this.state.guestForm, 
    isConfirm: false, 
  }
  this.state.listOfGuests.unshift(newGuest);
  this.state.guestForm="";
  this.setState(this.state);
  this.guestRef.set(this.state.listOfGuests);
}

onEditName = (name, index) => {
  this.state.listOfGuests[index].name = name;
  this.guestRef.set(this.state.listOfGuests);
}

render() 
{ 

  var listOfGuests = this.state.listOfGuests; 
  //true 
  if (this.state.isHideUnconfirmed){ 
    listOfGuests = this.state.listOfGuests.filter((guest, i) => {return !guest.isConfirm}); 
  }


  return ( 
    <div className="App"> 
    <Header 
    value={this.state.guestForm} 
    onChangeValue={this.onChangeGuestForm} 
    onSubmit={this.onAddGuests}
    title={this.state.title}
    /> 
      <div className="main"> 
        <Hidebox cek={this.state.isHideUnconfirmed} onClick={this.toggleHideUnconfirmed}/> 
        <Counter 
          attending={this.state.listOfGuests.filter((guest, i) => {return guest.isConfirm}).length} 
          unconfirmed={this.state.listOfGuests.filter((guest, i) => {return !guest.isConfirm}).length} 
          total={this.state.listOfGuests.length}/> 
        <Guests 
        pendingName={this.state.guestForm} 
        listOfGuests={listOfGuests}
        onClick={this.onIsConfirmChange}
        onDeleteGuest={this.onDeleteGuest}
        onEditName={this.onEditName}
        /> 
      </div> 
    </div> 
    ); 
  } 
} 

export default App;