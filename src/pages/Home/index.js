import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import formatPrice from '../../utils/format';
import { ProductList } from './styles';

class Home extends Component {
  static propTypes = {
    addToCartSuccess: PropTypes.func.isRequired,
    amount: PropTypes.object.isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { addToCartRequest, amount } = this.props;
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button" onClick={() => addToCartRequest(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                <span>{amount[product.id] || 0}</span>
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
