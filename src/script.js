document.querySelectorAll('.book-now-btn').forEach((button) => {
    button.addEventListener('click', () => {
        flatpickr(button, {
            enableTime: false,
            dateFormat: "Y-m-d",
            minDate: "today",
        }).open();
    });
});
