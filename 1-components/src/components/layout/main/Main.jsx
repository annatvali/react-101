export default function Main() {
  return (
    <main className='flex flex-col md:flex-row justify-between items-center gap-8 justify-center gap-4 px-8 py-20 bg-gray-200'>
      <section>
        <h2 className='text-5xl font-bold mb-8 text-purple-800'>
          Welcome to My React App
        </h2>
        <p className='text-3xl max-w-4xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae illum
          obcaecati quam quasi quo aliquid culpa, minima provident facere.
          Molestiae tenetur fuga impedit velit.
        </p>
      </section>
      <section>
        <img
          src='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='react app'
          className='rounded-md max-w-4xl w-full h-auto'
        />
      </section>
    </main>
  );
}