/**
 * trying to understand events
 * first of all I assume this will be only for js events, computer events or processes are unrelated
 * now when running js, everything is pretty much an event, when a connection is made or a file is opened or a server created...etc
 * in a simpler way, an event is an action that is executed on certain conditions or other actions
 * a live example would something I'd everyone is familiar with, whenever we build that simple website in university courses or when taking an
 * online course, we always do something like adding a button and coding some functionality to be called whenever that button is clicked.
 * or just when simply clicking somewhere on the screen, dragging or pressing a button, all those things are basically events that can be captured 
 * by a certain eventHandler, this event handler will decide later which action to take depending on the type of the event.
 */

// example:
// var fs= require('fs');
// var readStream= fs.createReadStream('./datetime.js');
// readStream.on('open', function(){
//     console.log('FILE OPENED!')
// });

// not sure what's up with this, the example said this is supposed to fire an event whenever the file is opened, but it's firing no matter 
// what, so idk..

// the events module is what we use manage events in js, allowing us to create, fire and listen to our events

var events= require('events');
var eventEmitter= new events.EventEmitter();

// the eventEmitter object allows to assign event handlers to our own events 
// we can imagine as the big circle, the core element, coming out of it are the event handlers that we create, these latters are assigned to 
// listen to certain events, once captured, they fire a certain action, not sure if the core would still be involved at this point, it might 
// with some verification processes but I'd say it's mainly responsible for creating and setting up the event handlers, which will take on 
// from there.
// okay I got it somewhat wrong, forget about everything written in the paragraph right above, well maybe not everything, idk, but anyway the
// part that I got incorrect is the role of the eventEmitter in this entire thingy, I thought that it's only purpose was to setup the eventhandlers 
// and let them do their thing, just listening and firing whenever an event is on, which is still somewhat correct, it's just that the 
// eventEmitter is still there its thing, and it is the one responsible for firing 
// okay I got another thing wrong actually, fml, in the context of javascript an event could be two things (or more?), let's take clickign 
// a HTML button for example, in this case we at least two essential events, the 'presssing button' event and the 'functionality that gets executed'
// event, in js, an 'EVENT' is apparently the one that's executed after the first main event.
// so now when creating an event on the eventEmitter, we create an event that can be executed upon certain actions.
// an event could be simply a function that gets executed after a certain action is performed.
// this function is then assigned to an event handler through the eventEmitter, and this latter is the one responsible for calling the function
// i.e. executing the event.
// okay this sounds better 

var screamEvent= function(){
    console.log('THERE IS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER!');
}

eventEmitter.on('scream', screamEvent);

eventEmitter.emit('scream')