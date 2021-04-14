export class PrensaPO {

    private prensa_nuevomiembro_button: string;
    private prensa_nombre_input: string;
    private prensa_apellido_input: string;
    private prensa_dni_input: string;
    private prensa_email_input: string;
    private prensa_telf_input: string;
    private prensa_crear_button: string;

    constructor() {
        this.prensa_nuevomiembro_button = '/html/body/div/div/section/section/a[1]';
        this.prensa_nombre_input = '#other_name';
        this.prensa_apellido_input = '#other_lastname';
        this.prensa_dni_input = '#other_dni';
        this.prensa_email_input = '#other_email';
        this.prensa_telf_input = '#other_telf';
        this.prensa_crear_button = '#new_other > div.form-actions > input';
    }

    // public validatePage(): void {
    //     browser.$(this.home_title_label).waitForExist();
    //     browser.$(this.home_email_input).waitForExist();
    // }

    public prensaNuevoMiembroButton(): WebdriverIO.Element {
        return browser.$(this.prensa_nuevomiembro_button);
    }

    public prensaNombreInput(): WebdriverIO.Element {
        return browser.$(this.prensa_nombre_input);
    }

    public prensaApellidoInput(): WebdriverIO.Element {
        return browser.$(this.prensa_apellido_input);
    }

    public prensaDniInput(): WebdriverIO.Element {
        return browser.$(this.prensa_dni_input);
    }

    public prensaEmailInput(): WebdriverIO.Element {
        return browser.$(this.prensa_email_input);
    }

    public prensaTelfInput(): WebdriverIO.Element {
        return browser.$(this.prensa_telf_input);
    }

    public prensaCrearButton(): WebdriverIO.Element {
        return browser.$(this.prensa_crear_button);
    }
}