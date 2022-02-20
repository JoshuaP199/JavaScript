function loopingTriangle(size) {
    row = 1;
    for(let i = 0; i < size; i++){
        col = "";
        for(let n = 0; n < row; n++) {
            col += "#";
        }
        row += 1;
        document.write("<p>" + col + "</p>");
    }
}

function FizzBuzz() {
    document.write("<h4>Rules:</h4>" + "<p>If divisable by 3, print Fizz<br />If divisable by 5, print Buzz<br />If divisable by both 3 and 5, print FizzBuzz</p><hr />");
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0){
            document.write("<p>" + i + " <b>FizzBuzz</b></p>");
        } else if(i % 3 == 0) {
            document.write("<p>" + i + " Fizz</p>");
        } else if(i % 5 == 0) {
            document.write("<p>" + i + " Buzz</p>");
        } else {
            document.write("<p>" + i + "</p>");
        }
    }
}

function chessBoard(l, w){
    marker = 0;
    for(let i = 0; i < l; i++) {
        r = "";
        for(let n = 0; n < w; n++) {
            if(marker == 0) {
                r += "_";
            } else if(marker == 1) {
                r += "#";
            }
            if(n == w - 1) {
                break;
            } else if(marker == 1){
                marker -= 1;
            } else if(marker == 0) {
                marker += 1;
            }
        }
        document.write("<p>" + r + "</p>");
    }
}

function resetButton(){
    document.write("<button id='reset'>Reset</button>");
    document.getElementById("reset").onclick = function() {selection()};
}

function selection() {
    document.body.innerHTML = '';
    let pick = prompt("Enter 1-3 for an exercise answer:");

    if(pick == 1) {
        document.write("<h3>Looping a Triangle Exercise</h3>");
        resetButton();
        loopingTriangle(prompt("How large do you want the triangle to be:"));
    } else if(pick == 2) {
        document.write("<h3>FizzBuzz Exercise</h3>");
        resetButton();
        FizzBuzz();
    } else if(pick == 3) {
        document.write("<h3>Chessboard Exercise</h3>");
        length = prompt("Enter a Length:");
        width = prompt("Enter a Width (works best with even #):");
        resetButton();
        chessBoard(length, width);
    } else {
        selection();
    }
}

selection();