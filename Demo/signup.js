document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const statusMessage = document.getElementById('signup-status');

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = signupForm.name.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value;

    // Basic client-side validation
    if (!name || !email || !password) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const result = await response.json();

      if (response.ok) {
        showMessage(result.message, 'success');
        signupForm.reset();
      } else {
        showMessage(result.error || 'Registration failed.', 'error');
      }
    } catch (error) {
      console.error('Signup error:', error);
      showMessage('Server connection failed. Try again later.', 'error');
    }
  });

  function showMessage(message, type) {
    if (!statusMessage) return;

    statusMessage.textContent = message;
    statusMessage.style.color = type === 'success' ? 'green' : 'red';
  }
});

