import './random-background.css'

export default function RandomBackground() {

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    const body = document.querySelector('.randomBackground-item');
    body.style.backgroundColor = color;
  }

  return (
    <div className='randomBackground-wrapper'>
      <button className='btn' onClick={getRandomColor}>Click for change random background-color</button>
      <div className="randomBackground-item">
        hover me
      </div>
    </div>
  )
};
