#### PiruFlix Docs

*   [Introducción](#intro)
*   [Tecnologías](#tech)
*   [Estructura](#structure)
*   [Componentes](#components)
*   [Páginas](#pages)
*   [Instalación](#setup)

Creado por **Pirulug**  
© 2026

# PiruFlix UI Kit

Una interfaz de usuario moderna para plataformas de streaming, diseñada con un enfoque **"Flat Apple Style"**, soporte para temas (Oscuro/Claro) y completamente responsiva.

v1.0.0 UI/UX Responsive

- - -

## Tecnologías Utilizadas

##### HTML5 Semántico

Estructura limpia y accesible, optimizada para SEO y lectores de pantalla.

##### SCSS & Variables CSS

Estilos modulares compilados con Vite. Uso de variables nativas para el cambio de tema.

##### Bootstrap 5

Utilizado principalmente para el sistema de rejilla (Grid) y utilidades JS (Carousel/Tabs).

## Estructura del Proyecto

Organización de archivos recomendada para el compilador Vite/SCSS:

```bash
PiruFlix/
├── assets/             # Imágenes y logos
├── css/                # Salida compilada (no editar directamente)
├── js/                 # Lógica principal
│   ├── bootstrap.js
│   └── piruflix.js     # Toggle menú, tema, lógica de eliminación
├── scss/               # Archivos fuente de estilos
│   └── piruflix.scss   # Archivo maestro
├── index.html          # Home
├── detail.html         # Detalle Película/Serie
├── login.html          # Iniciar Sesión
├── register.html       # Registro
├── profile.html        # Perfil Usuario
├── mylist.html         # Mi Lista
└── README.html         # Documentación
```

## Componentes Clave

##### Navbar Híbrido

Barra de navegación con efecto _Glassmorphism_. En escritorio es horizontal, en móvil se convierte en un **Offcanvas** con controles de acceso rápido (Tema, Búsqueda).

##### Piru Poster Card

Componente `.piru-poster` con animación de zoom, overlay de reproducción y etiquetas flotantes (4K, HD). Adaptable a cualquier columna Bootstrap.

##### Hero Carousel

Slider cinematográfico con degradado (vignette) para asegurar la legibilidad del texto sobre cualquier imagen.

##### Auth Forms

Formularios de Login/Registro flotantes con inputs estilo "Clean" y validación visual de iconos.

## Páginas Incluidas

| Archivo | Descripción | Características |
| --- | --- | --- |
| `index.html` | Página de Inicio | Hero Slider, Carruseles de Películas, Sidebar Widgets. |
| `detail.html` | Detalle de Contenido | Backdrop, Trailer, Tabs de Temporadas, Reseñas. |
| `mylist.html` | Mi Lista | Grid responsivo con botón de eliminar y estado vacío. |
| `profile.html` | Perfil de Usuario | Dashboard con estadísticas, gestión de suscripción y avatar. |
| `login/register.html` | Autenticación | Diseño inmersivo con fondo y tarjeta central. |

## Configuración y SCSS

Para modificar los colores principales, edita las variables CSS en `scss/piruflix.scss`:

:root { --piru-bg: #ffffff; /\* Fondo Claro \*/ --piru-text: #1d1d1f; /\* Texto Principal \*/ --piru-accent: #E50914; /\* Color de Marca (Rojo) \*/ --piru-surface: #f5f5f7; /\* Color de Tarjetas/Inputs \*/ } \[data-theme="dark"\] { --piru-bg: #000000; /\* Fondo Oscuro \*/ --piru-text: #f5f5f7; /\* Texto Claro \*/ --piru-surface: #1c1c1e; /\* Superficie Oscura (Apple Dark) \*/ }

**Nota:** Este proyecto utiliza `localStorage` para recordar la preferencia de tema (Oscuro/Claro) del usuario automáticamente.