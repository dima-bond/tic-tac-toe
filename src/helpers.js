export const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const styles = [
  {'top': '15%'},
  {
    'top': '50%',
    'transform': 'rotate(0) translateY(-50%)'
  },
  {'bottom': '15%'},
  {
    'transformOrigin': 'top left',
    'left': 'calc(100% / 6)',
    'transform': 'rotate(90deg) translateY(-50%)',
  },
  {
    'transformOrigin': 'top center',
    'transform': 'rotate(90deg) translate(50%, -50%)',
  },
  {
    'transformOrigin': 'top right',
    'right': 'calc(100% / 6)',
    'transform': 'rotate(-90deg) translateY(calc(100% / -3))',
  },
  {
    'transformOrigin': 'top left',
    'transform': 'rotate(45deg) translate(21%, -50%)',
  },
  {
    'transformOrigin': 'top right',
    'transform': 'rotate(-45deg) translate(-21%, -50%)',
  }
]
