import React from 'react';

export default class HideBox extends React.Component{
	render(){
		return(
		<div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox"/> Hide those who haven't responded
          </label>
        </div>	
        );
	}
}

