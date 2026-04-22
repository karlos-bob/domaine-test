(function () {
  const ACTIVE_CLASS = 'swatch-btn--active';
  const TRANSPARENT_BORDER_CLASS = 'border-transparent';

  function initCard(card) {
    if (card.dataset.productCardInitialized === 'true') return;
    card.dataset.productCardInitialized = 'true';

    const primaryImg = card.querySelector('.product-img-primary');
    const secondaryImg = card.querySelector('.product-img-secondary');
    const swatches = Array.from(card.querySelectorAll('.swatch-btn'));
    if (!swatches.length) return;

    function selectSwatch(btn, { focus = false } = {}) {
      const { primaryImage, secondaryImage } = btn.dataset;
      if (primaryImage && primaryImg) primaryImg.src = primaryImage;
      if (secondaryImage && secondaryImg) secondaryImg.src = secondaryImage;

      swatches.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle(ACTIVE_CLASS, isActive);
        b.classList.toggle(TRANSPARENT_BORDER_CLASS, !isActive);
        b.setAttribute('aria-checked', isActive ? 'true' : 'false');
        b.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      if (focus) btn.focus();
    }

    swatches.forEach((btn, index) => {
      btn.addEventListener('click', () => selectSwatch(btn));

      btn.addEventListener('keydown', (event) => {
        const lastIndex = swatches.length - 1;
        let targetIndex = null;

        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            targetIndex = index === lastIndex ? 0 : index + 1;
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            targetIndex = index === 0 ? lastIndex : index - 1;
            break;
          case 'Home':
            targetIndex = 0;
            break;
          case 'End':
            targetIndex = lastIndex;
            break;
          default:
            return;
        }

        event.preventDefault();
        selectSwatch(swatches[targetIndex], { focus: true });
      });
    });
  }

  function init() {
    document.querySelectorAll('.product-card').forEach(initCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
