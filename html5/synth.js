document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.12.10.0";
document.getElementById("id_get_voices").addEventListener("click", get_voices);

var synth = window.speechSynthesis;

function get_voices()
{
	var voices = synth.getVoices();
	var voices_list = document.getElementById("id_voices_list");
	for (var i = 0; i < voices.lenght; i++)
		voices_list.innerHTML += voices[i].lang + " " + voices[i].name + "<br>";
}