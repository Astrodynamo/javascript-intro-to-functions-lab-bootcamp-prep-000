var uppercase;
var lowercase;

function shout(string) {
  return string.toUpperCase();
}

shout('hello');

function whisper(string) {
  return string.toLowerCase();
}

whisper('HELLO');

function logShout(string) {
  return console.log(string.toUpperCase);
}

logShout('hello');

function logWhisper(string) {
  return console.log(string.toLowerCase);
}

logWhisper('HELLO');