const App = () => {
  return (
    <section className="flex justify-center p-4">
      <h1 className="relative w-fit text-4xl before:absolute before:-bottom-2 before:z-10 before:h-1 before:w-0 before:bg-gradient-to-r before:from-red-600 before:to-blue-500 before:transition-[100ms] before:hover:w-full">
        Hello
        <span className="relative before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-3 before:bg-red-300">
          <span className="relative text-white">World</span>
        </span>
      </h1>
    </section>
  );
};

export default App;
