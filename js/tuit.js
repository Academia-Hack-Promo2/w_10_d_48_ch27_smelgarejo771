document.addEventListener("DOMContentLoaded", function(){ 
	main()
});	

var tuits = new Array ();

function main(){
	var newDiv = document.createElement("div");
	document.getElementsByTagName("div")[0].innerHTML = ('<div class="areaText" ><textarea name="mensaje"></textarea></div><br><div></div>');
	var currentDiv = document.getElementById('conten')
	document.body.insertBefore(newDiv, currentDiv)

	document.getElementsByTagName("div")[2].innerHTML = ('<input type="button" class="btn btn-primary" id="tuit" onclick="newTuit()" value="Hacer twit">')

}

function newTuit () {
	aux = document.getElementsByClassName('areaText')[0]
	document.getElementsByClassName('areaText')[0].innerHTML = '<div class="areaText" ><textarea name="mensaje"></textarea></div><br><div></div>'
	tuits.push(aux)
	document.getElementsByTagName("div")[3].innerHTML = aux
	console.log("aquii")
}
