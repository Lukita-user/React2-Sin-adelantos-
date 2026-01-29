// src/services/firestore.js
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig.js";

// Mock local con todos los productos de la tienda
const productsMock = [
  {
    id: "vln4qwGBbtXyYoEGqyxs",
    title: "Retrato en grafito",
    description: "Retrato realista hecho a mano en grafito sobre papel de alta calidad.",
    price: 15000,
    stock: 8,
    category: "retrato",
    image:"https://i.pinimg.com/474x/9d/a1/50/9da150a35e0decca78512fe9632ee9c9.jpg",
  },
  {
    id: "9hlc9Imq2g1mBUZwA343",
    title: "Caricatura digital",
    description: "Caricatura divertida y colorida realizada digitalmente, ideal para regalos.",
    price: 12000,
    stock: 10,
    category: "caricatura",
    image:"",
  },
  {
    id: "bX7XzJaWbvF1u270u0sl",
    title: "Ilustración vectorial",
    description: "Ilustración vectorial para uso en branding o proyectos personales.",
    price: 18000,
    stock: 5,
    category: "ilustracion",
    image:"https://img.freepik.com/vector-gratis/ilustracion-plana-dia-mundial-arte_23-2151345127.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "yJ1BaC4YYJsqZSun7Q8h",
    title: "Retrato en acuarela",
    description: "Retrato pintado en acuarela con detalles suaves y colores vibrantes.",
    price: 20000,
    stock: 6,
    category: "retrato",
    image:"https://static.skillshare.com/uploads/project/700902/cover_full_52f3cdbafe2a027e432ad47c56cb1382.jpg",
  },
  {
    id: "FN8UJlT1jLhWijO2AbmN",
    title: "Caricatura tradicional",
    description: "Caricatura hecha a mano con tinta y lápices de colores.",
    price: 11000,
    stock: 7,
    category: "caricatura",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsN9kwqFiX-mEHRm5-YZMOeQlYN3H6o6-1A&s",
  },
  {
    id: "BIhFmJnTVPMV42gkpmtt",
    title: "Ilustración conceptual",
    description: "Ilustración conceptual para proyectos creativos y editoriales.",
    price: 22000,
    stock: 4,
    category: "ilustracion",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ORiw_UdC49yrgD8BEMk_1qmhYBX_Y56AIg&s",
  },
];

// Funciones para obtener productos desde Firestore

export async function getProducts() {
  const colRef = collection(db, "products");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Función para obtener productos desde el mock local (solo para pruebas)
export function getProductsMock() {
  return Promise.resolve(productsMock);
}

export async function getProductsByCategory(categoryId) {
  const colRef = collection(db, "products");
  const q = query(colRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Función para obtener productos por categoría desde mock local (solo pruebas)
export function getProductsByCategoryMock(categoryId) {
  return Promise.resolve(productsMock.filter(p => p.category === categoryId));
}

export async function getProductById(productId) {
  const docRef = doc(db, "products", productId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

// Función para obtener producto por id desde mock local (solo pruebas)
export function getProductByIdMock(productId) {
  const product = productsMock.find(p => p.id === productId);
  return Promise.resolve(product || null);
}

export async function createOrder({ buyer, items, total }) {
  const colRef = collection(db, "orders");
  const order = {
    buyer,
    items,
    total,
    createdAt: serverTimestamp(),
  };
  const docCreated = await addDoc(colRef, order);
  return docCreated.id;
}
