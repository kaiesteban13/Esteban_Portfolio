const message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const btn = document.getElementById("dashBtn")
const body = document.getElementById("body")
const dm = document.getElementById("dm")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedules = document.getElementById("schedules")

function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account.........")
        }, 2000)
    })
}

Button.addEventListener("click", function(){

    Button.style.backgroundColor = "royalblue"
    btn.style.backgroundColor = "royalblue"

    message.style.color = "red"
    profile.style.color = "purple"
    grades.style.color = "purple"
    schedules.style.color = "purple"

    message.innerHTML = "Loading..........."

    showMessage()

    .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Profile.........")
            }, 3000)
        })

        .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Welcome!")
                }, 3000)
            })
        })

        .then(function(result){
            message.innerHTML = result
        })
    })
})
btn.addEventListener("click", function(){

    message.style.color = "white"
    profile.style.color = "white"
    grades.style.color = "black"
    schedules.style.color = "black"

    setTimeout(function(){
        Button.style.backgroundColor = "lightgreen"
        btn.style.backgroundColor = "salmon"
    }, 1000)

    message.innerHTML = "Loading Dashboard..."

    profile.innerHTML = "Profile: Waiting..."
    grades.innerHTML = "Grades: Waiting..."
    schedules.innerHTML = "Schedules: Waiting..."

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){

            profile.innerHTML = "Profile: Loaded"

            resolve()
        },3000)
    })

    const gradePromise = new Promise(function(resolve){

        setTimeout(function(){

            grades.innerHTML = "Grades: Loaded"

            resolve()
        },3000)
    })

    const schedulePromise = new Promise(function(resolve){

        setTimeout(function(){

            schedules.innerHTML = "Schedule: Loaded"

            resolve()
        },3000)
    })

    Promise.all([profilePromise, gradePromise, schedulePromise])

    .then(function(){
        message.innerHTML = "Dashboard Ready!"
    })
})