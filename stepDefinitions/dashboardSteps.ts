import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { DashboardPO } from '../pages/DashboardPO';
import { HomePO } from '../pages/homePO';

const dashboard_page: DashboardPO = new DashboardPO();
const home_page: HomePO = new HomePO();

When(/^se muestra el dashboard$/, () => {
    dashboard_page.validatePage();
});

Then(/^se muestra el mensaje "(.*?)"$/, (mensaje: string) => {
    expect(dashboard_page.dashboardMensajeLabel().getText()).to.be.contains(mensaje);
});

Then(/^se muestra un box con el texto "(.*?)"$/, (texto: string) => {
    expect(dashboard_page.dashboardJugadorasFLabel().getText()).to.be.contains(texto);
});

Then(/^se muestra el input dni$/, () => {
    dashboard_page.dashboardDniInput().waitForExist();
    dashboard_page.dashboardDniInput().isExisting();
});


// When(/^se completa con la contraseña "(.*?)"$/, (password: string) => {
//     browser.$('#admin_password').setValue(password);
// });