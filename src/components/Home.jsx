import { useEffect } from 'react';
import Footer from './Footer.jsx';
import Login from './Login/Login.jsx';
import NavBar from './NavBar.jsx';
import Notes from './Notes.jsx';
import '../App.css';
import ModalRegister from './Register/ModalRegister';

const Home = ({ setLogged, logged }) => {
    useEffect(()=>{
      if(!logged)
      {
        const modalRegister = document.getElementById('modal');
        const closeModalLabel = document.getElementById('close-modal');
        const stateDisplayRegister = modalRegister.style.display;
        const buttonOpenModal = document.getElementById('lbl-modal');
    
        buttonOpenModal.addEventListener('click', ()=>{
          modalRegister.style.visibility = 'visible';
          modalRegister.style.opacity = 1;
          modalRegister.style.display = stateDisplayRegister;
        });
    
        closeModalLabel.addEventListener('click', ()=>{
          modalRegister.style.visibility = 'invisible';
          modalRegister.style.opacity = 0;
          modalRegister.style.display = 'none';
        });
      }
    });
  return (
    <>
      {logged ? 
        <>
          <NavBar logged={logged} setLogged={setLogged}/>
          <div className='xl:mt-20'>
            <Notes/>
          </div>
        </>
        : 
        <div>
          <div className='xl:pt-[72px] xl:pb-52 xl:place-content-center'>
            <div className='xl:flex xl:justify-center xl:items-center xl:space-x-10 xl:py-20'>
              <div className='xl:flex xl:flex-col'>
                <h1 className='text-red-600 xl:font-bold xl:text-4xl font-Raleway'>notes for work</h1>
                <h3><strong className='font-Raleway'>'Notes for work'</strong> was created for check and create your notes for work.</h3>
              </div>
              <div>
                <Login setLogged={setLogged}/>
                <ModalRegister/>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      }
    </>
  );
};

export default Home;