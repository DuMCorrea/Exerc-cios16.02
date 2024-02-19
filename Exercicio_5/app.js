const inputRange = document.getElementById('frequency');

inputRange.addEventListener('input', function() {
    const frequency = parseInt(this.value);
    const hue = mapRange(frequency, 405, 790, 0, 360);
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
});

function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}