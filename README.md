Prueba técnica de Platzi Master 

INSTRUCCIONES 

Hagamos una examen!
Crea un módulo para un sistema de evaluación educativo que muestre una estructura de preguntas con respuesta de selección múltiple y al final muestre el resultado de cantidad de respuestas correctas y cantidad de respuestas equivocadas, teniendo en cuenta las siguientes condiciones:
Cada pregunta tiene 4 opciones de respuesta en la cual una es correcta y tres son erradas.
A medida que pasa entre las preguntas se van acumulando los resultados correctos.
Cada evaluación debe tener mínimo 5 preguntas.
Para cargar las preguntas y opciones de respuesta de las evaluaciones se debe contar con una API local para realizar su lectura y visualización.
Entregable

SOLUCIÓN 

Lenguaje: Javascript 

Explicación

Backend 
La base de datos (preguntas con sus respuestas) se guardaron en un JSON en la que el usuario accederá mediante una API. 
Se montó una API REST utilizando Express. Utilizando las siguientes 4 rutas:
  -GET Para obtener las preguntas 
  -GET para obtener las posibles respuestas 
  -POST el usuario crea una ruta con las respuestas que envió. 
  -GET Para recibir las soluciones de las preguntas, estas las recibe una vez que lo haya enviado. 

FRONTEND 

Se inicia con un contador en 0, cuando el usuario de click en el botón SIGUIENTE se iniciará el sistema de evalaución. 
Las respuestas se irán guardando en un array llamado answers. 

