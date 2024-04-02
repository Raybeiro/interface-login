let icon = document.getElementById("icon");
let senha = document.getElementById("senha");

icon.onclick = function () {
    if (senha.type == "password") {
        senha.type = "text";
        icon.setAttribute("name", "eye-off-outline");
    } else {
        senha.type = "password";
        icon.setAttribute("name", "eye-outline");
    }

}