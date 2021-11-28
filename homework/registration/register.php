<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            margin: 10px 0;
        }
    </style>
</head>
<body>
<!--<form id="registration" action="register.php" method="POST">-->
<div>
    <label for="user_name">
        <input type="text" name="username" placeholder="username" id="user_name">
    </label>
    <div id="error_username" class="error"></div>
</div>
<div>
    <label for="email">
        <input type="email" name="email" placeholder="email" id="email">
    </label>
    <div id="error_email" class="error"></div>
</div>
<div>
    <label for="age">
        <input type="number" name="age" placeholder="age" id="age">
    </label>
</div>
<div>
    <label for="password">
        <input type="password" name="password" placeholder="password" id="password">
    </label>
    <div id="error_password" class="error"></div>
</div>
<div>
    <label for="confirm_password">
        <input type="password" name="password2" placeholder="confirm pasword" id="password_confirm">
    </label>
    <div id="error_password2" class="error"></div>
</div>
<div>
    <label for="register_agreement">
        <input type="checkbox" name="agree" id="register_agreement">
        I agree terms and conditions
    </label>
    <div id="error_agree" class="error"></div>
</div>
<div>
    <button id="register_submit" type="submit">resgistration</button>
</div>
<!--</form>-->

<script>

    const registerSumbit = document.getElementById('register_submit')

    registerSumbit.addEventListener('click', function e() {

        const userName = document.getElementById('user_name').value
        const email = document.getElementById('email').value
        const age = document.getElementById('age').value
        const password = document.getElementById('password').value
        const passwordConfirm = document.getElementById('password_confirm').value
        const registerAgreement = document.getElementById('register_agreement').value
        let errors = {}

        if (userName.length < 3) {
            errors.userName = 'Name should be minimum 3 letters'
        }

        if (age < 15) {
            errors.age = 'Your age should be at least 15'
        }

        if (password !== passwordConfirm) {
            errors.password = 'Passwords doesn\'t match'
        } else if (password.length < 8) {
            errors.password = 'Passwords should be at least 8 symbol'
        }

        if (registerAgreement !== 'on') {
            errors.agreement = 'You need to agree terms'
        }

        localStorage.setItem('userName', userName)
        localStorage.setItem('email', email)
        localStorage.setItem('age', age)
        localStorage.setItem('password', password)
        localStorage.setItem('passwordConfirm', passwordConfirm)

        console.log(errors)
    })
</script>
</body>
</html>