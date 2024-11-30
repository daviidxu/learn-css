const InkEffect = () => {
  return (
    <div className="relative h-full w-full">
      <section className="before:-z-1 flex h-full items-center justify-center before:absolute before:inset-0 before:bg-[url('./assets/bg-forest.jpg')] before:bg-cover before:bg-center" />
      <section className="before:-z-1 flex h-full items-center justify-center before:absolute before:inset-0 before:bg-[url('./assets/ink-reveal.gif')] before:bg-cover before:bg-center">
        <h1 className="z-10 text-9xl text-blue-500">David.XU</h1>
      </section>
    </div>
  );
};

export default InkEffect;
