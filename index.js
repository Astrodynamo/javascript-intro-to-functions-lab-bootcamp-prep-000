var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string.toLowerCase()
  console.log(string)
}
