/*window.onload = function () {
	alert("Welcome");
	console.log('Holi!');
};*/


/*$( document ).ready(function() {
	$("#div2").click(onClickElement);
	function onClickElement () {
		 alert("HOLI!!!") 
	};
});*/

$( document ).ready(function() {
	$("#div2").click(onClickElement);
	function onClickElement () {
		 $("#div1").css({
		 	"background-color":"pink",
		 	"font-size":"2rem",
		 });

	};
});