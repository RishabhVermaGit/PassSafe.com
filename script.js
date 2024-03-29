var mode = "dark"

const applyDarkMode = ()=>{
    mode = "light"
    document.getElementById("mode1").classList.toggle("d-inline-block")
    document.getElementById("mode1").classList.toggle("d-none")
    document.getElementById("mode2").classList.toggle("d-inline-block")
    document.getElementById("mode2").classList.toggle("d-none")
    document.getElementsByTagName("main")[0].classList.toggle("bg-light")
    document.getElementsByTagName("main")[0].classList.toggle("bg-dark")
    document.getElementsByTagName("main")[0].classList.toggle("text-dark")
    document.getElementsByTagName("main")[0].classList.toggle("text-light")
    let ele = Array.from(document.getElementsByClassName("deleteButton"))
    for(let element of ele){
        element.classList.toggle("btn-light")
        element.classList.toggle("btn-dark")
    }
    document.getElementById("submit").classList.toggle("btn-light")
    document.getElementById("submit").classList.toggle("btn-dark")
    document.getElementsByTagName("table")[0].classList.toggle("table-light")
    document.getElementsByTagName("table")[0].classList.toggle("table-dark")
    document.getElementsByTagName("table")[0].classList.toggle("border-dark")
    document.getElementsByTagName("table")[0].classList.toggle("border-light")
}

const applyLightMode = ()=>{
    mode = "dark"
    document.getElementById("mode1").classList.toggle("d-inline-block")
    document.getElementById("mode1").classList.toggle("d-none")
    document.getElementById("mode2").classList.toggle("d-inline-block")
    document.getElementById("mode2").classList.toggle("d-none")
    document.getElementsByTagName("main")[0].classList.toggle("bg-light")
    document.getElementsByTagName("main")[0].classList.toggle("bg-dark")
    document.getElementsByTagName("main")[0].classList.toggle("text-dark")
    document.getElementsByTagName("main")[0].classList.toggle("text-light")
    document.getElementById("submit").classList.toggle("btn-light")
    document.getElementById("submit").classList.toggle("btn-dark")
    let ele = Array.from(document.getElementsByClassName("deleteButton"))
    for(let element of ele){
        element.classList.toggle("btn-light")
        element.classList.toggle("btn-dark")
    }
    document.getElementsByTagName("table")[0].classList.toggle("table-light")
    document.getElementsByTagName("table")[0].classList.toggle("table-dark")
    document.getElementsByTagName("table")[0].classList.toggle("border-dark")
    document.getElementsByTagName("table")[0].classList.toggle("border-light")
}

const addRow = () => {
    let website = document.getElementById("exampleInputWebsite").value.toLowerCase()
    let username = document.getElementById("exampleInputUsername").value
    let password = document.getElementById("exampleInputPassword1").value
    if(website =="" || username =="" || password =="") return
    localStorage.setItem(website,JSON.stringify({"username":username,"password":password}))
    mainFunc()
}

const deleteRows = (deleteId)=>{
    localStorage.removeItem(deleteId)
    console.log("Element deleted")
    document.getElementById(deleteId).remove()
}

const copyText = (key,index)=>{
    let copyText = JSON.parse(localStorage.getItem(key))[index]
    navigator.clipboard.writeText(copyText);
    document.getElementsByClassName(key+"-"+index+"1")[0].classList.toggle("d-none")
    document.getElementsByClassName(key+"-"+index+"2")[0].classList.toggle("d-none")
    console.log("Copied")
}

function mainFunc(){
    document.getElementsByTagName("table")[0].innerHTML = `<tr class="px-0">
    <th class="text-center">Website</th>
    <th class="text-center">Username</th>
    <th class="text-center">Password</th>
    <th class="text-center">Delete</th>
    </tr>`
    for(let key of Object.keys(localStorage)){
        let website = key
        let {username,password} = JSON.parse(localStorage.getItem(key))
        temp1 = ""
        temp2 = ""
        for(let char of password){
            temp1+="*"
        }
        for(let char of username){
            temp2+="*"
        }
        document.getElementsByTagName("table")[0].innerHTML += `<tr class="rows fw-bold" id=${website}>
        <td class="text-center ">${website}</td>
        <td class="text-center">${temp2}<img src="images/clipboard-svgrepo-com.svg" alt="Logo" width="15" height="15" class="clipboard ${website}-username1" onclick="copyText('${website}','username')"><img src="images/check-good-yes-svgrepo-com.svg" alt="Logo" width="15" height="15" class="clipboard d-none ${website}-username2")"></td>
        <td class="text-center">${temp1}<img src="images/clipboard-svgrepo-com.svg" alt="Logo" width="15" height="15" class="clipboard ${website}-password1" onclick="copyText('${website}','password')"><img src="images/check-good-yes-svgrepo-com.svg" alt="Logo" width="15" height="15" class="clipboard d-none  ${website}-password2")"></td>
        <td class="text-center"><button type="button" class="btn btn-${mode} py-0 deleteButton"onclick="deleteRows('${website}')">Delete</button></td>
    </tr>`
    }
}

document.getElementById("mode1").addEventListener("click",applyDarkMode)
document.getElementById("mode2").addEventListener("click",applyLightMode)
document.getElementById("submit").addEventListener("click", addRow)
mainFunc()