const Footer = () => {
  return (
    <footer className='flex justify-center'>
        <div className='bg-white border-y-[1px] border-y-slate-200 w-[500px] mb-20'>
          <ul className='flex justify-around xl:flex xl:space-x-2'>
            <li>
              <a className='font-Raleway' href='/'>Home</a>
            </li>
            <li>
              <a className='font-Raleway' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/padularrosa-franco-fullstack/'>Developer</a>
            </li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;