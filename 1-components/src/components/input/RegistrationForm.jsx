export default function RegistrationForm({ closeModal }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <form className='bg-white text-black p-8 rounded shadow-md relative'>
        <button onClick={closeModal} className='absolute top-4 right-8'>
          close
        </button>
        <h2 className='text-2xl mb-4'>Register</h2>
        <input
          className='mb-4 w-full p-2 border rounded'
          type='text'
          placeholder='Name'
        />
        <input
          className='mb-4 w-full p-2 border rounded'
          type='email'
          placeholder='Email'
        />
        <button className='w-full py-2 px-4 bg-blue-600 text-white rounded'>
          Submit
        </button>
      </form>
    </div>
  );
}
