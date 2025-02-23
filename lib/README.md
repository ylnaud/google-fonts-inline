# Paso 1: Instalar el Paquete

npm install google-fonts-inline

## Paso 2: Configurar Eleventy

En tu archivo de configuración de Eleventy (.eleventy.js), importa y usa el paquete google-fonts-inline para generar el CSS en línea. Aquí tienes un ejemplo de cómo hacerlo:

```
import  createInlineCss  from 'google-fonts-inline';

module.exports = function(eleventyConfig) {
  // Crear un shortcode para generar CSS en línea de Google Fonts
  eleventyConfig.addShortcode('googleFontsInline', async function(url) {
    try {
      const css = await createInlineCss(url);
      return css;
    } catch (error) {
      console.error('Error al generar el CSS en línea:', error);
      return '';
    }
  });
};

```

## Paso 3: Usar el Shortcode en tus Plantillas

Ahora puedes usar el shortcode googleFontsInline en tus archivos de plantilla de Eleventy para generar el CSS en línea. Aquí tienes un ejemplo de cómo hacerlo en un archivo HTML:

```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo con Google Fonts</title>
  {% googleFontsInline 'https://fonts.googleapis.com/css2?family=Roboto' %}
</head>
<body>
  <h1>¡Hola, Mundo!</h1>
  <p>Este es un ejemplo de uso de Google Fonts en línea con Eleventy.</p>
</body>
</html>

```

### Paso 4: Ejecutar Eleventy

Finalmente, ejecuta Eleventy para generar tu sitio estático con el CSS en línea de Google Fonts:

```
npm start
```
