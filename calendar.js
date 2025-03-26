// Project - Calendar Application Events Manager
// Create a script that manages a list of events for a calendar application.
// Create an array of objects, each representing an event. Each event object should have the following properties:

// title (string)
// date (Date object)
// location (string)
// attendees (Set)
// Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days.

// Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value.

// Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.

// Create a function that adds a new attendee to an event. This function should take in the event title and the attendee's name as arguments. Use the .add() method of the Set to add the attendee to the event's attendees property.

// Create a function that converts the event array to a JSON string using the .stringify() method. Use the .toJSON() method to add a custom property "formattedDate" to each event object that displays the date in the format "MM/DD/YYYY".

// Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.

// Use the .forEach() method to iterate over the events array and console.log the title and date of each event.

// Bonus: Implement functionality to delete events from the array using the .splice() method.

// Bonus: Use the .reduce() method to find the event with the most attendees.

// example

let events = [
    {
        title: 'Birthday Party',
        date: new Date('2022-12-25'),
        location: 'New York',
        attendees: new Set(['Alice', 'Bob', 'Charlie']),
    },
    {
        title: 'Conference',
        date: new Date('2022-12-31'),
        location: 'San Francisco',
        attendees: new Set(['Alice', 'David', 'Eve']),
    },
    {
        title: 'Meeting',
        date: new Date('2023-01-10'),
        location: 'Los Angeles',
        attendees: new Set(['Frank', 'Grace', 'Helen']),
    },
];

let organizerMap = new WeakMap();
organizerMap.set(events[0], 'Alice');
organizerMap.set(events[1], 'David');
organizerMap.set(events[2], 'Frank');

let nextWeekEvents = events.filter(event => {
    let now = new Date();
    let nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
    return event.date <= nextWeek;
}
).map(({title, date, location}) => ({title, date, location}));

console.table(nextWeekEvents);

function addAttendee(title, attendee) {
    let event = events.find(event => event.title === title);
    if (event) {
        event.attendees.add(attendee);
    }
}

addAttendee('Birthday Party', 'David');
console.log(events[0]);

function toJSON(events) {
    return JSON.stringify(events.map(event => {
        let formattedDate = event.date.toLocaleDateString('en-US');
        return {...event, formattedDate};
    }));
}

console.log(toJSON(events));

let firstEvent = events[0];
console.log(Object.keys(firstEvent));
console.log(Object.values(firstEvent));
console.log(Object.entries(firstEvent));

events.forEach(({title, date}) => {
    console.log(`${title} - ${date}`);
}
);

// Bonus
events.splice(1, 1);
console.log(events);

let mostAttendees = events.reduce((maxEvent, event) => event.attendees.size > maxEvent.attendees.size ? event : maxEvent, events[0]);
console.log(mostAttendees);
// explain
// The script creates an array of event objects, each representing an event with properties such as title, date, location, and attendees. It uses the .filter() and .map() methods to display events happening in the next 7 days. It uses a WeakMap to store the event's organizer and destructuring assignment to extract properties from each event object. It adds a new attendee to an event using the .add() method of the Set. It converts the event array to a JSON string with a custom property "formattedDate" using the .stringify() and .toJSON() methods. It displays the properties and values of the first event object using Object.keys(), Object.values(), and Object.entries(). It iterates over the events array using the .forEach() method to log the title and date of each event. It also implements functionality to delete events using the .splice() method and finds the event with the most attendees using the .reduce()
//