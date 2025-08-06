const input = document.getElementById("input-box");
input.addEventListener("input", checkAnswer);

const warning = document.getElementById("warning");

function checkAnswer(e) {
    console.log(e.target.value)
    if (e.target.value.length >= 5) {
        const temp = e.target.value.split('');
        temp.splice(5);
        e.target.value = temp.join('');

        if (e.target.value != "FREAK") {
            if (e.target.value.toLowerCase() == "freak") {
                warning.innerText = "SAY IT WITH YOUR CHEST"
            }
            else {
                warning.innerText = `WRONG!!! ${e.target.value} is NOT the password.`
            }
        }
        else {
            window.location.href = "correct.html"
        }
    }
}

function toGift() {
    window.location.href = "";
}