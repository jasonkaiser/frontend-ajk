const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    // Store the user's preference
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

// Check user preference from localStorage
const userMode = localStorage.getItem('mode');
if (userMode === 'dark') {
    document.body.classList.add('dark');
} else {
    document.body.classList.add('light');
}