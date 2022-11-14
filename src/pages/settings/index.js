const changeData = document.querySelector('.change-data');
const personalData = document.querySelector('.user');
const profileData = document.querySelector('.data');
const passwordData = document.querySelector('.password');
const personalNav = document.querySelector('.profile__nav');
const personalSave = personalData.querySelector('.profile__save');
const changePassword = document.querySelector('.change-password');
const passSave = document.querySelector('.password__save');

const isTabs = profileData && passwordData;
const isTabsBtn = personalData && personalNav && personalSave;

changeData.addEventListener('click', () => {
    if (isTabsBtn) {
        personalData.classList.remove('disabled');
        personalData.classList.add('animated');
        personalNav.style.display = 'none';
        personalSave.style.display = 'flex';
    }
})

personalSave.addEventListener('click', (event) => {
    event.preventDefault();
    if (isTabsBtn) {
        personalData.classList.add('disabled');
        personalData.classList.remove('animated');
        personalNav.style.display = 'block';
        personalSave.style.display = 'none';
    }
})


changePassword.addEventListener('click', (event) => {
    event.preventDefault();
    if (isTabs) {
        profileData.classList.add('hidden')
        passwordData.classList.remove('hidden')
    }
})

passSave.addEventListener('click', (event) => {
    event.preventDefault();
    if (isTabs) {
        profileData.classList.remove('hidden')
        passwordData.classList.add('hidden')
    }
})