document.getElementById('btn1').addEventListener('click',(e) => {
    prevPage();
})

function prevPage(){
    window.location.href = 'regi.html';
}





document.getElementById('btn2').addEventListener('click', (e) => {
    e.preventDefault();

    let address = document.getElementById('address').value;
    let google_address = document.getElementById('google_address').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let zipcode = document.getElementById('zipcode').value;

    // Check if all fields are filled
    if (address && google_address && country && state && city && zipcode) {
        // All fields are filled, proceed to the next page
        // You can change the URL to the desired page
        window.location.href = 'third.html';
    } else {
        // Show error message
     alert("fill required")

        console.log("error");

    }


});




function nextPage2() {
    window.location.href = 'third.html';
}


