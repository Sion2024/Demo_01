document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile menu
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');

  if (menu && menuLinks) {
    menu.addEventListener('click', function() {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    });
  }

  // Home link
  const homeLink = document.querySelector('a[href="home.html"]');
  const logoHome = document.querySelector('a[href="home.html"]');

  if (homeLink) {
    homeLink.addEventListener('click', () => { 
    });
  }

  if (logoHome) {
    logoHome.addEventListener('click', () => {
    });
  }

  // Tech link
  const techLink = document.querySelector('#navbar__logo');
  if (techLink) {
    techLink.addEventListener('click', () => {  
    });
  }

  // Sign Up button
  const signUpBtn = document.querySelector('a[href="signup.html"]');
  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
    });
  }

  // Main "Get Started" button
  const getStartedMain = document.querySelectorAll('.main__btn a');
  getStartedMain.forEach((btn, i) => {
    btn.addEventListener('click', () => {
    });
  });

  // Service "Get Started" buttons
  const getStartedServices = document.querySelectorAll('.services__card button');
  getStartedServices.forEach((btn, i) => {
    btn.addEventListener('click', () => {
    });
  });

  // Logo link override
  let techWorldLogo = document.querySelector('#navbar__logo');
  if (techWorldLogo) {
    techWorldLogo.addEventListener('click', (e) => {
      window.location.href = 'home.html';
    });
  }
});

//Media Links
document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://www.youtube.com',
    linkedin: 'https://www.linkedin.com'
  };

  const facebookIcon = document.querySelector('.fa-facebook')?.closest('a');
  const instagramIcon = document.querySelector('.fa-instagram')?.closest('a');
  const twitterIcon = document.querySelector('.fa-twitter')?.closest('a');
  const youtubeIcon = document.querySelector('.fa-youtube')?.closest('a');
  const linkedinIcon = document.querySelector('.fa-linkedin')?.closest('a');

  if (facebookIcon) facebookIcon.setAttribute('href', socialLinks.facebook);
  if (instagramIcon) instagramIcon.setAttribute('href', socialLinks.instagram);
  if (twitterIcon) twitterIcon.setAttribute('href', socialLinks.twitter);
  if (youtubeIcon) youtubeIcon.setAttribute('href', socialLinks.youtube);
  if (linkedinIcon) linkedinIcon.setAttribute('href', socialLinks.linkedin);
});

