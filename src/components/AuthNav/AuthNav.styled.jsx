import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

export const AuthNavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #030303;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 10px;

  :last-child {
    margin-right: 0;
  }

  &.active {
    text-decoration: underline;
  }
`;
