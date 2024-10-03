import { useEffect, useState } from "react";
import logo from './slider1.jpg'
const ImageSlider = ({ data }) => {
  const [isActive, setActive] = useState(0);

  useEffect(() => {
 
  const  timer = setInterval(() => {
      loadNextImage();
    }, 4000);

    return ()=>{
        clearInterval(timer)
    }
  }, []);



  

  const loadNextImage = () => {
    setActive((isActive) => (isActive + 1) % data.length);
  };

  const loadPriviosImage = () => {
    setActive((isActive) =>
      isActive - 1 < 0 ? data.length - 1 : isActive - 1
    );
  };
  return (
    <div className=" flex justify-center items-center relative">
      <img
        onClick={() => loadPriviosImage()}
        alt="pre-icon"
        className=" h-10 w-10 cursor-pointer absolute left-1 top-2/4 "
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
      ></img>

      <img
        alt="slider image"
        className=" h-[300px] w-full bg-yellow-600"
        src={logo}
      />
      <div className="absolute bottom-1 flex">
      {data.map((item)=><div key={item.id} className={`h-2 w-2 rounded m-2 ${item.id === isActive ? " bg-white":"bg-gray-400"}`}></div>)}
      </div>
      <img
        onClick={() => loadNextImage()}
        alt="next-icon"
        className=" h-10 w-10 cursor-pointer absolute right-1 top-2/4"
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
      ></img>
    </div>
  );
};

export default ImageSlider;
