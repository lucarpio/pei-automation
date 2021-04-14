Feature: Alta de division

    Nueva alta personal

    Background: Se inicia sesion como administrador
        Given el usuario se logueo correctamente con el mail "test-admin@baufest.com" y la contraseña "baufest123"

    @alta_personal @run
    Scenario Outline: Se da de alta a nueva division

        When selecciona el boton division
        # /html/body/div/aside/section/ul/li[12]/a
        Then se visualiza ve el panel de divisiones
        # https://futbolveterano.herokuapp.com/es/admin/divisions
        Then selecciona nueva division
        # /html/body/div/div/section/section/div[2]/a
        Then visualiza el formulario division
        # https://futbolveterano.herokuapp.com/es/admin/divisions/new NO PONER
        When completa los datos nombre y descripcion
        # #division_title
        # #division_description
        Then se Crea la division
        # //*[@id="new_division"]/div[2]/input
        Then previsualiza datos de division
        # /html/body/div/div/section/section/div/div  CONTAINS Division Creada
        Then Vuelve a lista de divisiones
        # /html/body/div/div/section/section/a[2]
        And Visualiza lista de divisiones
        # https://futbolveterano.herokuapp.com/es/admin/divisions
        # /html/body/div/div/section/section/div[1]/h1 CONTAINS Lista de Divisiones
        Then valida la division creada

        Examples:
            | nombre    | Apellido  |
            | Christian | Ape       |


            # browser.$$('//*[@id="new_division"]/div[1]/div[3]/span')[1]
            # LISTA DE LOS CHECKBOX
            # //*[@id="new_division"]/div[1]/div[3]/span[1]
            # //*[@id="new_division"]/div[1]/div[3]/span[2]
            # //*[@id="new_division"]/div[1]/div[3]/span[3]