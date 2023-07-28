import { PlaylistWrapper } from "./playlist.style";

const View = () => (
  <PlaylistWrapper>
    <div className="under-construction-image-wrapper">
      <img src={require("../under-construction.svg").default} className="under-construction-image" />
    </div>
  </PlaylistWrapper>
);

export default View;
