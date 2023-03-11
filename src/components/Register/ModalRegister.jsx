import Register from './components/Register';

const ModalRegister = () => {
  return (
    <div className='xl:flex xl:justify-center xl:items-center xl:w-[100%] xl:h-[100%] xl:fixed xl:left-0 xl:top-0 bg-[rgba(253,253,253,0.5)]' id='modal'>
      <div className='xl:m-auto bg-[#fff] xl:relative xl:w-[500px] xl:border-collapse' id='container'>
        <header className='xl:p-[10px] xl:text-3xl'>Register</header>
        <h3 className='text-gray-500 overline ml-1 border-b-[1px] xl:pl-[10px] xl:pb-[10px] xl:pr-[10px]'>Fast and easy.</h3>
        <label id='close-modal' className='xl:absolute xl:top-[10px] xl:right-[10px] cursor-pointer'>X</label>
        <div id='content'>
          <Register/>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;