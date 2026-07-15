# 🌌 Rick & Morty - Multiverse Registry & CRUD Blog

¡Bienvenido al Registro del Multiverso! Esta es una aplicación web interactiva diseñada para explorar personajes de la serie **Rick and Morty** en tiempo real y gestionar una bitácora de reportes interdimensionales mediante un sistema CRUD completo conectado a una API de pruebas.

El proyecto está construido bajo una arquitectura limpia, separando los servicios de datos, la lógica de estado (Custom Hooks) y los componentes visuales.

---

## 🚀 Características Clave

- **Explorador Multiversal**: Integración con la API de Rick and Morty para listar personajes dinámicamente.
- **Filtros Avanzados en Origen**: Capacidad de limitar el renderizado (ej. mostrar solo 4 personajes de forma aleatoria) directamente desde las propiedades del componente.
- **Sistema CRUD Completo**: Simulación de operaciones de creación, lectura, actualización y eliminación (`GET`, `POST`, `PUT`, `DELETE`) utilizando la API de `JSONPlaceholder`.
- **Arquitectura de Capas**: Separación estricta de responsabilidades:
  - `Services`: Peticiones HTTP aisladas mediante Axios.
  - `Hooks`: Centralización de la lógica del estado global, carga, envío y control de modales interactivos.
  - `Views/Components`: Renderizado puro y modularizado.
- **Interfaz Cyberpunk / Terminal**: Estética oscura optimizada con Tailwind CSS utilizando tipografías monoespaciadas, efectos de brillo (`neon shadow`) y diseño totalmente adaptivo (*Mobile-First*).
- **UX Segura**: Modales de confirmación para prevenir eliminaciones accidentales de registros.

---

## 🛠️ Tecnologías Utilizadas

- **React.js** (Hooks, Context/State Management)
- **Tailwind CSS** (Diseño responsivo y estilizado avanzado)
- **Axios** (Cliente HTTP para consumo de servicios)
- **APIs consumidas**:
  - [Rick and Morty API](https://rickandmortyapi.com) (Datos de personajes)
  - [JSONPlaceholder](https://typicode.com) (Simulación del CRUD de Posts)

---

## 📂 Estructura del Proyecto

El código sigue las mejores prácticas de organización de carpetas en React:

```text
src/
├── api/                  # Configuración base de Axios y endpoints
│   └── PostService.js    # Métodos HTTP (getPosts, createPost, updatePost, deletePost)
├── components/           # Componentes visuales reutilizables
│   ├── PostCard.jsx      # Tarjeta de bitácora con botones de acción integrados
│   └── Modal.jsx         # Contenedor genérico para formularios y confirmaciones
├── hooks/                # Lógica de negocio y estados de la UI
│   └── usePost.js        # Custom Hook encargado de la lógica CRUD y control de modales
├── pages/                # Vistas principales del proyecto
│   └── CrudPage.jsx      # Componente de vista limpio que consume el Custom Hook
└── App.jsx               # Enrutador o punto de entrada principal
```

---

## 🔧 Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Angalii/react-api-responsive.git
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) (o el puerto indicado por Vite/Webpack) en tu navegador.

---

## 💡 Detalles Técnicos Relevantes

### Comportamiento del CRUD con JSONPlaceholder
Dado que `JSONPlaceholder` es una API falsa de uso público, **los cambios realizados a través de POST, PUT o DELETE no persisten en el servidor externo**. Sin embargo, la aplicación mitiga esto aplicando **mutaciones inmediatas sobre el estado local de React** (`setPosts`) tras recibir respuestas exitosas (`200 OK` / `201 Created`). Esto garantiza que la experiencia del usuario final sea fluida y exactamente idéntica a la de una base de datos real.

---

## 📝 Licencia

Este proyecto fue desarrollado con fines educativos y de práctica arquitectónica en Frontend.