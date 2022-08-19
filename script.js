/* Frist Way to generate random number */
function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinStr = pin + ''
    if (pinStr.length == 4) {
        return pin
    } else {
        return getPin()
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const generateFormControl = document.getElementById('generate-form-control')
    generateFormControl.value = getPin()
})




// /* Second Way to generate random number */
// document.getElementById('generate-btn').addEventListener('click', function () {
//     const generate = Math.round(Math.random() * 10000)
//     let pin;
//     if (generate / 1000 > 1) {
//         pin = generate
//     } else if (generate / 100 > 1) {
//         pin = generate * 10
//     } else {
//         pin = generate * 100
//     }

//     const generateFormControl = document.getElementById('generate-form-control')
//     generateFormControl.value = pin
// })





/* Calculate = Verify your pin section */
document.getElementById('calculate').addEventListener('click', function (event) {
    const value = event.target.innerText                                        // See This Code
    const submitFormControl = document.getElementById('submit-form-control')
    if (isNaN(value)) {
        if (value == 'C') {
            submitFormControl.value = ''
        } else if (value == '<') {
            submitFormControl.value = submitFormControl.value.slice(0, -1)
        }
    } else {
        submitFormControl.value += value
    }
})

/* Submit button click expression */
let submitBtnClickCount = 3;
document.getElementById('submit-btn').addEventListener('click', function () {
    const generateFormControl = Number(document.getElementById('generate-form-control').value)
    const submitFormControl = Number(document.getElementById('submit-form-control').value)
    const notifyYes = document.getElementById('notify-yes')
    const notifyNot = document.getElementById('notify-not')

    submitBtnClickCount--
    const tryLeft = document.getElementById('try-left')
    const tryLeftNumber = document.getElementById('try-left-number')

    if (submitBtnClickCount < 0) {
        return
    }
    if (generateFormControl == submitFormControl) {
        notifyYes.style.display = 'block'
        notifyNot.style.display = 'none'
        tryLeft.style.display = 'none'
        document.getElementById('generate-form-control').value = ''
        document.getElementById('submit-form-control').value = ''
    } else {
        notifyNot.style.display = 'block'
        notifyYes.style.display = 'none'
        tryLeft.style.display = 'block'
        tryLeftNumber.innerText = submitBtnClickCount
    }
})