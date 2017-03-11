var events = [
  {'Date': new Date(2017, 7, 4), 'Title': 'Closed. Independence Day'},
  {'Date': new Date(2017, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2017, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {};
var element = document.getElementById('calendar');
calendar(element, events, settings);
