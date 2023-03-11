import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';
import FormResetPassword from './components/Form.resetPassword';

const ResetPassword = ({ logged }) => {
  const history = useNavigate();
  useEffect(()=>{
    logged && history('/');
  });
  return (
    <div>
      <NavBar/>
      <div className='h-[450px] mb-40 bg-slate-200 xl:justify-center xl:flex xl:flex-col xl:items-center'>
        <div className='bg-white xl:flex xl:flex-col xl:items-center w-[500px] h-[270px] shadow'>
          <header className='my-2 font-semibold xl:text-2xl'>Change your password</header>
          <FormResetPassword/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ResetPassword;