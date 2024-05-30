document.addEventListener('DOMContentLoaded', function () {

	document.getElementById("createCheckBoxBtn").addEventListener("click", async () => {
	    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	    await chrome.scripting.executeScript({
		target: {tabId: tab.id},
		function: addCheckboxesToConversationItems
	    });
	});

	document.getElementById("selectAllBtn").addEventListener("click", async () => {
	    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	    await chrome.scripting.executeScript({
		target: {tabId: tab.id},
		function: selectAllCheckboxes
	    });
	});

	document.getElementById("deleteSelectedBtn").addEventListener("click", async () => {
	    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	    await chrome.scripting.executeScript({
		target: {tabId: tab.id},
		function: deleteSelectedConversationItems
	    });
	});

});

function createCheckBox() {
    // Write your logic to create checkboxes here
}

function selectAll() {
    // Write your logic to select all checkboxes here
}

function deleteSelected() {
    // Write your logic to delete selected checkboxes here
}
