export class DashboardPO {
    private dashboard_dni_input: string;
    private dashboard_mensaje_label: string;
    private dashboard_jugadorasF_label: string;
    private dashboard_prensa_button: string;
    private dashboard_division_button: string;

    constructor() {
        this.dashboard_dni_input = '#dni';
        this.dashboard_mensaje_label = '/html/body/div/div/section/section/div[1]/div';
        this.dashboard_jugadorasF_label = '/html/body/div/div/section/section/div[2]/div/div[1]/p';
        this.dashboard_prensa_button = '/html/body/div/aside/section/ul/li[10]/a';
        this.dashboard_division_button = '/html/body/div/aside/section/ul/li[12]/a';
    }

    public validatePage(): void {
        browser.$(this.dashboard_dni_input).waitForExist();
        browser.$(this.dashboard_mensaje_label).waitForExist();
        browser.$(this.dashboard_jugadorasF_label).waitForExist();

    }

    public dashboardDniInput(): WebdriverIO.Element {
        return browser.$(this.dashboard_dni_input);
    }

    public dashboardMensajeLabel(): WebdriverIO.Element {
        return browser.$(this.dashboard_mensaje_label);
    }
    public dashboardJugadorasFLabel(): WebdriverIO.Element {
        return browser.$(this.dashboard_jugadorasF_label);
    }

    public dashboardPrensaButton(): WebdriverIO.Element {
        return browser.$(this.dashboard_prensa_button);
    }
    public dashboardDivisionButton(): WebdriverIO.Element {
        return browser.$(this.dashboard_division_button);
    }
}

