import styled from '@emotion/styled';
import { FaCartPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 15px;
  font-size: 18px;

  &.active {
    background-color: orange;
    color: white;
    padding: 10px;
    border-radius: 10px;
    text-decoration: underline;
  }

  :last-child {
    margin-right: 0;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Checkout = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;

export const CheckoutIcon = styled(FaCartPlus)`
  margin-right: 10px;
`;
