const email = document.querySelector(".email")
const password = document.querySelector(".password")
const error = document.querySelector(".error")
const registr = document.querySelector(".registr")
const name = document.querySelector(".name")

window.addEventListener("load", () => {
    if(!localStorage.getItem("users")){
        localStorage.setItem("users", JSON.stringify([]))
    }
})

const users = JSON.parse(localStorage.getItem("users"))

registr.addEventListener("click", (e) => {
    e.preventDefault();
    const isUser = !!users.find(item => item.email === email.value)
    if(name.value !== "" && email.value !== "" && password.value !== "")
    {
        if(isUser){
            error.innerHTML = "Данный пользователь уже существует!"
        }else{
            const allUsers = JSON.parse(localStorage.getItem("users"))
            localStorage.setItem("users", JSON.stringify(
                [
                    ...allUsers,
                    {
                        name:name.value,
                        email:email.value,
                        password:password.value
                    }
                ]
            ))
            window.open("../auth.html", "_self")
        }
        email.value = ""
        name.value = ""
        password.value = ""
    }else{
        error.innerHTML = "Все поля должны быть заполнены!"
    }
})

window.addEventListener("load", () =>{
    if(localStorage.getItem("access_token") === "true"){
        window.open("../index.html", "_self")
    }
})