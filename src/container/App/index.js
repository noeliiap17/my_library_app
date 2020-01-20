import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Link from "../../component/Link";

class App extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div className="App">
        <p>My react app</p>
        <Link to="/about" className="App-link">
          <p>About</p>
        </Link>

        {users.map((user, key) => (
          <p>{user.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(App);
