import * as React from 'react';

interface Props {
  children: React.ReactChild
}
const Card: React.FunctionComponent<Props> = (props) => {
  const [className, setClass] = React.useState('')
  const nextSlide = () => {
    setClass('next-slide');
  }
  return (
    <div className={`info-card ${className}`}>
      <p>{props.children}</p>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Card;
