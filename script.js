document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent closing dropdown on click inside
            closeAllDropdowns();
            this.querySelector('.dropdown-content').style.display = 'block';
        });
    });

    document.addEventListener('click', function() {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdownBtns.forEach(btn => {
            btn.querySelector('.dropdown-content').style.display = 'none';
        });
    }
});
