const iconContainers = document.querySelectorAll('.orderItem__buttonFavoriteContainer');

iconContainers.forEach((iconContainer) => {
  iconContainer.addEventListener('click', () => {
    const icon = iconContainer.querySelector('svg');
    const currentColor = icon.querySelector('path').getAttribute('fill');

    if (currentColor === 'black') {
      icon.querySelector('path').setAttribute('fill', '#CB11AB');
    } else {
      icon.querySelector('path').setAttribute('fill', 'black');
    }
  });
});

