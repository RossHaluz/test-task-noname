import SignUp from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
