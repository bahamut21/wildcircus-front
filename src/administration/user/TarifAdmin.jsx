import React from 'react';
import { Table } from 'reactstrap';
import './TarifAdmin.scss';

export default class TarifAdmin extends React.Component {
  render() {
    const {
      datas: {
        nbTicket1, nbTicket2, nbTicket3, tarif1, tarif2, tarif3, total1, total2, total3, total,
      },
    } = this.props;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>unit price</th>
            <th>number</th>
            <th>total price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">tarifs gold</th>
            <td>{tarif1}$</td>
            <td>{nbTicket1}</td>
            <td>{total1}$</td>
          </tr>
          <tr>
            <th scope="row">tarifs sylver</th>
            <td>{tarif2}$</td>
            <td>{nbTicket2}</td>
            <td>{total2}$</td>
          </tr>
          <tr>
            <th scope="row">tarifs bronze</th>
            <td>{tarif3}$</td>
            <td>{nbTicket3}</td>
            <td>{total3}$</td>
          </tr>
          <tr>
            <th scope="row">total</th>
            <td></td>
            <td></td>
            <td>{total}$</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
