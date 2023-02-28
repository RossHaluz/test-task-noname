import { AuthNavigation, AuthNavigationLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthNavigationLink to="/login">Login</AuthNavigationLink>
      <AuthNavigationLink to="/register">Register</AuthNavigationLink>
    </AuthNavigation>
  );
};

export default AuthNav;
