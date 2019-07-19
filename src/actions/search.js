import { urlApi } from '../constants';

export const startSearchFetchDatas = (value, search, key) => ({
  type: 'START_SEARCH_FETCH_DATAS',
  value,
  key,
  search,
});

export const successSearchFetchDatas = datas => ({
  type: 'SUCCESS_SEARCH_FETCH_DATAS',
  datas,
});

export const errorSearchFetchDatas = err => ({
  type: 'ERROR_SEARCH_FETCH_DATAS',
  err,
});

export const asyncSearchFetchWithUrl = (value, search, key) => (dispatch) => {
  dispatch(startSearchFetchDatas(value, search, key));
  fetch(`${urlApi}/${value}?${key}=${search}`)
    .then(res => res.json())
    .then((datas) => {
      dispatch(successSearchFetchDatas(datas));
    })
    .catch(() => {
      dispatch(errorSearchFetchDatas('Erreur lors du chargement des données '));
    });
};