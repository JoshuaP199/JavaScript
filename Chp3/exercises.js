function minimumNum(num1, num2){
    if(num1 < num2){
        return num1;
    } else {
        return num2;
    }
}

function isEven(n) {
    original = n;
    if(n < 0) {
        n *= -1;
    }
    if(n == 0) {
        document.write("<p>" + original + " even</p>");
    } else if(n == 1) {
        document.write("<p>" + original + " odd</p>");
    } else {
        isEven(n-2);
    }
}

function countBs(word) {
    for(let i = 0; i < word.length - 1; i++) {
        if(word[i] == "B") {
            count = countChar(word, "B");
        }
    }
    return count;
}

function countChar(word, letter) {
    count = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] == letter){
            count++;
        }
    }
    return count;
}

function pFormat(fun) {
    document.write("<p>" + fun + "</p>");
}

pFormat(countBs("Big Butt Bananas"));
pFormat(countChar("This tantrum is tracing", "a"));