Feature: testing Koombea

Scenario: Búsqueda en Google

  Given Iniciar navegador
  Then Validamos si el titulo es "Google"
  And Existe el elemento de búsqueda por imagenes
  And Presionar click en imagenes
  And Validar si existe la barra de búsqueda
  And Realizar la búsqueda


  Scenario: Descargar Imagen

  Given Seleccionar imagen a descargar
  And descargar imagen
  And validar descarga de imagen en equipo