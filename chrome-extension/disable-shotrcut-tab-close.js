document.addEventListener('keydown', evt => {
	if (evt.ctrlKey && evt.key === 'w') {
		evt.preventDefault();
	}
});
