const form = document.querySelector('#user-input-field')



let guessList = []


form.addEventListener("submit", function (event) {
    event.preventDefault()
    const taskName = document.getElementById('user-input').value.trim()
    document.getElementById('user-input').value = '';

    if (!taskName) {
        alert("enter a valid task name")
        return
    }
    console.log(taskName)
    console.log("Form submitted");
});