# @run


Feature: Alta de personal

    Nueva alta personal

    Background: Se inicia sesion como administrador
        Given el usuario se logueo correctamente con el mail "test-admin@baufest.com" y la contraseña "baufest123"

    @alta_personal @run
    Scenario Outline: Se da de alta a personal

        When Selecciona el boton personal
        # /html/body/div/aside/section/ul/li[10]/a
        Then El usuario ve el panel de prensa
        # https://futbolveterano.herokuapp.com/es/admin/others
        Then Selecciona nuevo miembro
        # /html/body/div/div/section/section/a[1]
        Then Visualiza el formulario
        When Completa los datos "<nombre>", "<Apellido>"
        # #other_name
        # #other_lastname
        # #other_dni
        # #other_email
        # #other_telf
        Then Se Crea el miembro
        # //*[@id="new_other"]/div[2]/input
        Then Vuelve a lista de miembros
        # /html/body/div/div/section/section/a[3]
        And Visualiza lista de prensa
        # https://futbolveterano.herokuapp.com/es/admin/others

        Examples:
            | nombre    | Apellido  |
            | Christian | Ape       |