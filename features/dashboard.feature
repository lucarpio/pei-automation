# @pei @run
Feature: Se testea la aplicacion

    Background: Se inicia sesion como administrador
        Given el usuario se logueo correctamente con el mail "test-admin@baufest.com" y la contraseña "baufest123"

    @dashboard
    Scenario: Validacion de pagina dashboard para usuario administrador

        When se muestra el dashboard
        Then se muestra el mensaje "Iniciaste sesión correctamente."
        And se muestra un box con el texto "Jugadoras Fichadas Activas - 2021"
        And se muestra el input dni