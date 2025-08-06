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
                warning.innerHTML = "<b>SAY IT WITH YOUR CHEST.</b>"
            }
            else {
                warning.innerHTML = `<p><b>WRONG!!!</b> <u>${e.target.value}</u> is <b>NOT</b> the password.<p>`
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