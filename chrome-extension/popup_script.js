document.getElementById('open').addEventListener('click', () => {
	chrome.tabs.query({
		active: true,
		currentWindow: true,
	}, ([tab]) => {
		chrome.tabs.executeScript(tab.id, {
			allFrames: true,
			file: 'scripts/disable-ctrl_w.js',
		});
		const disableReloadShortcutInput = document.getElementById('disable-ctrl_r').checked;
		if (disableReloadShortcutInput) {
			chrome.tabs.executeScript(tab.id, {
				allFrames: true,
				file: 'scripts/disable-ctrl_r.js',
			});
		}
		const disableAllKeyInput = document.getElementById('disable-all').checked;
		if (disableAllKeyInput) {
			chrome.tabs.executeScript(tab.id, {
				allFrames: true,
				file: 'scripts/disable-all.js',
			});
		}
		chrome.windows.create({
			tabId: tab.id,
			type: chrome.windows.CreateType.POPUP,
			state: chrome.windows.WindowState.MAXIMIZED,
		});
	});
});
