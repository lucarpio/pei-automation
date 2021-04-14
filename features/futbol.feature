# @pei @run
Feature: Login a la aplicación como administrador
    Como usuario administrador de la liga de futbol
    Ingreso a la aplicación

    @login
    Scenario Outline: Login como administrador - <mail>
        Given se ingresa al sistema como administrador
        When se completa con mail "<mail>"
        And el valor del campo mail es igual a "<mail>"
        When se completa con la contraseña "<password>"
        Then el usuario intenta ingresar a la aplicación
        Then el usuario ingresa a la aplicación
        Then el usuario ciera sesion en la aplicación
        Then el usuario cerro la sesion


        Examples:
            | mail                   | password   |
            | test-admin@baufest.com | baufest123 |
    # | fail-admin@baufest.com | baufest123 |

    @login_fallido
    Scenario Outline: Login fallido como administrador - <mail>
        Given se ingresa al sistema como administrador
        When se completa con mail "<mail>"
        And el valor del campo mail es igual a "<mail>"
        When se completa con la contraseña "<password>"
        Then el usuario intenta ingresar a la aplicación
        But el usuario no ingresa a la aplicación

        Examples:
            | mail                   | password     |
            | fail-admin@baufest.com | nobaufest123 |