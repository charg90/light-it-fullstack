# Light IT Challenge

¡Gracias por la oportunidad de participar en este challenge!

Este repositorio fue creado para centralizar la ejecución del frontend y backend utilizando **Docker Compose**, ya que originalmente ambos proyectos estaban en repos separados. Subí esta versión completa para facilitar la revisión y ejecución del proyecto en un solo entorno.

- Frontend (React/Next.js):
  https://github.com/charg90/light-it-front-end.git

- Backend (NestJS):
  https://github.com/charg90/light-it-back-end.git

## Tecnologías utilizadas

- **Backend**: NestJS
- **Frontend**: React/Next.js
- **Base de datos**: PostgreSQL
- **Contenedores**: Docker & Docker Compose

---

## Requisitos

Antes de comenzar, asegurate de tener instalado:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## Clonación del proyecto

Cloná el repositorio principal:

```bash
git clone https://github.com/charg90/light-it-chanllenge.git
cd light-it-chanllenge
```

---

## Ejecución con Docker Compose

Para levantar los servicios utilizando Docker Compose, ejecutá el siguiente comando:

```bash
docker-compose up --build
```

Esto iniciará los siguientes servicios:

- **Base de datos (PostgreSQL)**: Disponible en el puerto `5432`.
- **Backend (NestJS)**: Disponible en el puerto `4000`.
- **Frontend (Next.js)**: Disponible en el puerto `3000`.

Para detener los servicios, ejecutá:

```bash
docker-compose down
```
