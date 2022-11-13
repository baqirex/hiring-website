import React from "react";
import Presentation from "./common/presentation";
import PresentationReverse from "./common/presentationReverse";
import image2 from "../images/image-2.jpg";

const Presentations = () => {
  return (
    <div>
      <Presentation
        heading="This is Presentation"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem ad numquam error eveniet placeat. Ut eos inventore voluptatem quod."
        image={image2}
      />
      <PresentationReverse
        heading="This is Presentation"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem ad numquam error eveniet placeat. Ut eos inventore voluptatem quod."
        image={image2}
      />
    </div>
  );
};

export default Presentations;
