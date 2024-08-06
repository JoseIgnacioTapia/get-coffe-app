# Proyecto de Gestión de Pedidos de una cafetería

Este es un proyecto de gestión de productos utilizando Next.js 14, Prisma, Zod, y React. La aplicación permite crear, leer, actualizar y eliminar productos, así como validar los formularios de producto.

## Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [React](https://reactjs.org/)

## Requisitos

- Node.js >= 14.x
- npm >= 6.x
- PostgreSQL (u otro motor de base de datos soportado por Prisma)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JoseIgnacioTapia/get-coffe-app.git
   cd get-coffe-app
2. Instala las dependencias:
   ```bash
   npm install
3. Crea un archivo .env en la raíz del proyecto y añade la URL de conexión a tu base de datos:
   ```bash
   DATABASE_URL=
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   NEXT_PUBLIC_CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
4. Inicializa la base de datos y genera el cliente de Prisma:
   ```bash
   npx prisma migrate dev --name init
5. (Opcional) Si deseas visualizar y gestionar tu base de datos, puedes utilizar Prisma Studio:
   ```bash
   npx prisma studio

## Ejecutar el Proyecto
Para iniciar el servidor de desarrollo, utiliza el siguiente comando:
   ```bash
   npm run dev
```

## Validación de Datos
Este proyecto utiliza la librería Zod para la validación de datos en los formularios. Los esquemas de validación se encuentran en el archivo src/schema.

## Consideraciones
Asegúrate de tener PostgreSQL u otro motor de base de datos soportado por Prisma en ejecución antes de iniciar el proyecto.
Para realizar cambios en el esquema de la base de datos, actualiza el archivo prisma/schema.prisma y ejecuta npx prisma migrate dev para aplicar los cambios.
