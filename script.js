const colors = [
    "white", "red",
    "white", "red",
    "white", "red"
]

function handleOnClick() {
    let output = document.querySelector(".output");
    if (output.style.display == "none") {
        output.style.display = "block";
        onClickHelper();
    } else {
        output.style.display = "none";
    }
}

function onClickHelper() {
    let hours = document.getElementById("hours");
    hours.innerHTML = ""
    let now = new Date();


    // if we add an offset (lets say it takes 14 minutes to fall asleep)
    now.setMinutes(now.getMinutes() + 14);

    for (let i = 0; i < 6; i++) {
        now.setMinutes(now.getMinutes() + 90);
        let elm = document.createElement("div");
        elm.innerText = now.toLocaleTimeString(
            "en-us",
            { timeStyle: "short" }
        )
        elm.style.color = colors[i]
        hours.appendChild(elm);
    }
}
