
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../videos/vid1.mp4";
import vid4 from "../videos/vid4.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
<br></br>
const Explor = () => {
  const videoProperties = [
    {
      id: 1,
      title: "PAPER CRAFT",
      src: Vid1,
      credit: "Video from Youtube",
    },
    {
      id: 2,
      title: "JEWELLERY",
      src: Vid4,
      credit: "Video from Youtube",
    },
    {
      id: 3,
      title: "CLOTHING",
      src: Vid1,
      credit: "Video from Youtube",
    },
    {
        id: 3,
        title: "RECYCLE",
        src: vid4,
        credit: "Video from Youtube",
      },
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
           width="100%"
           height="600px"
           
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      
    </div>

    
    
    
  );
};

export default Explor;