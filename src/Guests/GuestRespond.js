import React from 'react';
import PropTypes from 'prop-types';

export default class GuestRespond extends React.Component{

//class GuestRespond extends Component

	constructor(props){ 
	  super(props); 

	  	this.state = { 
	    isEdit: false,
  		}; 
	}

	static PropTypes = {
		name: PropTypes.string, 
		isChecked: PropTypes.bool,
		onClick: PropTypes.func,
		onDeleteGuest: PropTypes.func,
		isEdit: PropTypes.bool,
		onEditName: PropTypes.func,
	};

	toggleEdit = () => { 
		this.setState ({
			isEdit: !this.state.isEdit,
		});
	} 

	render(){
		var classRespond = "";
		if (this.props.isChecked){
			classRespond = "responded";
		}

		var editForm, editText;
		if (this.state.isEdit) {
			editForm=<input type="text" value={this.props.name} onChange={(e) => this.props.onEditName(e.target.value)}/>;
			editText="save";
		}
		else {
			editForm=<span>{this.props.name}</span>;
			editText="edit";
		}

		// var guestPending = <GuestPending name={this.props.pendingName}/> 

		// if (this.props.pendingName === "") { 

		return(
		<li className={classRespond}>
		{editForm}
            <label onRemove={this.props.onDeleteGuest}>
              <input 
              type="checkbox" 
              checked={this.props.isChecked}
              onClick={this.props.onClick}
              onChange={(e) => this.onChangeName(e.target.value)}
              /> Confirmed
            </label>
            <button onClick={this.toggleEdit}>{editText}</button>
            <button onClick={this.props.onDeleteGuest}>Remove</button>
        </li>
		);
	}
}