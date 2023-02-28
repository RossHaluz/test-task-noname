const { useSelector } = require('react-redux');

export const useAuth = () => {
  const { email, token, id } = useSelector(state => state.user);

  return {
    email,
    token,
    id,
  };
};
