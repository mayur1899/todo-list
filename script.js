let add_button = document.getElementById("btn");
let work_con = document.getElementById("work-con");
let time_input = document.getElementById("time-in");
let work_input = document.getElementById("work-in");

add_button.addEventListener("click", ()=>{
    let con = document.createElement("div");
    con.style.width = "230x";
    con.style.height = "120px";
    con.style.backgroundColor = "#e0e0e0";
    con.style.borderRadius = "8px";
    con.style.margin = "15px 10px";
    con.style.display =  "flex";
    con.style.alignItems = "center";
    con.style.color = "white";
    con.style.flexDirection = "column";
    con.style.padding = "10px";
    con.style.overflowX = "hidden";
    con.style.overflowY = "auto";

    let head = document.createElement("h4");
    head.style.fontFamily =  "'Poppins', sans-serif";
    head.style.textShadow = "2px 2px 4px #0000009c";
    head.style.fontSize = "25px";
    head.innerHTML = time_input.value;

    let para = document.createElement("p");
    para.style.fontFamily =  "'Poppins', sans-serif";
    para.style.fontSize = "13px";
    para.style.fontWeight = "bold";
    para.style.color = "rgb(0, 225, 255)";
    para.style.textAlign = "center";
    para.style.textShadow = "2px 2px 2px #000000";
    para.innerHTML = work_input.value;

    con.appendChild(head);
    con.appendChild(para);
    work_con.append(con);

    time_input.value = "";
    work_input.value = "";
});