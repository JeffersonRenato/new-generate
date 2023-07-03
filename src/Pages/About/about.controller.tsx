import { FC, useEffect, useMemo, useState } from "react";
import ServiceAbout from './../../Services/about/about.service';
import { IAboutResponse } from "../../Services";

import View from "./about.view";

const About: FC = () => {
  const [about, setAbout] = useState<IAboutResponse[]>([]);

  const serviceAbout = useMemo(() => new ServiceAbout(), []);

  const getAbout = () => {
    serviceAbout.getAbouts().then((about) => {
      setAbout(about);
    });
  };

  useEffect(getAbout, []);

  return <View about={about} />;
};

export default About;
