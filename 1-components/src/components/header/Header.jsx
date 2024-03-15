import Logo from './../Logo';
import Button from './Button';

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-gray-900 text-white text-center p-8'>
      <nav className='flex items-center gap-4'>
        <Logo />
        <h1 className='text-2xl font-bold sm:block hidden'>My React App</h1>
      </nav>
      <Button />
    </header>
  );
}
