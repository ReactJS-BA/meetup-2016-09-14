import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
