import React from 'react';
import PropTypes from 'prop-types';

export default class GuestRespond extends React.Component{

	static PropTypes = {
		name: PropTypes.string, 
		isChecked: PropTypes.bool
	};

	render(){
		var classRespond = "";
		if (this.props.isChecked){
			classRespond = "responded";
		}
		return(
		<li className={classRespond}><span>{this.props.name}</span>
            <label>
              <input type="checkbox" checked={this.props.isChecked}/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
		);
	}
}