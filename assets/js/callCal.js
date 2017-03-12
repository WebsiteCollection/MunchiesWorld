var events = [
	{'Date': new Date(2017, 0, 1), 'Title': 'Closed. New Years Day'},
	{'Date': new Date(2017, 0, 2), 'Title': 'Closed. New Years Day Off'},
	{'Date': new Date(2017, 0, 16), 'Title': 'Closed. Martin Luther King Day'},
	{'Date': new Date(2017, 4, 29), 'Title': 'Closed. Memorial Day'},
	{'Date': new Date(2017, 6, 4), 'Title': 'Closed. Independence Day'},
	{'Date': new Date(2017, 8, 4), 'Title': 'Closed. Labor Day'},
	{'Date': new Date(2017, 10, 23), 'Title': 'Closed. Thanksgiving Break'},
  	{'Date': new Date(2017, 10, 24), 'Title': 'Closed. Thanksgiving Break'},
];
var settings = {};
var element = document.getElementById('calendar');
calendar(element, events, settings);
