import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer.jsx';
import NavBar from '../NavBar.jsx';
import FormForgotPassword from './components/Form.forgotPassword.jsx';

const ForgotPassword = ({ logged }) => {
  const history = useNavigate();
  useEffect(()=>{
    logged && history('/');
  });
  return (
    <>
      <NavBar/>
      <div className='bg-white '>
      <div className='h-[450px] mb-40 xl:flex xl:items-center xl:justify-center bg-slate-200'>
        <div className='bg-white xl:pl-3 xl:pr-3 xl:pb-3 xl:pt-2'>
          <header className='pb-4 pr-2 text-2xl font-medium'>Recovery your account</header>
          <h4 className='border-t-[1px] text-base pt-2'>Enter your email to find your account.</h4>
          <FormForgotPassword/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ForgotPassword;