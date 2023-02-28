import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
};

export default AppBar;
