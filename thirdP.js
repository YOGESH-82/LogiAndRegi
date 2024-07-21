document.getElementById('btn1').addEventListener('click',(e) => {
    prevPage();
})

function prevPage(){
    window.location.href = 'regiNext.html';
}document.getElementById('btn2').addEventListener('click', (e) => {
    e.preventDefault();

    let teamsize = document.getElementById('teamsize').value;

    // Check if all fields are filled
    if (teamsize) {
        // All fields are filled, proceed to the next page
        // You can change the URL to the desired page
        window.location.href = 'thank.html';
    } else {
        // Show error message
     alert("fill required")

        console.log("error");

    }


});