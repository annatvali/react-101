import { useState } from 'react';
import RegistrationForm from '../input/RegistrationForm';

export default function Button() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && <RegistrationForm closeModal={() => setShowModal(false)} />}
      <button
        type='submit'
        className='flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={handleButtonClick}
      >
        Sign in
      </button>
    </>
  );
}
