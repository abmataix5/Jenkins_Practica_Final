Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->




# PRÁCTICA JENKINS

<br>

<br>

## QUE ES JENKINS?

Jenkins es un servidor open source para la integración continua. Es una herramienta que se utiliza para compilar y probar proyectos de software de forma continua, lo que facilita a los desarrolladores integrar cambios en un proyecto y entregar nuevas versiones a los usuarios. Escrito en Java, es multiplataforma y accesible mediante interfaz web. Es el software más utilizado en la actualidad para este propósito.

Con Jenkins, las organizaciones aceleran el proceso de desarrollo y entrega de software a través de la automatización. Mediante sus centenares de plugins, se puede implementar en diferentes etapas del ciclo de vida del desarrollo, como la compilación, la documentación, el testeo o el despliegue.



## TRIGGER 🚀

![Captura de pantalla de 2022-02-01 14-07-11](https://user-images.githubusercontent.com/62066419/151974099-89581a2b-07d7-4124-8d6e-e471c409e32e.png)



- Este TRIGGER  se encarga de verificar cada 3 horas si ha habido algún cambio en el repositorio, y si es así, ejecutar la pipeline.

## PARAMETROS 🚀

![Captura de pantalla de 2022-02-01 14-10-05](https://user-images.githubusercontent.com/62066419/151974434-c24afba5-5464-43df-91c0-d0d7edf658b1.png)

<br><br>
# STAGES
<br>
## INIT 🚀

En este primer stage instalaremos las dependencias necesarias, haremos un run build y ejecutaremos el servidor para dejarlo listo para las proximas stages. <br>
<br>
En este stage instalo una serie de dependencias necesarias para el stage de Cypress que veremops a continuación.

![Captura de pantalla de 2022-02-01 14-14-39](https://user-images.githubusercontent.com/62066419/151975140-92c43c87-d737-471c-9ded-46cd4b668fbe.png)





## LINTER🚀

<br>
En este stage ejecutaremos el linter del proyecto, en la primera ejecución nos saldrán una serie de errores en los archivos .js, los cuales hemos solucionado, guardaremos el resultado del test en una variable llamada LINT, para poder utilizarla luego.



![Captura de pantallsdsa de 2022-02-01 14-14-39](https://user-images.githubusercontent.com/62066419/151975807-34383c6a-62a2-41bc-9aff-f8fe9d756819.png)






## TESTS CYPRESS🚀
<br>

En este stage ejecutamos los test de cypress instalados en el proyecto, para realizar este stage hemops tenido que instalar una serie de dependecias(stage Init), luego hemos guardado el resultado de los test en una variable llamada 'test', para poder utilizarla luego. 


![Captura de pantalla de 2022-02-01 14-20-41](https://user-images.githubusercontent.com/62066419/151976173-42d3feea-26ce-40f8-a149-87d6a2cb3a3c.png)




