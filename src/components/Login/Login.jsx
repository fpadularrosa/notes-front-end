import FormLogin from './components/Form.login';
import '../../App.css';

const Login = ({ setLogged }) => {
  return (
    <div className='shadow-md xl:flex xl:flex-col xl:items-center xl:px-3 xl:py-4'>
      <div className='xl:flex xl:flex-col xl:items-center xl:pb-3'>
        <div>
          <FormLogin setLogged={setLogged} />
        </div>
      </div>
    </div>
  );
};

export default Login;