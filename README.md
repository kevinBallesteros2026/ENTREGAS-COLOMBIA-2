# Tu tienda multinicho — guía de puesta en marcha (pago contra entrega)

Esta es tu tienda: catálogo por categorías, carrito, y un formulario de
pedido que el cliente llena y que se envía directo a tu WhatsApp para
coordinar la entrega y el cobro. El Pixel de Meta ya está conectado para que
tus anuncios de Facebook/Instagram recojan datos desde el primer clic. Sigue
estos pasos en orden; no necesitas saber programar, y no necesitas ninguna
cuenta de pasarela de pago.

## 1. Sube el proyecto a GitHub

1. Crea una cuenta gratis en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo (botón verde "New").
3. Sube esta carpeta completa a ese repositorio (puedes arrastrar los
   archivos desde la web de GitHub, opción "uploading an existing file"). Si
   ya tenías un repositorio de una versión anterior, sube estos archivos
   encima para reemplazarlos.

## 2. Despliega en Vercel (gratis para empezar)

1. Crea una cuenta en [vercel.com](https://vercel.com) usando tu cuenta de GitHub.
2. Click en "Add New" → "Project" y selecciona el repositorio que subiste.
3. Vercel detecta automáticamente que es un proyecto Next.js. No cambies nada,
   pero antes de darle a "Deploy", añade las variables de entorno del
   siguiente paso.

## 3. Configura tus variables (WhatsApp y Pixel)

En la pantalla de configuración del proyecto en Vercel, busca
"Environment Variables" y añade, una por una:

| Nombre | Qué poner |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Tu número de WhatsApp con código de país, **sin** "+", espacios ni guiones. Ejemplo Colombia: `573001112233` |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Tu ID de Pixel, desde Meta Events Manager → tu Pixel |
| `NEXT_PUBLIC_CURRENCY` | Tu moneda en mayúsculas, ej. `COP`, `MXN`, `ARS`, `CLP` |

Dale a "Deploy". En 1-2 minutos tu tienda estará en una URL tipo
`https://tu-proyecto.vercel.app`.

## 4. Cómo llegan los pedidos

Cuando un cliente añade productos al carrito y llena el formulario (nombre,
teléfono, dirección, ciudad), al darle a "Confirmar pedido por WhatsApp":

1. Se abre automáticamente WhatsApp (o WhatsApp Web si está en computador)
   con un mensaje ya redactado: lista de productos, cantidades, total, y los
   datos del cliente.
2. El cliente solo tiene que darle "Enviar" en WhatsApp para que te llegue
   el pedido directo a tu chat.
3. Desde ahí coordinas la entrega y cobras en efectivo o con datáfono al
   entregar.

No hay ninguna base de datos de pedidos separada — cada pedido queda en tu
propio WhatsApp, que ya conoces y usas todos los días.

## 5. Conecta el Pixel con el Administrador de Anuncios

El código ya envía estos eventos automáticamente a tu Pixel:
- **PageView** — cada vez que alguien visita cualquier página.
- **ViewContent** — al abrir la ficha de un producto.
- **AddToCart** — al añadir un producto al carrito.
- **Purchase** — cuando el cliente confirma su pedido por WhatsApp.

Nota: como es pago contra entrega, no hay una pasarela que confirme el cobro
en el momento — por eso el evento **Purchase** se dispara al confirmar el
pedido (que es la acción que de verdad quieres optimizar en tus campañas),
no al recibir el pago físico.

Para verlo funcionando: abre tu tienda, ve a Meta Events Manager → tu Pixel →
pestaña "Test events", navega por tu tienda y deberías ver los eventos llegar
en tiempo real. Desde ahí ya puedes crear tus campañas y públicos
personalizados en el Administrador de Anuncios usando estos eventos.

## 6. (Opcional) Conecta tu propio dominio

En Vercel → tu proyecto → Settings → Domains, añade tu dominio (ej.
`mitienda.com`) y sigue las instrucciones para apuntar tu DNS.

## 7. Cómo editar tus productos

Abre `data/products.js` en GitHub (botón del lápiz para editar), cambia
nombres, precios (en centavos, ej. $34.990 COP sin decimales se escribe
como el valor completo — ajusta según cómo manejes tu moneda), descripciones
e imágenes, y guarda. Vercel vuelve a publicar la tienda sola en un par de
minutos. Las categorías (nichos) se editan en el mismo archivo, arriba en
`categories`.

---

### Resumen de lo que ya está integrado
- Catálogo multinicho con filtro por categoría.
- Carrito persistente (sobrevive si cierras el navegador).
- Formulario de pedido que arma y envía todo por WhatsApp — cero cuentas
  de pasarela de pago que crear.
- Pixel de Meta con los eventos que usa el Administrador de Anuncios para
  optimizar y escalar campañas, incluyendo Purchase al confirmar el pedido.
