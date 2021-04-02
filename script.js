function getParagraph1() {
    let inputs = [];
    for(let i = 1 ; i <=6 ; i++) {
          inputs.push(document.getElementById("div1_input_box" + i).value); 
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}
function getParagraph2() {
    let inputs = [];
    for(let i = 1 ; i <=6 ; i++) {
        // console.log(document.getElementById(`div1_input_box${i}`).innerText);
          inputs.push(document.getElementById("div2_input_box" + i).value); 
    }
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ");;
}