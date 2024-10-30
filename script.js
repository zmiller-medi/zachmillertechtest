function openTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    // Show the selected tab content and activate the button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
