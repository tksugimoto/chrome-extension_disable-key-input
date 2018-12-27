document.getElementById('open').addEventListener('click', () => {
	chrome.tabs.query({
		active: true,
		currentWindow: true,
	}, ([tab]) => {
		chrome.tabs.executeScript(tab.id, {
			file: 'disable-shotrcut-tab-close.js',
		});
		const disableReloadShortcutInput = document.getElementById('disable-reload-shortcut-input').checked;
		if (disableReloadShortcutInput) {
			chrome.tabs.executeScript(tab.id, {
				file: 'disable-shotrcut-tab-reload.js',
			});
		}
		const disableAllKeyInput = document.getElementById('disable-all-key-input').checked;
		if (disableAllKeyInput) {
			chrome.tabs.executeScript(tab.id, {
				file: 'disable-all-key-input.js',
			});
		}
		chrome.windows.create({
			tabId: tab.id,
			type: chrome.windows.CreateType.POPUP,
			state: chrome.windows.WindowState.MAXIMIZED,
		});
	});
});
