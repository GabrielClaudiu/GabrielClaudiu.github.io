document.getElementById("id_bussiness_version").innerHTML = "Business version: 2018.11.5.3";

window.addEventListener("deviceorientation", on_device_orientation);
//window.addEventListener("devicemotion", on_device_motion);

//--------------------------------------------------
function on_device_orientation(e)
{
	var svg = document.getElementById("id_svg");
	var circle = document.getElementById("id_circle");
	
	var R = 20;
	
	var svg_width = svg.getAttention("width");
	var svg_height = svg.getAttention("height");
	circle.setAttribute("cx", svg_width / 2 + e.gamma / 90 * (svg_width / 2 - R) + "px");
	circle.setAttribute("cy", svg_height / 2 + e.beta / 90 * (svg_height / 2 - R) + "px");
}
//--------------------------------------------------