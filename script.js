// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each link
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		// Prevent the default link behavior
		event.preventDefault();

		// Get the target section ID
		const targetId = link.getAttribute('href');

		// Scroll to the target section
		document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
	});
});
