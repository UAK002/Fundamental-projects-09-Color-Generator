import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');

  const handleSubmit = () => {};

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
