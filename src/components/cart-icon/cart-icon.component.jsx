import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen} from '../../store/cart/cart.selector.js'
import { setIsCartOpen} from '../../store/cart/cart.reducer.js'

import {ShopingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
