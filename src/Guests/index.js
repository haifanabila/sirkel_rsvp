import React from 'react'; 
import PropTypes from 'prop-types'; 


//Component 
import GuestRespond from './GuestRespond'; 
import GuestPending from './GuestPending'; 

export default class Guest extends React.Component{ 

static propTypes = { 
pendingName: PropTypes.string, 
listOfGuests: PropTypes.array,
onClick: PropTypes.func,
onDeleteGuest: PropTypes.func,
onEditName: PropTypes.func,
}; 

render(){ 

var guestPending = <GuestPending name={this.props.pendingName}/> 

if (this.props.pendingName === "") { 
guestPending = ""; 
} 

     return( 
     <ul> 

     {guestPending} 

{
     this.props.listOfGuests.map(
          (guest,index) => {
               return (
                    <GuestRespond
                    name={guest.name}
                    isChecked={guest.isConfirm}
                    onClick={() => {this.props.onClick(index)} }
                    onDeleteGuest={(e) => this.props.onDeleteGuest(index)}
                    onEditName={(name) => this.props.onEditName(name,index)}
                    />
               );
          }
     )
}

     </ul> 
); 
} 
}