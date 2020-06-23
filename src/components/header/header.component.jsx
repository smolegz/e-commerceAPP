import React from "react";

import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartContainer from "../cart/cart.container";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
	HeaderContainer,
	LogoContainer,
	OptionLink,
	OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>

		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink to='/faq'>FAQ</OptionLink>
			<OptionLink to='/contact'>CONTACT</OptionLink>

			{currentUser ? (
				<OptionLink as='div' onClick={signOutStart}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartContainer />}
	</HeaderContainer>
);

const mapStateToProp = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProp, mapDispatchToProps)(Header);
