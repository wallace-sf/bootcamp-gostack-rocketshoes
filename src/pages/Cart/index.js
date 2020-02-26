/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';
import formatPrice from '../../utils/format';

function Cart({ cart, removeFromCart, updateAmount, total }) {
  function increment(product) {
    return updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    return updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  updateAmount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
