import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Dev',
        1000,
        'Adrian',
        1000,    // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Type;