const setCardValues = (windowSize: number) => {
  let cardSize = 220;
  let cardGap = 10;

  switch (true) {
    case windowSize <= 767:
      cardSize = 180;
      cardGap = 5;
      break;
    case windowSize >= 768 && windowSize <= 1023:
      cardSize = 200;
      cardGap = 8;
      break;
    case windowSize >= 1024:
      cardSize = 220;
      cardGap = 10;
      break;
  }

  const cardDisplacement = cardSize + cardGap;

  return {
    cardSize,
    cardGap,
    cardDisplacement,
  };
};

export default setCardValues;
