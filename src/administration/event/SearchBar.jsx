import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncSearchFetchWithUrl } from '../../actions/search';
import EventAdmin from './EventAdmin';
import './SearchBar.scss';

class SearchBar extends Component {

  handleChange = (event) => {
    const { asyncSearchFetchWithUrl } = this.props;
    const { value } = event.target;
    const route = 'event';
    const key = 'name';
    asyncSearchFetchWithUrl(route, value, key);
  }

  render() {
    const {
      searchValue, error, datas,
    } = this.props;
    return (
      <div className="SearchBar">
        <input type="text" name="searchEvent" id="searchEvent" value={searchValue} onChange={this.handleChange} placeholder="Find event by name" />
        {
          (error !== '')
            ? <div className="error">{error}</div>
            : ''
        }
        {
          datas.map(event => <EventAdmin event={event} />)
        }
      </div>
    );
  }
}

const mstp = state => ({
  datas: state.search.list,
  route: state.search.value, // from reducer
  searchValue: state.search.search,
  error: state.search.error,
  loading: state.fetchWithUrl.loading, // from reducer
});

const mdtp = dispatch => bindActionCreators({ asyncSearchFetchWithUrl }, dispatch);

export default connect(mstp, mdtp)(SearchBar);