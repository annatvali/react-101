import { useState } from 'react';
import Logo from '../../Logo';
import Button from '../../button/Button';
import RegistrationForm from '../../input/RegistrationForm';
import { nav } from '../../../data/nav';

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className='flex justify-between items-center bg-gray-900 text-white text-center p-8'>
      <div className='flex items-center gap-4'>
        <Logo />
        <h1 className='text-2xl font-bold sm:block hidden'>My React App</h1>
      </div>
      <ul className='flex gap-4'>
        {nav.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button onClick={() => setShowForm(true)}>Sign in</Button>
      {showForm && <RegistrationForm />}
    </header>
  );
}
