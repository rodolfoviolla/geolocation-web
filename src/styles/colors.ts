export const colors = {
  lightBlue: 'rgba(28, 153, 223, 0.57)',
  darkBlue: 'rgba(50, 181, 255, 0.1482)',
  black: 'rgba(0, 0, 0, 0.57)',
  lightWhite: '#FFFFFFBB',
  darkWhite: '#FFFFFFAA',
  lightGray: 'rgba(170, 170, 170, 0.57)',
  darkGray: 'rgba(50, 50, 50, 0.7)',
};

export const linearGradient = (topColor: string, bottomColor: string) => 
  `linear-gradient(180deg, ${topColor} 2.08%, ${bottomColor} 81.77%)`;