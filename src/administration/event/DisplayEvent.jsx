import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchWithUrl } from '../../actions/fetchWithUrl';
import EventAdmin from './EventAdmin';
import SearchBar from './SearchBar';

class DisplayEvent extends Component {
  componentDidMount() {
    const { asyncFetchWithUrl } = this.props; // from actions
    const route = 'event'
    asyncFetchWithUrl(route);
  }

  render() {
    const { datas, error } = this.props;
    return (
      <div className="DisplayEvent">
        <SearchBar />
        {
          (error !== '')
            ? <div className="error">{error}</div>
            : ''
        }
        {
          (datas.length)
            ? <div className="sucess">
              <h3>More events ...</h3>
              {
                datas.map((event, index) => <EventAdmin event={event} />)
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

export default connect(mstp, mdtp)(DisplayEvent);