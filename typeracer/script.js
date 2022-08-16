/*
Usage:
    paste this file inside your console before the race starts
*/ 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    // wait until game starts
    while (true) {
        
        var timeLeft = document.getElementsByClassName("timeDisplay")[0].firstChild.textContent;
        if (timeLeft.length > 3) break;
        await sleep(100);
    }
    console.log("game started!");

    // get text 
    var text = "";
    var spans = document.querySelectorAll("span[unselectable=on]");
    for (var span of spans) {
        text += span.textContent;
    } 
    console.log(text);
    sleep(1000);
    var input = document.getElementsByClassName("txtInput")[0];
    console.log("writing..");
    for (var char of text) {
        input.value += char;
        await sleep(50);
        input.click();
    }

}

main();


