import './Cell.css';

function Cell({onClick, value}) {
  return (
    <div className={`cell ${value}`} onClick={onClick}></div>
  )
}

export default Cell;
