const username = "anton186"; 
const email = "anton186@gmail.com"; 
const nickname = "student"; 
const correctPassword = "student186"; 
 
const typelogin = prompt("Введіть тип авторизації: username or email"); 
if (typelogin === "username") { 
    const inputLogin = prompt("Введіть ваш логін: "); 
const inputPassword = prompt("Введіть ваш пароль: "); 
    if (inputLogin === "anton186") { 
        const inputPassword = prompt("Введіть ваш пароль: "); 
          { 
            if (inputPassword === "student186") { 
                alert ("Ваш логін:anton186 Ваш пароль:anton2001" ) 
            } else { 
                alert ("Неправильний пароль") 
            } 
        } 
        
    } else { 
        alert ("Неправильний логін") 
    } 
}