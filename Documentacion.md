Tablas de la Base de Datos:

Usuarios (users): Almacena la información de los usuarios registrados en el sistema. Cada usuario tiene un ID, nombre de usuario, contraseña y roles asignados.

Productos (products): Contiene información sobre los productos disponibles en el sistema. Cada producto tiene un ID, nombre, descripción y precio.

Pedidos (orders): Registra los pedidos realizados por los usuarios. Cada pedido tiene un ID, ID de usuario asociado, productos seleccionados y fecha de creación.

Rutas del Sistema:

    /users: Ruta para realizar operaciones relacionadas con los usuarios.

    GET /users: Obtiene la lista de usuarios registrados (protegida).
    GET /users/:id: Obtiene los detalles de un usuario específico (protegida).
    POST /users: Crea un nuevo usuario en el sistema.
    PUT /users/:id: Actualiza la información de un usuario específico (protegida).
    DELETE /users/:id: Elimina un usuario específico (protegida).
    /products: Ruta para realizar operaciones relacionadas con los productos.

    GET /products: Obtiene la lista de productos disponibles.
    GET /products/:id: Obtiene los detalles de un producto específico.
    POST /products: Crea un nuevo producto en el sistema (protegida).
    PUT /products/:id: Actualiza la información de un producto específico (protegida).
    DELETE /products/:id: Elimina un producto específico (protegida).
    /orders: Ruta para realizar operaciones relacionadas con los pedidos.

    GET /orders: Obtiene la lista de pedidos realizados por un usuario autenticado (protegida).
    POST /orders: Crea un nuevo pedido en el sistema asociado al usuario autenticado (protegida).

Protección de Rutas:

    Para proteger ciertas rutas y garantizar que solo los usuarios autorizados tengan acceso, se han implementado los siguientes mecanismos de protección:

    JwtAuthGuard: se utiliza como protección de autenticación a nivel de ruta en rutas que requieren autenticación (@UseGuards(JwtAuthGuard)). Solo los usuarios autenticados pueden acceder a estas rutas.

    RolesGuard: se usa como un protector de autorización a nivel de ruta (@UseGuards(RolesGuard)) en rutas que requieren roles específicos. Solo los usuarios con los roles adecuados pueden acceder a estas rutas.

Roles de Usuario:

    Se han definido dos roles de usuario en el sistema:

    admin: Este rol otorga acceso a todas las funcionalidades del sistema, incluida la creación, actualización y eliminación de usuarios y productos.

    user: Este rol permite a los usuarios realizar pedidos y ver sus propios pedidos, pero no tienen permisos para administrar usuarios o productos.