import React, {Component} from 'react';
import UserComponent from './UserComponent';
export class Contact extends Component {
  render () {
    const style = {
      Color: {
        color: 'red',
      },
    };
    const {users} = this.props;
    return (
      <React.Fragment>
        <h2>CONTACT</h2>
        <h2>Higher Order Component Example</h2>
        <br />
        <ul style={style.Color}>
          {users.map (user => (
            <li key={user.id}>
              {user.fullName}
            </li>
          ))}

        </ul>
      </React.Fragment>
    );
  }
}

export default UserComponent (Contact);
