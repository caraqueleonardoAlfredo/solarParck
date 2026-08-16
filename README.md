# Propuesta para parques solares — Leonardo Caraque

Landing page sobre una iniciativa de mejora para parques solares basada en dos perspectivas complementarias: el conocimiento operativo de Robin Fernando y la capacidad tecnológica de Leonardo Alfredo Caraque.

## Ejecutar en esta computadora

Requisitos: Node.js 22.13 o superior.

```powershell
npm install
npm run dev
```

Abrir `http://localhost:3000/`.

## Revisar desde otro dispositivo de la misma red

```powershell
npm run dev -- --host 0.0.0.0
```

Luego abrir desde el celular la dirección de red indicada por el servidor. Ambos dispositivos deben estar conectados a la misma red Wi-Fi y el Firewall de Windows debe permitir el acceso a Node.js.

## Validar la versión final

```powershell
npm run build
npm run lint
```

## Estructura principal

- `app/page.tsx`: contenido y estructura de la página.
- `app/globals.css`: identidad visual y diseño responsive.
- `app/layout.tsx`: metadatos y vista previa para WhatsApp.
- `public/solar-operations-hero.png`: imagen conceptual principal.
- `public/og-iniciativa.png`: tarjeta social de la iniciativa.

El proyecto no requiere backend, base de datos ni variables de entorno.
