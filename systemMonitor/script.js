async function updateFormatApi() {
    try{
        const response = await fetch('http://127.0.0.1:5000/api/data');
        const data = await response.json();

        const val = parseInt (data.value);

        const displayElement = document.getElementById('display');
        const barElement = document.getElementById('bar');

        
        displayElement.innerText = val + '%';
        barElement.style.width = val + '%';

        
        if (val >= 80) {
            
            displayElement.style.color = "#ff4444";
            displayElement.style.textShadow = "0 0 20px rgba(255, 68, 68, 0.6)";
            barElement.style.backgroundColor = "#ff4444";
            barElement.style.boxShadow = "0 0 15px #ff4444";
        } else {
            
            displayElement.style.color = "#22d3ee";
            displayElement.style.textShadow = "0 0 20px rgba(34, 211, 238, 0.4)";
            barElement.style.backgroundColor = "#22d3ee";
            barElement.style.boxShadow = "0 0 10px #22d3ee";
        }
    } catch (err) {
        console.error("Python server is not responding.")
    }
}

updateFormatApi();
setInterval(updateFormatApi, 2000)