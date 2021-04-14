export class DivisionPO {
    private division_nueva_button: string;
    private division_nombre_input: string;
    private division_descripcion_input: string;
    private division_crear_button: string;
    private division_revision_label: string;
    private division_back_button: string;
    private division_titulo_label: string;

    constructor() {
        this.division_nueva_button = '/html/body/div/div/section/section/div[2]/a';
        this.division_nombre_input = '#division_title';
        this.division_descripcion_input = '#division_description';
        this.division_crear_button = '//*[@id="new_division"]/div[2]/input';
        this.division_revision_label = '/html/body/div/div/section/section/div/div';
        this.division_back_button = '/html/body/div/div/section/section/a[2]';
        this.division_titulo_label = '/html/body/div/div/section/section/div[1]/h1';
    }

    public validatePage(): void {
        browser.$(this.division_nueva_button).waitForExist();
    }

    public divisionNuevaButton(): WebdriverIO.Element {
        return browser.$(this.division_nueva_button);
    }

    public divisionNombreInput(): WebdriverIO.Element {
        return browser.$(this.division_nombre_input);
    }

    public divisionDescInput(): WebdriverIO.Element {
        return browser.$(this.division_descripcion_input);
    }

    public divisionCrearButton(): WebdriverIO.Element {
        return browser.$(this.division_crear_button);
    }

    public divisionRevisionLabel(): WebdriverIO.Element {
        return browser.$(this.division_revision_label);
    }

    public divisionBackButton(): WebdriverIO.Element {
        return browser.$(this.division_back_button);
    }

    public divisionTituloLabel(): WebdriverIO.Element {
        return browser.$(this.division_titulo_label);
    }
}