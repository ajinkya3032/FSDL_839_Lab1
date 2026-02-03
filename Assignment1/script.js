 function scrollToSection() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Tab switching for Projects / Achievements / Experiences
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    function showTarget(targetId) {
        contents.forEach(c => {
            if (c.id === targetId) {
                c.classList.add('active');
                c.removeAttribute('hidden');
            } else {
                c.classList.remove('active');
                c.setAttribute('hidden', '');
            }
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const target = this.dataset.target;
            showTarget(target);
        });
    });

    // Ensure default view
    const defaultBtn = document.querySelector('.tab-button.active');
    if (defaultBtn) showTarget(defaultBtn.dataset.target);
});
