var intervalId;
var menu;

function confirmDelete() {
	document.querySelector('.mdc-button.mat-mdc-button.primary-button.action-button.txt-button.mat-primary').click();
}

function clickDelete() {
	document.querySelectorAll('button.mat-mdc-menu-item')[2].click();
	setTimeout(confirmDelete, 100);
}

function deleteSMS() {
	menu = document.querySelectorAll('button.menu-button');
	if(menu.length) {
		menu[0].click();
		setTimeout(clickDelete, 100);
	}
	else {
		clearInterval(intervalId);
		console.log('script stopped');
	}
}

function startScript() {
	console.log('script started');
	intervalId = setInterval(deleteSMS, 2000);
}