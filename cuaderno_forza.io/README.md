forza-taller/
│
├── 📄 index.html                    ← Página principal (única que carga el navegador)
├── 📄 manifest.webmanifest          ← PWA: nombre, iconos, colores
├── 📄 sw.js                         ← Service Worker (offline)
├── 📄 README.md                     ← Documentación del proyecto
├── 📄 LICENSE                       ← MIT (o el que prefieras)
├── 📄 .gitignore                    ← Archivos ignorados
├── 📄 .nojekyll                     ← Para GitHub Pages (evita Jekyll)
│
├── 📁 assets/
│   ├── 📁 icons/
│   │   ├── icon-192.png            ← PWA icon
│   │   ├── icon-512.png            ← PWA icon
│   │   ├── apple-touch-icon.png    ← iOS
│   │   └── favicon.ico             ← Navegador
│   └── 📁 img/
│       └── default-logo.svg        ← Logo placeholder si no hay custom
│
├── 📁 css/
│   ├── theme.css                   ← Design System (tokens Cuaderno)
│   ├── base.css                    ← Reset, tipografía, layout base
│   ├── components.css              ← Cards, botones, tags, modales, etc.
│   └── views.css                   ← Estilos por vista específica
│
├── 📁 js/
│   ├── app.js                      ← Inicialización, navegación, estado global
│   │
│   ├── 📁 core/
│   │   ├── db.js                   ← IndexedDB wrapper
│   │   ├── state.js                ← AppState (equivalente a Context)
│   │   └── utils.js                ← Helpers (toast, format, compress image)
│   │
│   ├── 📁 data/
│   │   ├── perfiles.js             ← Base de datos de perfiles FORZA
│   │   ├── configs.js              ← Configuraciones por serie
│   │   ├── precios.js              ← Precios iniciales (herrajes, vidrio, perfiles)
│   │   └── marca.js                ← Marca por defecto
│   │
│   ├── 📁 engine/
│   │   ├── formulas.js             ← evalFormula, inferirHojas, normAcabado
│   │   ├── calcular.js             ← calcularVano, precioBarra, precioHerraje
│   │   └── validar.js              ← Validación de medidas y zona de viento
│   │
│   ├── 📁 views/
│   │   ├── inicio.js
│   │   ├── proyectos.js
│   │   ├── proyecto.js             ← Detalle + vanos
│   │   ├── camara.js
│   │   ├── galeria.js
│   │   ├── precios.js
│   │   └── menu.js
│   │
│   └── 📁 ui/
│       ├── modal.js
│       ├── toast.js
│       └── marca.js                ← aplicarMarca, logo, colores
│
└── 📁 docs/
    ├── DESIGN_SYSTEM.md            ← Documentación del tema Cuaderno
    ├── ARQUITECTURA.md             ← Cómo funciona por dentro
    └── CHANGELOG.md                ← Historial de versiones
