var fs = require('fs');

exports.AddLine = function(filepath,line){
    fs.appendFile(filepath, line, function (err) {
        console.log("Fak. Schreiben von Datei schlug fehl!");
});
}
exports.ReadFile = function(filepath, socket){
 return fs.readFile(filepath, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filepath);
    console.log(data)
    var lines = data.split('|');
    for(var i = 0;i<lines.length-1;i++) {
		var elem = lines[i].split(",");
		socket.emit('chat', new Nachricht(Date.parse(elem[0]), elem[1] || 'Anonym', elem[2]));
	}
    });
}

function Nachricht(zeit, name,text){
	this.zeit = zeit;
	this.name = name;
	this.text = text;
}