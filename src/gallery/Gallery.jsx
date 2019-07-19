import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../actions/fetchWithUrl';
import Event from './Event';

class Gallery extends Component {
  componentDidMount() {
    const { asyncFetchWithUrl } = this.props; // from actions
    const route = 'event'
    asyncFetchWithUrl(route);
  }

  render() {
    const { datas, error } = this.props;
    return (
      <div className="Gallery">
        {
          (error !== '')
            ? <div className="error">{error}</div>
            : ''
        }
        {
          (datas.length)
            ? <div className="sucess">
              {
                datas.map((event, index) => <Event event={event} />)
              }
            </div>
            : ''
        }
      </div>
    );
  }
  
}

const mstp = state => ({
  datas: state.fetchWithUrl.list, // from reducer
  route: state.fetchWithUrl.value, // from reducer
  error: state.fetchWithUrl.error, // from reducer
  loading: state.fetchWithUrl.loading, // from reducer
});

const mdtp = dispatch => bindActionCreators({ asyncFetchWithUrl }, dispatch); // from actions

export default connect(mstp, mdtp)(Gallery);