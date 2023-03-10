import { setUser } from 'components/redux/auth/slice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const { Form } = require('components/Form/Form');
const { useDispatch } = require('react-redux');

const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
