import { urlApi } from '../constants';

export const startputDatas = (value) => ({
  type: 'START_PUT_DATAS',
  value,
});

export const successputDatas = datas => ({
  type: 'SUCCESS_PUT_DATAS',
  datas,
});

export const errorputDatas = err => ({
  type: 'ERROR_PUT_DATAS',
  err,
});

export const asyncputWithUrl = (value) => (dispatch) => {
  dispatch(startputDatas(value));
  fetch(`${urlApi}/${value}`)
    .then(res => res.json())
    .then((datas) => {
      dispatch(successputDatas(datas));
    })
    .catch(() => {
      dispatch(errorputDatas('Erreur lors du chargement des données '));
    });
};