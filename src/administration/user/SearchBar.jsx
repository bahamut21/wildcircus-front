import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncSearchFetchWithUrl } from '../../actions/search';
import UserAdmin from './UserAdmin';
import './SearchBar.scss';

class SearchBar extends Component {
  // componentWillUnmount() {
  //   const { asyncSearchFetchWithUrl } = this.props;
  //   asyncSearchFetchWithUrl('');
  // }

  handleChange = (event) => {
    const { asyncSearchFetchWithUrl } = this.props;
    const { value } = event.target;
    const route = 'user';
    const key = 'lastName';
    asyncSearchFetchWithUrl(route, value, key);
  }

  // onSelectCompany = (company) => {
  //   const { selectCompany, search } = this.props;
  //   selectCompany(company);
  //   search('');
  // }

  render() {
    const {
      searchValue, error, datas,
    } = this.props;
    return (
      <div className="SearchBar col-12 col-md-6 mr-auto">
        <input type="text" name="searchEvent" id="searchEvent" value={searchValue} onChange={this.handleChange} placeholder="Find user by lastname" />
        {
          (error !== '')
            ? <div className="error">{error}</div>
            : ''
        }
        {
          datas.map(user => <UserAdmin user={user} />)
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