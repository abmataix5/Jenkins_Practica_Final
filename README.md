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


# STAGES

## INIT 🚀

En este primer stage instalaremos las dependencias necesarias, haremos un run build y ejecutaremos el servidor para dejarlo listo para las proximas stages. <br>
<br>
En este stage instalo una serie de dependencias necesarias para el stage de Cypress que veremops a continuación.

![Captura de pantalla de 2022-02-01 14-14-39](https://user-images.githubusercontent.com/62066419/151975140-92c43c87-d737-471c-9ded-46cd4b668fbe.png)





## LINTER🚀

![Captura de pantalla de 2022-01-21 12-41-31](https://user-images.githubusercontent.com/62066419/150521641-814c7ef4-bb63-4138-ac48-e91b43b83447.png)


#### STEPS

- Download a single artifact : Se encarga de de obtener el artifact almacenado en el job anterior<br><br>
- output-artifact : Imprime el artifact en nuestro archivo result.txt<br><br>
- Actualizar result: Nos crea un artifact llamado result.txt, con los resultados del test.<br><br>
- Action Update readme: Ejecuta nuestra action personalizada que veremos a continuación, sen encarga de actualizar el archivo Readme.md con los resutados del test.<br><br>
- Push cambios Readme: Realiza un commit y un push para actualizar los cambios en el repositorio remoto.<br><br>

#### ACTION BADGE Y ARCHIVO .JS

action.yaml

![Captura de pantalla de 2022-01-21 13-07-52](https://user-images.githubusercontent.com/62066419/150524752-95d2c900-3e21-4f2f-ae0c-6178b7ce0a2a.png)
<br><br>
Archivo .js para escribir en el readme los reusltados del test.

![Captura de pantalla de 2022-01-21 13-07-55](https://user-images.githubusercontent.com/62066419/150524766-71d11c7b-9ff3-4a82-ba7b-6a6d8b6f0678.png)



Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->

## TEST 🚀

![Captura de pantalla dAe 2022-01-21 12-41-31](https://user-images.githubusercontent.com/62066419/150521657-d5ff1231-3732-4ddd-bff4-7e8adcd6e70c.png)

<br>

#### STEPS

- Desplegar App en vercel: Ejecuta una action externa, siguiendo su documentación oficial podremos desplegar nuestra app en Vercel.

### CONTRASEÑA GOOGLE PARA APLICACIONES

- Creamos una cuenta en Vercel y creamos un token.<br><br>
-Instalamos vercen el el proyecto, seguidamente nos creara un archivo llamado project.json, en el que estaran todos los tokens necesarios para desplegar nuestra app en Vercel.<br><br>
- Añadiremos estos tokens a los secrets de GitHub para poder obtenerlos desde el .yml.<br><br>

![Captura de pantalla de 2022-01-21 13-18-38](https://user-images.githubusercontent.com/62066419/150525988-d8689ca1-c70f-4c24-8833-1ec46cf8c0aa.png)



#### REULTADO 

![Captura de pantalla de 2022-01-21 13-17-22](https://user-images.githubusercontent.com/62066419/150525858-2c096447-e846-4b41-b20f-7a6fc6c33801.png)




## UPDATE README 🚀






