function darkMode() {
    document.body.classList.toggle("darkmode")
}


const cntFrm = document.fanSubscription
const errs = document.querySelector("#errs")

cntFrm.elements.submit.addEventListener("click", contactValidation)

function contactValidation(event) {
    let errors = []
    for(let i=0; i<cntFrm.elements.length; i++) {
        let field = cntFrm.elements[i]

        if(field.required && field.value == "") {
            if(field.labels) {
                errors.push(`Please enter a value for your ${field.labels[0].innerHTML}`)
            }
            else {
                errors.push("You are missing some information.")
            }
        }

        if(field.type == "email" && !field.value.match(/^\S+@\S+\.\S+$/)) {
            errors.push("Please enter a valid email address")
        }
    }

    if(errors.length > 0) {
        errs.innerHTML = errors.join("<br>")
        errs.classList.remove("hidden")
        event.preventDefault()
    }
}

const cntFrm2 = document.siteFeedback
const errss = document.querySelector("#errss")

cntFrm2.elements.submit.addEventListener("click", contactValidation2)

function contactValidation2(event) {
    var max_chars = 200;
    let errors = []
    for(let i=0; i<cntFrm2.elements.length; i++) {
        let field = cntFrm2.elements[i]

        if(field.required && field.value == "") {
          
                errors.push("You must enter information into the form.")
            }
        

       if(field.value.length > max_chars) {

            errors.push("The maximum amount of characters is 200.")

        }
    
    }
       

    if(errors.length > 0) {
        errss.innerHTML = errors.join("<br>")
        errss.classList.remove("hidden")
        event.preventDefault()
    }

}