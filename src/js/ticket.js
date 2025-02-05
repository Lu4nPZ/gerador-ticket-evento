document.addEventListener("DOMContentLoaded", function() {
    const fullName = localStorage.getItem('fullName') || 'Guest';
    const email = localStorage.getItem('email') || 'No email provided';
    const githubUser = localStorage.getItem('githubUser') || 'N/A';
    const avatarImg = localStorage.getItem('avatarImg') || './src/images/logo-mark.svg';

    document.querySelectorAll('#user-name').forEach(el => el.textContent = fullName);

    document.getElementById('user-email').textContent = email;
    
    if (githubUser !== 'N/A') {
        document.getElementById('user-github').innerHTML = `
            <img src="./src/images/icon-github.svg" alt="GitHub Icon">
            @${githubUser}
        `;
    }

    document.querySelector('.img-avatar').src = avatarImg;
});