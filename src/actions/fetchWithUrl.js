import { urlApi } from '../constants';

export const startFetchDatas = (value) => ({
  type: 'START_FETCH_DATAS',
  value,
});

export const successFetchDatas = datas => ({
  type: 'SUCCESS_FETCH_DATAS',
  datas,
});

export const errorFetchDatas = err => ({
  type: 'ERROR_FETCH_DATAS',
  err,
});

export const asyncFetchWithUrl = (value) => (dispatch) => {
  dispatch(startFetchDatas(value));
  fetch(`${urlApi}/${value}`)
    .then(res => res.json())
    .then((datas) => {
      dispatch(successFetchDatas(datas));
    })
    .catch(() => {
      dispatch(errorFetchDatas('Erreur lors du chargement des données '));
    });
};