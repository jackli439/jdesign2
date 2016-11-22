import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded EventsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css']
})
export class EventsComponent {

	constructor(){
	}

	ngAfterViewInit(){
		var today = new Date();
		console.log(today);
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear()
		var div = document.getElementsByClassName("events-right");
		var events = document.getElementsByTagName("li");
		for (var i = 0; i < div.length; i++) {
			var date = div[i].textContent;
			var datesplit = date.split("/");
			if (+datesplit[1] == dd && +datesplit[0] == mm) {
				events[i].style.backgroundColor = "#add8e6";
			}
		}
	}
}
