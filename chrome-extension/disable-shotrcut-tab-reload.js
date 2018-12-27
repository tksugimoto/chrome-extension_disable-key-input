document.addEventListener('keydown', evt => {
	if (evt.ctrlKey && evt.key === 'r') {
		evt.preventDefault();
	}
});
