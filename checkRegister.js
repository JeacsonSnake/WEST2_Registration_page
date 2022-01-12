function checkForm() {
    let t1 = checkUserName() && checkEmail();
    let t2 = checkPassword() && checkPasswordConfirm();
    return t1&&t2;
}

function checkUserName(){
    var username = document.getElementById("username").value;
    var reg_username = /^\w{6,12}$/;
    var s_username = document.getElementById("s-username");
    var f = reg_username.test(username);//检测用户名字符串是否匹配这个正则表达式
    if(f)
    {
        s_username.innerHTML = "<i class=\"far fa-check-circle\"></i>";
    }

    else
    {
        s_username.innerHTML = "<i class=\"far fa-times-circle\"></i>用户名必须是英文，且长度介于6~12字符之间！";
    }

    return f;
}

function checkEmail(){
    var email = document.getElementById("email").value;
    var reg_password = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var f = reg_password.test(email);
    var s_email = document.getElementById("s-email");
    if(f)
    {
        s_email.innerHTML = "<i class=\"far fa-check-circle\"></i>";
    }

    else
    {
        s_email.innerHTML = "<i class=\"far fa-times-circle\"></i>邮箱格式有误！";
    }

    return f;
}

function checkPassword(){
    var password = document.getElementById("password").value;
    var reg_password = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_])[\da-zA-Z~!@#$%^&*_]{8,}$/;
    var f = reg_password.test(password);
    var s_password = document.getElementById("s-password");
    if(f)
    {
        s_password.innerHTML = "<i class=\"far fa-check-circle\"></i>";
    }

    else
    {
        s_password.innerHTML = "<i class=\"far fa-times-circle\"></i>密码必须包含数字、英文字母、特殊符号且大于等于8位（特殊符号包括: ~!@#$%^&*_）";
    }

    return f;
}

function checkPasswordConfirm(){
    var password = document.getElementById("password").value;
    var pCheck = document.getElementById("passwordcheck").value;
    var f = (password == pCheck);
    var s_passwordcheck = document.getElementById("s-password");
    if(f)
    {
        s_passwordcheck.innerHTML = "<i class=\"far fa-check-circle\"></i>";
    }

    else
    {
        s_passwordcheck.innerHTML = "<i class=\"far fa-times-circle\"></i>两次密码输入不一致！";
    }

    return f;
}