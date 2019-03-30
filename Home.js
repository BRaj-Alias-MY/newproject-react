import React, {Component} from 'react';
import UserComponent from './UserComponent';

export class Home extends Component {
  render () {
    const style = {
      Color: {
        color: 'red',
      },
    };
    const {users} = this.props;
    return (
      <React.Fragment>
        <h2>Higher Order Component Example</h2>
        <br />
        <ul style={style.Color}>
          {users.map (user => (
            <li key={user.id}>
              {user.fullName}
            </li>
          ))}

        </ul>

        <p>
          The above code is to understand higher order component approach how to use common functionality across remaining
          components in ReactJS. I have written the code in "UserComponent.js" file and consumed it in "HomeComponent.".
          Check the structure to understand the flow.{' '}
        </p>
      </React.Fragment>
    );
  }
}

export default UserComponent (Home);
