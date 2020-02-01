$(document).ready(function()
{

	var d;
		$("#myBtn").click(function()
		{
			d=$('input[name=b]:checked').val();
		});
	$("img").click(function()
	{
		var a=$("#myMain").val();
		$(".myBox").append("<div class='box' style='background:"+d+";'><table><tr><td><p>"+a+
			"</p></td><td id='a7'><i class='fa fa-trash' id='del'></i></td></tr></table></div>");
		//$(".box").css("background",d);
		$("i#del").click(function()
		{
			$(this).parent().parent().parent().parent().parent().remove();
		});
	});



});