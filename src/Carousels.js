import { useEffect } from "react";
import { useState } from "react";

const data = [
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
  "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
];

const Carousels = () => {
  const [clickBtn, setClickBtn] = useState(0);

  const handlePrevClick = () => {
    if (clickBtn == 0) return setClickBtn(data.length - 1);
    setClickBtn(clickBtn - 1);
  };
  const handleNextClick = () => {
    setClickBtn((clickBtn + 1) % data.length);
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [clickBtn]);

  return (
    <div className="App">
      <button className="button-left" onClick={handlePrevClick}>
        Prev
      </button>
      {/* Perfomance optimization once images will be loaded when trigger the prev and next button */}
      {/* {data.map((imgIdex, idex) => (
        <img key src={imgIdex} className={"countanier"} />
      ))} */}

      <img src={data[clickBtn]} className={"countanier"} />

      <button className="button-right" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousels;
