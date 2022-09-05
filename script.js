const colors = [
    "rgb(168, 39, 254)",
    "rgb(154, 3, 254)",
    "rgb(150, 105, 254)",
    "rgb(140, 140, 255)",
    "rgb(187, 187, 255)",
    "rgb(143, 254, 221)",
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

function createWakeUpTimeElement(time, cycle) {
      let elm = document.createElement("div");
      elm.innerText = time;
      elm.style.color = colors[cycle];
      return elm;
}

function onClickHelper() {
    let hours = document.getElementById("hours");
    hours.innerHTML = ""

    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("ampm").value;

    hh = ampm === "PM" ? hh + Number.parseInt(12) : hh;
    
    let now = new Date();

    // if we add an offset (lets say it takes 14 minutes to fall asleep)
    now.setHours(hh);
    now.setMinutes(mm);

    for (let i = 1; i <= 6; i++) {
        now.setMinutes(now.getMinutes() + 90);
        const elm = createWakeUpTimeElement(
            now.toLocaleDateString(
                "en-us",
                {timeStyle: "short"}
            ),
        )
        hours.appendChild(elm);
    }
}
