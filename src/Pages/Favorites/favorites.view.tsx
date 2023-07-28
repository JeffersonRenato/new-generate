import { FavoritesWrapper } from "./favorites.style";

const View = () => (
  <FavoritesWrapper>
    <div className="under-construction-image-wrapper">
      <img src={require("../under-construction.svg").default} className="under-construction-image" />
    </div>
  </FavoritesWrapper>
);

export default View;
