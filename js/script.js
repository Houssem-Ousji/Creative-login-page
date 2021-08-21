var user_name = document.getElementById('username'),
    password = document.getElementById('password');
user_name.onfocus = function() {
    this.placeholder = '';
    this.parentNode.parentNode.style.transition = '0.3s';
    this.parentNode.parentNode.style.borderBottomColor = '#7e4f3f';
    this.parentNode.parentNode.firstElementChild.style.transition = '0.3s';
    this.parentNode.parentNode.firstElementChild.style.color = '#7e4f3f';
};
user_name.onblur = function() {
    this.placeholder = 'username';
    this.parentNode.parentNode.style.transition = '0.3s';
    this.parentNode.parentNode.style.borderBottomColor = '#9999996b';
    this.parentNode.parentNode.firstElementChild.style.transition = '0.3s';
    this.parentNode.parentNode.firstElementChild.style.color = '#999';
};
password.onfocus = function() {
    this.placeholder = '';
    this.parentNode.parentNode.style.transition = '0.3s';
    this.parentNode.parentNode.style.borderBottomColor = '#7e4f3f';
    this.parentNode.parentNode.firstElementChild.style.transition = '0.3s';
    this.parentNode.parentNode.firstElementChild.style.color = '#7e4f3f';
};
password.onblur = function() {
    this.placeholder = 'password';
    this.parentNode.parentNode.style.transition = '0.3s';
    this.parentNode.parentNode.style.borderBottomColor = '#9999996b';
    this.parentNode.parentNode.firstElementChild.style.transition = '0.3s';
    this.parentNode.parentNode.firstElementChild.style.color = '#999';
};
var show_and_hidden_button = document.getElementById("show_hidden");
show_and_hidden_button.onclick = function() {
    if (password.type === 'password') {
        password.type = 'text';
        show_and_hidden_button.style.opacity = '1';
    } else {
        password.type = 'password';
        show_and_hidden_button.style.opacity = '0.6';
    }
};