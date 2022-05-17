// Перевірка підтримки webp, додавання класу webp або no-webp для HTML
export function isWebp() {
  // Перевірка підтримки webp
  function checkWebp(callback) {
    let webp = new Image();
    webp.onload = webp.onerror = function () {
      callback(webp.height == 2);
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  // Додавання класу webp або no-webp для HTML
  checkWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className)
  });
}
