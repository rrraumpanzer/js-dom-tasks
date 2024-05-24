// BEGIN
body = document.body.innerHTML;
const lines = body.split("\n");
let newBody = "";
console.log("Hello?")
for (var i = 0; i<length(lines); i++) {
    newBody += "<p>" + lines[i].trim() + "</p>\n";
}
document.body.innerHTML = newBody;

// http://127.0.0.1:8080/public/3-index.html
// END