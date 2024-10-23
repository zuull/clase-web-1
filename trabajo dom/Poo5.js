class ImageItem {
    constructor(src, title) {
      this.src = src;
      this.title = title;
    }

    createCard() {
      const card = document.createElement('div');
      card.classList.add('image-card');
  
      const img = document.createElement('img');
      img.src = this.src;
      img.alt = this.title;

    const title = document.createElement('p');
    title.textContent = this.title;

    card.appendChild(img);
    card.appendChild(title);

    return card;
    }
}

class StyledImageItem extends ImageItem {
    constructor(src, title, effectClass) {
    super(src, title);
    this.effectClass = effectClass;
    }

    createCard() {
    const card = super.createCard();
    card.classList.add(this.effectClass);
    return card;
    }
}

  // Manipulación del DOM para agregar las imágenes
const gallery = document.getElementById('gallery');
const images = [
    new StyledImageItem('https://via.placeholder.com/200', 'Imagen 1', 'shadow-effect'),
    new StyledImageItem('https://www.presteamshop.com/blog/wp-content/uploads/2020/08/para-que-sirven-los-acortadores-de-url-y-cuales-son-los-10-mejores.jpg', 'Imagen 2', 'shadow-effect'),
    new StyledImageItem('https://img.freepik.com/foto-gratis/resumen-bombilla-creativa-sobre-fondo-azul-brillante-ia-generativa_188544-8090.jpg', 'Imagen 3', 'shadow-effect'),
];

images.forEach(image => {
    gallery.appendChild(image.createCard());
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});