import {
  HeaderNavigation,
  NavigationLink,
  Checkout,
  CheckoutIcon,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <HeaderNavigation>
      <div>
        <NavigationLink to="/">Головна</NavigationLink>
        <NavigationLink to="/products">Товари</NavigationLink>
      </div>
      <Checkout>
        <NavigationLink to="/checkout">
          <CheckoutIcon />
          Корзина
        </NavigationLink>
      </Checkout>
    </HeaderNavigation>
  );
};

export default Navigation;
