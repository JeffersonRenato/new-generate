import { DonateWrapper } from "./donate.style";

const View = () => (
  <DonateWrapper>
    <div className="under-construction-image-wrapper">
      <img src={require("../under-construction.svg").default} className="under-construction-image" />
    </div>
  </DonateWrapper>
);

export default View;
