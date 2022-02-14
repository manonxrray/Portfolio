import backgroundVideo from './paint.mp4';

const App = () => {

  return (
    <div className="w-screen h-screen">
      <video 
        className="h-full w-full -z-10 fixed object-cover"
        autoPlay
        loop 
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
