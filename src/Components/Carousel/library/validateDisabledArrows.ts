interface IProps {
  left: number;
  innerWidth?: number;
  wrapperWidth?: number;
}

const validateDisabledArrows = (props: IProps) => {
  const { left, innerWidth = 0, wrapperWidth = 0 } = props;

  let disabledArrowRight = false;
  let disabledArrowLeft = false;

  if (left <= 0) {
    disabledArrowLeft = true;
  } else {
    disabledArrowLeft = false;
  }

  if (left < innerWidth - wrapperWidth) {
    disabledArrowRight = false;
  } else {
    disabledArrowRight = true;
  }

  return { disabledArrowRight, disabledArrowLeft };
};

export default validateDisabledArrows;
