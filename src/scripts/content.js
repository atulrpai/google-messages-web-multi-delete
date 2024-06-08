function addCheckboxesToConversationItems() {
    document.querySelectorAll('mws-conversation-list-item').forEach(item => {
        if (!item.querySelector('.conversation-checkbox')) {
	    const checkbox = document.createElement('input');
	    checkbox.type = 'checkbox';
	    checkbox.className = 'conversation-checkbox';
	    item.appendChild(checkbox);
        }
    });
}

function selectAllCheckboxes() {
    document.querySelectorAll('mws-conversation-list-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
    });
}

function confirmDelete() {
    const deleteButton = document.querySelector('.mdc-button.mat-mdc-button.primary-button.action-button.txt-button.mat-primary');
    if (deleteButton) {
        deleteButton.click();
    } else {
        console.error("Delete button not found!");
    }
}

function clickDelete() {
    const deleteMenuItem = document.querySelectorAll('button.mat-mdc-menu-item')[2];
    if (deleteMenuItem) {
        deleteMenuItem.click();
        setTimeout(confirmDelete, 100);
    } else {
        console.error("Delete menu item not found!");
    }
}

function deleteConversationItem(conversationItem) {
    if (conversationItem) {
        conversationItem.click();
        setTimeout(clickDelete, 100);
    } else {
        console.error("Conversation item not found!");
    }
}

var conversationItems, intervalId, index;

function deleteSelectedConversationItems() {
    conversationItems = Array.from(document.querySelectorAll('button.menu-button')).filter(conversationItem => {
        return conversationItem.parentElement.parentElement.parentElement.parentElement.children[1].checked === true;
    });

    if (conversationItems.length) {
        console.log('Script started');
        index = 0;
        intervalId = setInterval(deleteNextConversationItem, 250);
    } else {
        console.log('No conversation items selected for deletion.');
    }
}

function deleteNextConversationItem() {
    if (index < conversationItems.length) {
        deleteConversationItem(conversationItems[index++]);
    } else {
        clearInterval(intervalId);
        console.log('Script stopped');
    }
}

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
	switch(request.message) {
		case "addCheckboxesToConversationItems" :
		addCheckboxesToConversationItems();
		break;

		case "selectAllCheckboxes" :
		selectAllCheckboxes();
		break;

		case "deleteSelectedConversationItems" :
		deleteSelectedConversationItems();
		break;
	}
});
