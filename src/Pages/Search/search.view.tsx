import { SearchWrapper } from "./search.style";

const View = () => (
  <SearchWrapper>
    <div className="under-construction-image-wrapper">
      <img src={require("../under-construction.svg").default} className="under-construction-image" />
    </div>
  </SearchWrapper>
);

export default View;
