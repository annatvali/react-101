import Logo from '../../Logo';

export default function Footer() {
 return (
   <footer className='flex flex-col items-center justify-center gap-2 bg-gray-900 text-white text-center p-8'>
     <Logo />
     <p>© 2023 My React App</p>
     <p>All Rights Reserved</p>
   </footer>
 );
}