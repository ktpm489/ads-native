const ucFirst = value => `${value.charAt(0).toUpperCase()}${value.substr(1)}`;
const range = top => Array(top).fill().map((_, i) => i);

export {ucFirst, range};