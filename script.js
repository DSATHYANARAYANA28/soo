document.addEventListener('DOMContentLoaded', function() {
    const notForgiveButton = document.getElementById('notForgiveButton');
    const forgiveButton = document.getElementById('forgiveButton');
    document.body.style.opacity = 1;

    function moveButton() {
        const containerWidth = document.querySelector('.container').offsetWidth;
        const containerHeight = document.querySelector('.container').offsetHeight;
        const buttonWidth = notForgiveButton.offsetWidth;
        const buttonHeight = notForgiveButton.offsetHeight;

        const maxX = containerWidth - buttonWidth;
        const maxY = containerHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        notForgiveButton.style.position = 'absolute';
        notForgiveButton.style.left = randomX + 'px';
        notForgiveButton.style.top = randomY + 'px';
    }

    notForgiveButton.addEventListener('mouseover', moveButton);

    forgiveButton.addEventListener('click', () => {
        window.location.href = 'forgive.html';
    });
});