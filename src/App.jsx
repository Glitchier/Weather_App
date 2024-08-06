import MainWeather from "./components/MainWeather";

const App = () => {
  return (
    <div className="flex items-center justify-center p-[2rem] bg-bgImg md:h-screen w-full object-center bg-cover">
      <main className="flex flex-col items-center justify-center bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-[1rem] drop-shadow-md p-[2rem] gap-6">
        <div className="flex flex-col justify-center items-center gap-[1.5rem]">
          <MainWeather />
        </div>
      </main>
    </div>
  );
};

export default App;
