global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 1);
};
