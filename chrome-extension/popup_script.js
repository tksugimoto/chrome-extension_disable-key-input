document.getElementById('open').addEventListener('click', () => {
	chrome.tabs.query({
		active: true,
		currentWindow: true,
	}, ([tab]) => {
		chrome.scripting.executeScript({
			target: {
				tabId: tab.id,
				allFrames: true,
			},
			files: ['scripts/disable-ctrl_w.js'],
		});
		const disableReloadShortcutInput = document.getElementById('disable-ctrl_r').checked;
		if (disableReloadShortcutInput) {
			chrome.scripting.executeScript({
				target: {
					tabId: tab.id,
					allFrames: true,
				},
				files: ['scripts/disable-ctrl_r.js'],
			});
		}
		const disableAllKeyInput = document.getElementById('disable-all').checked;
		if (disableAllKeyInput) {
			chrome.scripting.executeScript({
				target: {
					tabId: tab.id,
					allFrames: true,
				},
				files: ['scripts/disable-all.js'],
			});
		}
		chrome.windows.create({
			tabId: tab.id,
			type: chrome.windows.CreateType.POPUP,
			state: chrome.windows.WindowState.MAXIMIZED,
		});
	});
});
