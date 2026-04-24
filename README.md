# API RPG - Rafael Ortiz

## Descripción
API REST para la gestión de personajes y simulación de batallas en un juego RPG.

## Tecnologías
- Node.js
- Express

## Funcionalidades
- CRUD de personajes
- Simulación de batallas basada en atributos

## Endpoints

### Personajes
- GET /api/personajes
- POST /api/personajes
- GET /api/personajes/:id
- PUT /api/personajes/:id
- DELETE /api/personajes/:id

### Batalla
- POST /api/batalla

## Ejecución
```bash
npm install
node app.js