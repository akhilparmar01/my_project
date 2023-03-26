const canvas = document.getElementById('canvas');
const eyes = document.getElementById('eyes');
const mouth = document.getElementById('mouth');
const color = document.getElementById('color');

function createEmoji() {
	canvas.textContent = eyes.value + mouth.value;
	canvas.style.color = color.value;
}

eyes.addEventListener('change', createEmoji);
mouth.addEventListener('change', createEmoji);
color.addEventListener('input', createEmoji);
