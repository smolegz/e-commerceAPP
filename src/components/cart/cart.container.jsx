import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { compose } from "redux";
import Cart from "./cart.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const CartContainer = compose(withRouter, connect(mapStateToProps))(Cart);

export default CartContainer;
