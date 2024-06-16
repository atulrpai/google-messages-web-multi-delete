document.addEventListener('DOMContentLoaded', function () {

	document.getElementById("createCheckBoxBtn").addEventListener("click", () => {
		chrome.tabs.query( { active: true, currentWindow: true }, (tabs) => { 
			chrome.tabs.sendMessage( tabs[0].id, {
				message: "addCheckboxesToConversationItems"
			});
		});
	});

	document.getElementById("selectAllBtn").addEventListener("click", () => {
		chrome.tabs.query( { active: true, currentWindow: true }, (tabs) => { 
			chrome.tabs.sendMessage( tabs[0].id, {
				message: "selectAllCheckboxes"
			});
		});
	});

	document.getElementById("deleteSelectedBtn").addEventListener("click", () => {
		chrome.tabs.query( { active: true, currentWindow: true }, (tabs) => { 
			chrome.tabs.sendMessage( tabs[0].id, {
				message: "deleteSelectedConversationItems"
			});
		});
	});

	document.getElementById("archiveSelectedBtn").addEventListener("click", () => {
		chrome.tabs.query( { active: true, currentWindow: true }, (tabs) => { 
			chrome.tabs.sendMessage( tabs[0].id, {
				message: "archiveSelectedConversationItems"
			});
		});
	});

});
