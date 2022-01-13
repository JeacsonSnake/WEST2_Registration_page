window.onload = function(){
    document.getElementById("form").onsubmit = function() {
        return checkUserName() && checkEmail() && checkPassword() && checkPasswordConfirm();
    };
    document.getElementById("username").onblur = checkUserName;
    document.getElementById("password").onblur = checkPassword;
    document.getElementById("email").onblur = checkEmail;
    document.getElementById("passwordcheck").onblur = checkPasswordConfirm;
};

function checkUserName(){
    var username = document.getElementById("username").value;
    var reg_username = /^\w{6,12}[a-zA-Z0-9_]$/;
    var s_username = document.getElementById("s-username");
    var f = reg_username.test(username);//检测用户名字符串是否匹配这个正则表达式
    if (username == "")
    {
        s_username.style.color = "rgba(238, 171, 48, 0.829)";
        s_username.innerHTML = "<p><i class=\"far fa-question-circle\"></i>用户名不能为空！</p>";
    }

    else if(f)
    {
        s_username.innerHTML = "<i class=\"far fa-check-circle\"></i>";
        s_username.style.color = "rgba(85, 231, 98, 0.836)";
    }

    else
    {
        s_username.style.color = "rgba(236, 67, 67, 0.781)";
        s_username.innerHTML = "<p><i class=\"far fa-times-circle\"></i>用户名必须是英文或数字(可以有下划线)，且长度介于6~12字符之间！</p>";
    }

    return f;
}

function checkEmail(){
    var email = document.getElementById("email").value;
    var reg_password = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var f = reg_password.test(email);
    var s_email = document.getElementById("s-email");
    if (email == "")
    {
        s_email.style.color = "rgba(238, 171, 48, 0.829)";
        s_email.innerHTML = "<p><i class=\"far fa-question-circle\"></i>邮箱不能为空！</p>";
    }

    else if(f)
    {
        s_email.innerHTML = "<i class=\"far fa-check-circle\"></i>";
        s_email.style.color = "rgba(85, 231, 98, 0.836)";
    }

    else
    {
        s_email.style.color = "rgba(236, 67, 67, 0.781)";
        s_email.innerHTML = "<p><i class=\"far fa-times-circle\"></i>邮箱格式有误！</p>";
    }

    return f;
}

function checkPassword(){
    var password = document.getElementById("password").value;
    var reg_password = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_])[\da-zA-Z~!@#$%^&*_]{8,}$/;
    var f = reg_password.test(password);
    var s_password = document.getElementById("s-password");
    if (password == "")
    {
        s_password.style.color = "rgba(238, 171, 48, 0.829)";
        s_password.innerHTML = "<p><i class=\"far fa-question-circle\"></i>密码不能为空！</p>";
    }

    else if(f)
    {   
        s_password.innerHTML = "<i class=\"far fa-check-circle\"></i>";
        s_password.style.color = "rgba(85, 231, 98, 0.836)";
    }

    else
    {
        s_password.style.color = "rgba(236, 67, 67, 0.781)";
        s_password.innerHTML = "<p><i class=\"far fa-times-circle\"></i>密码必须包含数字、英文字母、特殊符号且大于等于8位（特殊符号包括: ~!@#$%^&*_）</p>";
    }

    return f;
}

function checkPasswordConfirm(){
    var password = document.getElementById("password").value;
    var pCheck = document.getElementById("passwordcheck").value;
    var f = (password == pCheck);
    var s_passwordcheck = document.getElementById("s-passwordcheck");
    if (pCheck == "")
    {
        s_passwordcheck.style.color = "rgba(238, 171, 48, 0.829)";
        s_passwordcheck.innerHTML = "<p><i class=\"far fa-question-circle\"></i>不能为空！</p>";
    }

    else if(f)
    {
        s_passwordcheck.style.color = "rgba(85, 231, 98, 0.836)";
        s_passwordcheck.innerHTML = "<i class=\"far fa-check-circle\"></i>";
    }

    else
    {
        s_passwordcheck.style.color = "rgba(236, 67, 67, 0.781)";
        s_passwordcheck.innerHTML = "<p><i class=\"far fa-times-circle\"></i>两次密码输入不一致！</p>";
    }

    return f;
}