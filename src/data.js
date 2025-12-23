// src/data.js

export const products = [
  {
    id: '1',
    category: 'retrato',
    title: 'Retrato digital',
    price: 50,
    description: 'Retrato personalizado en digital, con alta calidad y detalle.',
  },
  {
    id: '2',
    category: 'caricatura',
    title: 'Caricatura personalizada',
    price: 40,
    description: 'Caricatura divertida y única, ideal para regalos y redes sociales.',
  },
  {
    id: '3',
    category: 'ilustracion',
    title: 'Ilustración de personaje',
    price: 60,
    description: 'Ilustración detallada de personajes para proyectos personales o comerciales.',
  },
  {
    id: '4',
    category: 'retrato',
    title: 'Retrato estilo cómic',
    price: 55,
    description: 'Retrato digital con estilo cómic, colores vibrantes y líneas definidas.',
  },
  {
    id: '5',
    category: 'caricatura',
    title: 'Caricatura en blanco y negro',
    price: 35,
    description: 'Caricatura clásica en blanco y negro, con trazos expresivos.',
  },
];

// Función para obtener todos los productos (simula llamada asíncrona)
export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

// Función para obtener productos filtrados por categoría
export function getProductsByCategory(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === categoryId));
    }, 1000);
  });
}

// Función para obtener un producto por su id
export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(product => product.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
}
