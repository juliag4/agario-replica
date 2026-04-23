const styleNode = document.querySelector(style);
document.head.appendChild(styleNode);

export const AddStyle = (css) => {
  styleNode.textContent += css;
};
