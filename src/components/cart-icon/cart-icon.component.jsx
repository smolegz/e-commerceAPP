import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon'>
		<ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
	itemCount: cartItems.reduce(
		(accumualtedQuantity, cartItem) => accumualtedQuantity + cartItem.quantity,
		0
	),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
