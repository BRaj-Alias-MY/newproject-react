import React from 'react';
import axios from 'axios';
const UserComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor (props) {
      super (props);

      this.state = {
        users: [],
      };
    }
    componentDidMount () {
      axios
        .get ('http://localhost:8000/api/userlist')
        .then (resp => {
          console.log (resp);
          this.setState ({
            users: resp.data,
          });
        })
        .catch (err => console.log (err));
    }

    render () {
      return <OriginalComponent users={this.state.users} />;
    }
  }
  return NewComponent;
};

export default UserComponent;
