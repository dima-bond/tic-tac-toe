import Cell from './Cell';
import './Field.css';

function Field({ onClick, cells, showWin }) {
  return (
    <div className="field">
      {cells.map((e, i) => (
        <Cell key={i} value={cells[i]} onClick={() => onClick(i)}/>
      ))}
      {showWin && (
        <div className="winner" style={showWin}></div>
      )}
    </div>
  )
}

export default Field;
