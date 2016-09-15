/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';
import Mixin from './CustomMixin';

const Panel = (props) => {
  return(
        <div className="col-md-4 col-md-offset-4">
          <Dashboard title="Panel" user={props.user} data={props.dashboard} />
        </div>
    );
};

const mapStateToProps =(state) => ({
    user : state.user,
    dashboard : state.dashboard
});

function mapDispatchToProps(dispatch) {
  return {
    loadDashboard : function() {
      return dispatch({type: 'LOAD_DASHBOARD'});
    }
  };
}

let PanelMixed = Mixin(Panel);

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed);
