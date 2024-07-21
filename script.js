
document.getElementById('btn1').addEventListener('click', (e) => {
    e.preventDefault();

    let fullname = document.getElementById('fullname').value;
    let companyname = document.getElementById('companyname').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let terms = document.getElementById('check_1').checked;

    // Check if all fields are filled
    if (fullname && companyname && number && email && password && terms) {
        // All fields are filled, proceed to the next page
        // You can change the URL to the desired page
        window.location.href = 'regiNext.html';
    } else {
        // Show error message
     alert("fill required")

        console.log("error");

    }


});




function nextPage2() {
    window.location.href = 'regiNext.html';
}
