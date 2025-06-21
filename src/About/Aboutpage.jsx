

const HeroBanner = () => {
  return (
    <div
      className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://static.joonsite.com/storage/1978/media/loan2.jpg')`, // Replace with actual image path
      }}
    >
      <h1 className="text-4xl font-semibold capitalize">gauri singh</h1>
      <div className="mt-2 text-lg flex gap-2 items-center">
        <a href="/" className="hover:underline">
          Home
        </a>
        <span className="text-white">&gt;</span>
        <span className="text-gray-300">About-us</span>
      </div>
    </div>
  );
};

export default HeroBanner;
