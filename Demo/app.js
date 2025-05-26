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
  const homeLink = document.querySelector('a[href="/home.html"]');
  const logoHome = document.querySelector('a[href="home.html"]');

  if (homeLink) {
    homeLink.addEventListener('click', () => {
      console.log('Navigating to Home page');
    });
  }

  if (logoHome) {
    logoHome.addEventListener('click', () => {
      console.log('Navigating to Home page (logo)');
    });
  }

  // Tech link
  const techLink = document.querySelector('a[href="tech.html"]');
  if (techLink) {
    techLink.addEventListener('click', () => {
      console.log('Navigating to Tech page');
    });
  }

  // Sign Up button
  const signUpBtn = document.querySelector('a[href="signup.html"]');
  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
      console.log('Navigating to Sign Up page');
    });
  }

  // Main "Get Started" button
  const getStartedMain = document.querySelectorAll('.main__btn a');
  getStartedMain.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      console.log(`Main "Get Started" button ${i + 1} clicked`);
    });
  });

  // Service "Get Started" buttons
  const getStartedServices = document.querySelectorAll('.services__card button');
  getStartedServices.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      console.log(`Service "Get Started" button ${i + 1} clicked`);
    });
  });

  // Logo link override
  const techWorldLogo = document.querySelector('#navbar__logo');
  if (techWorldLogo) {
    techWorldLogo.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('TechWorld Inc. logo clicked!');
      window.location.href = 'techworld.html';
    });
  }
});
