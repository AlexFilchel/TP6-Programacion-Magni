# Roadmap TP 6 — React Router + CRUD multipantalla

Basado en el análisis del proyecto actual y en los requisitos de `TP Nro 6 - PROG4.pdf`.

## Criterio de priorización

- Primero asegurar la base obligatoria de ruteo y dependencias.
- Después resolver la edición por URL y el caso de refresh directo en `/editar/:id`.
- Recién al final hacer polish de navegación y el menú burger, porque eso es complementario.

## Roadmap

### Obligatorio para aprobar

### 1. Preparar la base de enrutado
- Agregar `react-router-dom` en `Frontend/package.json`.
- Integrar `BrowserRouter` en `Frontend/src/main.tsx`.
- Dejar listo `App.tsx` para funcionar como contenedor de rutas.

### 2. Separar la app en páginas reales
- Crear `Frontend/src/pages/ListaPage.tsx` para listado, filtros y acciones generales.
- Crear `Frontend/src/pages/FormularioPage.tsx` para alta de participante.
- Crear `Frontend/src/pages/EditarPage.tsx` para edición por `id`.
- Sacar de `App.tsx` la lógica de pantalla única actual.

### 3. Configurar las rutas obligatorias
- Definir `/` para el listado de participantes.
- Definir `/nuevo` para el formulario de alta.
- Definir `/editar/:id` para el formulario de edición.
- Verificar navegación entre rutas sin recarga manual.

### 4. Reorganizar `App.tsx` como shell de navegación
- Usar `Frontend/src/App.tsx` como layout principal.
- Incorporar accesos visibles a “Listado” y “Nuevo participante”.
- Mantener `ParticipantesProvider` integrado sin romper el CRUD actual.

### 5. Reutilizar `Formulario` para alta y edición
- Refactorizar `Frontend/src/components/Formulario.tsx` para soportar ambos flujos.
- Implementar explícitamente el patrón `onSuccess`.
- Hacer que, después de guardar, el flujo principal sea volver a `/` y no hacer scroll.
- Limpiar estados locales sobrantes ligados al modo de edición viejo.

### 6. Adaptar el contexto para edición por URL
- Revisar `Frontend/src/context/ParticipantesContext.tsx` para resolver participantes por `id`.
- Asegurar que `/editar/:id` funcione entrando directo o refrescando la página.
- Definir qué pasa si el `id` no existe: mensaje, estado vacío o redirección.
- Mantener crear, editar y eliminar funcionando como hasta ahora.

### 7. Conectar acciones del listado con navegación real
- Cambiar en `Frontend/src/components/ParticipanteCard.tsx` la acción “Editar” para navegar a `/editar/:id`.
- Mantener “Eliminar” funcionando desde la card.
- Eliminar la dependencia de `cargarEdicion + scroll` como mecanismo principal.

### 8. Reubicar lógica de listado y filtros
- Mover la lógica hoy embebida en `Frontend/src/App.tsx` hacia `Frontend/src/pages/ListaPage.tsx`.
- Conservar filtros, búsqueda y comportamiento visual actual.
- Mantener la carga de datos de prueba en la lista si sigue siendo necesaria para la materia.

### 9. Validar el CRUD completo en la nueva arquitectura
- Alta: crear desde `/nuevo` y volver correctamente al listado.
- Edición: modificar desde `/editar/:id` y volver correctamente al listado.
- Baja: eliminar desde `/` sin romper navegación ni estado.
- Confirmar sincronización correcta entre UI, contexto y backend.

### Complementario

### 10. Agregar menú responsive tipo burger
- Incorporar navegación responsive en el layout principal.
- Mostrar menú burger en mobile y navegación tradicional en desktop.
- Incluir accesos al menos a `/` y `/nuevo`.
- Verificar apertura, cierre y legibilidad.

### 11. Pulir experiencia de navegación
- Ajustar títulos por página.
- Marcar visualmente la ruta activa.
- Revisar mensajes de éxito/error para el flujo multipágina.
- Eliminar comportamientos viejos que ya no apliquen.

## Definición de terminado

- [ ] `Frontend` tiene `react-router-dom` declarado en su propio `package.json`.
- [ ] `BrowserRouter` está integrado en `Frontend/src/main.tsx`.
- [ ] `App.tsx` funciona como shell/layout con rutas.
- [ ] Existen `pages/ListaPage.tsx`, `pages/FormularioPage.tsx` y `pages/EditarPage.tsx`.
- [ ] Funcionan `/`, `/nuevo` y `/editar/:id`.
- [ ] Hay navegación visible entre vistas.
- [ ] `Formulario` se reutiliza para alta y edición.
- [ ] `Formulario` ejecuta un flujo `onSuccess`.
- [ ] Crear, editar y eliminar siguen funcionando.
- [ ] `/editar/:id` funciona incluso entrando directo o refrescando.
- [ ] La edición ya no depende del scroll al formulario.
- [ ] Complementario: menú burger responsive operativo en mobile.
