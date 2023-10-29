import React, { useState } from "react";

export default function Img_Carousel(props) {
  const [state, setstate] = useState({
    name: 1,
  });

  const OnNextClick = () => {
    setstate({
      name: state.name + 1,
    });
  };

  const OnPrevClick = () => {
    setstate({
      name: state.name - 1,
    });
  };

  return (
    <>
      <div className="container text-center " style={{ marginTop: 140 }}>
        {/* position absolute and not relative */}

        <button
          type="button"
          className="btn btn-primary"
          style={{ position: "absolute", left: 350, bottom: 350 }}
          onClick={OnPrevClick}
          disabled={state.name == 1 ? true : false}
        >
          &larr;
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{ position: "absolute", left: 1150, bottom: 340 }}
          onClick={OnNextClick}
          disabled={state.name > 4 ? true : false}
        >
          &rarr;
        </button>

        <img src={`./images/${state.name}.jpg`} style={{ height: 400 }} />
      </div>
    </>
  );
}
