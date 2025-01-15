function confirm(question) {
    console.log(`To the question; ${question}`)
    return true;
}

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

const showOk = function() {
    console.log('They agree');
}

function showCancel() {
    console.log("They don't agree")
}

ask(`Do you agree?`, showOk, showCancel);