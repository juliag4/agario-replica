const styleNode = document.createElement('style');
document.head.appendChild(styleNode);

export const AddStyle = (css) => {
    style.textContent += css;
};
