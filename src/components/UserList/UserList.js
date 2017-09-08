//Import React
import React, { PropTypes, Component } from 'react';

//Create the UserList component
class UserList extends Component {

    //The main method render is called in all components for display
    render(){

      //Uncomment below to see the object inside the console
      //console.log(this.props.data);

      //Iterate the data provided here
      var list = this.props.data.map(function(item) {
        return <li key={item.id}>{item.first} <strong>{item.last}</strong></li>
      });

      //Return the display
      return (
        <ul>
          {list}
        </ul>
      );
    }
}

//Make it accessible to the rest of the app
export default UserList;
