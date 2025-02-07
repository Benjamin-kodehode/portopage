//Events

/*

Mouse Events:
click - Triggered when a pointing device button is clicked on an element.
dblclick - Triggered on double-click.
mousedown - Triggered when a button is pressed down.
mouseup - Triggered when a button is released.
mouseenter - Triggered when the pointer enters an element.
mouseleave - Triggered when the pointer leaves an element.
mousemove - Triggered when the pointer moves over an element.
mouseover - Triggered when the pointer hovers over an element.
mouseout - Triggered when it moves out of an element.

Keyboard Events:
keydown - Triggered when a key is pressed.
keypress - Triggered when a key is pressed down (deprecated).
keyup - Triggered when a key is released.

Focus Events:
blur - Triggered when an element loses focus.
focus - Triggered when an element gains focus.
focusin - Similar to focus, but bubbles.
focusout - Similar to blur, but bubbles.

Form Events:
change - Triggered when the value of an input, select, or textarea changes.
input - Triggered when the value of an input, select, or textarea is being input.
invalid - Triggered when a form element's value is invalid.
reset - Triggered when a form is reset.
submit - Triggered when a form is submitted.
search - Triggered when a user submits a search in an input element.

Clipboard Events:
copy - Triggered when the user initiates a copy action.
cut - Triggered when the user initiates a cut action.
paste - Triggered when the user initiates a paste action.

Media Events:
abort - Triggered when the loading of a media resource has been aborted.
canplay - Triggered when the browser can start playing media.
canplaythrough - Triggered when the browser estimates it can play through the media without buffering.
durationchange - Triggered when the duration of the media changes.
ended - Triggered when playback stops because the end of the media has been reached.
error - Triggered when a media resource fails to load.
loadeddata - Triggered when the first frame of the media is loaded.
loadedmetadata - Triggered when metadata for the media is loaded.
pause - Triggered when media playback is paused.
play - Triggered when media playback starts.
playing - Triggered when playback resumes after being paused.
progress - Triggered as the browser loads a resource.
ratechange - Triggered when the playback rate changes.
seeked - Triggered when a seek operation completes.
seeking - Triggered when a seek operation starts.
stalled - Triggered when the browser tries to fetch media data, but none is arriving.
suspend - Triggered when the browser intentionally does not fetch media data.
timeupdate - Triggered when the playback position changes.
volumechange - Triggered when the volume is changed.
waiting - Triggered when playback stops due to buffering.

Drag and Drop Events:
drag - Triggered when an element is being dragged.
dragend - Triggered when the drag operation ends.
dragenter - Triggered when a dragged element enters a drop target.
dragleave - Triggered when a dragged element leaves a drop target.
dragover - Triggered when a dragged element is over a drop target.
dragstart - Triggered when a drag operation starts.
drop - Triggered when a dragged element is dropped on a drop target.

Touch Events:
touchcancel - Triggered when a touch point is disrupted.
touchend - Triggered when a touch point is removed.
touchmove - Triggered when a touch point moves.
touchstart - Triggered when a touch point is placed on the surface.

CSS Events:
animationend - Triggered when a CSS animation finishes.
animationiteration - Triggered when a CSS animation completes one iteration.
animationstart - Triggered when a CSS animation starts.
transitionend - Triggered when a CSS transition finishes.

Document Events:
DOMContentLoaded - Triggered when the HTML document is completely loaded and parsed.
readystatechange - Triggered when the ready state of the document changes.

Window Events:
beforeunload - Triggered when the user is about to leave the page.
hashchange - Triggered when the URL hash changes.
load - Triggered when the page has loaded completely.
resize - Triggered when the window is resized.
scroll - Triggered when the window or an element is scrolled.
unload - Triggered when the page is unloaded.

*/
const incButton = document.querySelector("#Increment");
const counter = document.querySelector("#counter");
const hoverBox = document.querySelector("#hover");
const coordinates = document.querySelector("#coordinates");
hoverBox.style;

let count = 0;
counter.textContent = 0;

/*function incrementCount() {
  count++;
  counter.textContent = count;
}
  */

// addEventlistener tar i mot 2 parametere
// event type og callback funksjon
incButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
/*
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "red";
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "black";
});

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "red";
});
*/

let redToggle = false;

hoverBox.addEventListener("click", () => {
  redToggle = !redToggle;
  if (redToggle) {
    hoverBox.style.backgroundColor = "red";
  } else {
    hoverBox.style.backgroundColor = "black";
  }
});

document.body.addEventListener("click", (e) => {
  console.log(e);
  window.alert(`X:${e.x} Y:${e.y}`);
});
document.body.removeEventListener();

window.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (event.key === "a") console.log("Going left");
  if (event.key === "d") console.log("Going right");
  if (event.key === "w") console.log("Going forward");
  if (event.key === "s") console.log("Going backward");
});
