import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import Input from '../../Input';
import Form from '../../Form';
import Button from '../../Button';

const FormLogin = ({ setLogged }) => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
  };

  const location = window.location.href.split('/')[3];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({user, setLogged}));
    e.target.reset();
  };
  return (
    <>
      {
        !location ? 
        <div>
          <Form dataTestId='formInHome' className='pb-2' onSubmit={e => handleSubmit(e)}>
            <div className='xl:flex xl:flex-col xl:items-center xl:w-[350px] xl:space-y-2'>
              <Input className='border empty:border-gray-400 xl:pl-2 xl:w-[330px] xl:h-10 font-Raleway focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='you@email.com' name='email' type='email' onChange={e => handleChange(e)} value={user.email}></Input>
              <Input className='border empty:border-gray-400 xl:pl-2 xl:w-[330px] xl:h-10 font-Raleway' placeholder='Password' type='password' name='password' onChange={e => handleChange(e)} value={user.password}></Input>
              <Link className='text-purple-500 font-Raleway xl:font-thin xl:text-sm' to='/identify-recover'>Did you forget your password?</Link>
              <button data-testid='buttonFormHome' className='flex items-center justify-center h-10 text-xl text-white bg-purple-500 border border-purple-500 shadow w-44 hover:bg-purple-600 place-self-center font-Raleway'>Log In</button>
            </div>
          </Form>
          <div className='xl:flex xl:justify-center xl:border-t-[1px]'>
            <Input type='checkbox' className='hidden'></Input>
            <label className='h-10 text-white bg-blue-500 border border-blue-500 shadow cursor-pointer xl:mt-2 xl:flex xl:items-center xl:justify-center xl:text-center xl:w-44 xl:text-lg hover:bg-blue-600 xl:place-self-center ' id='lbl-modal'>Create new account</label>
          </div>
        </div> : 
        <Form onSubmit={e => handleSubmit(e)}>
          <div className='m-1 space-x-3 xl:flex xl:flex-row'>
            <Input className='border empty:border-gray-400 xl:h-[35px] xl:pl-3 font-Raleway text-sm w-[230px] focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='you@email.com' name='email' type='email' onChange={e => handleChange(e)} value={user.email}></Input>
            <Input className='border border-gray-400 xl:h-[35px] xl:pl-3 font-Raleway text-sm w-[230px]' placeholder='password' type='password' name='password' onChange={e => handleChange(e)} value={user.password}></Input>
            <Button className='flex items-center justify-center h-[35px] text-lg text-white bg-purple-500 border hover:bg-purple-600 border-purple-500 w-28 place-self-center font-Raleway'>Log In</Button>
          </div>
        </Form>
      }
    </>
  );
};

export default FormLogin;