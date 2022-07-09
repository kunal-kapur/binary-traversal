let vals = document.querySelectorAll(".node-area");


for (let i = 0; i < vals.length; i++) {

    let node = vals[i].querySelector(":scope > .node");
    console.log(node);
    console.log(vals[i]);
    node.style.backgroundColor = "purple";

    const line = document.createElement("div");

    line.classList.add("line");

    if (vals[i].classList.contains("left")) {
        line.classList.add("left");
    }
    else if (vals[i].classList.contains("right")) {
        line.classList.add("right");
    }
    vals[i].insertBefore(line, vals[i].firstChild);



}
