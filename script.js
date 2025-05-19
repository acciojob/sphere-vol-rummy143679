function volume_sphere() {
    //Write your code here
	const rie = document.getElementById('radius');
	const vie = document.getElementById('volume');

	if(parseInt(rie.value) > 0){
		const result = (4/3)* Math.PI*Math.pow(rie.value, 3);
		vie.value = result.toFixed(4);
	}else{
		vie.value = parseInt(rie.value);
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
