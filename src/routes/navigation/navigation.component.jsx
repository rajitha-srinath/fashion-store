import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utills/firebase.utills";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className="nav-link" onClick={signOutUser}>
            Sign Out
          </NavLink>
          ) : (
            <NavLink to="/auth">
            Sign In
          </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
