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

	$("#list").click(onClickElement);
	$("#link").click(onLinkClick);
	$("#div1").click(onLinkClick);

	var add = $("#add");
	var del = $("#del");

	add.click(onAddClick);

	del.click(onDelClick);

	function onAddClick() {
		$("#div1").removeClass("ele2");
		 $("#div1").addClass("ele1");
	}

	function onDelClick() {
		 $("#div1").removeClass("ele1");
		 $("#div1").addClass("ele2");
	}

	function onClickElement () {
		/* $("#div1").css({
		 	"background-color":"pink",
		 	"font-size":"2rem",
		 });*/


		 /* $ (this).css({
		 	"background-color":"red",
		 	"font-size":"3rem",
		 });*/

		$ ("#list").css({
		 	"background-color":"blue",
		 	"font-size":"3rem",
		 });

	};

	function onLinkClick() {
		$("[href='#']").attr("href","https://google.com");
	}
});