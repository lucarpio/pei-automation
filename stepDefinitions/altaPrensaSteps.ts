import faker from 'faker';
import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { DashboardPO } from '../pages/dashboardPO';
import { PrensaPO } from '../pages/prensaPO';

const dashboard_page: DashboardPO = new DashboardPO();
const prensa_page: PrensaPO = new PrensaPO();
const random = faker.random.number(999999999);

When(/^Selecciona el boton personal$/, () => {
    dashboard_page.dashboardPrensaButton().click();
});

Then(/^El usuario ve el panel de prensa$/, () => {
    browser.$('/html/body/div/div/section/section/div/h1').waitForExist();
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admin/others');
});

Then(/^Selecciona nuevo miembro$/, () => {
    prensa_page.prensaNuevoMiembroButton().waitForExist();
    prensa_page.prensaNuevoMiembroButton().click();
});

Then(/^Visualiza el formulario$/,() => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admin/others/new');
});

When(/^Completa los datos "(.*?)", "(.*?)"$/, (nom: string, apellido: string) => {
    prensa_page.prensaNombreInput().setValue(nom+faker.random.number(999));
    prensa_page.prensaApellidoInput().setValue(apellido+faker.random.number(999));
    prensa_page.prensaDniInput().setValue(faker.random.number(9999999));
    prensa_page.prensaEmailInput().setValue("correo"+random+"@mail.com");
    prensa_page.prensaTelfInput().setValue(random);
});

Then(/^Se Crea el miembro$/,() => {
    prensa_page.prensaCrearButton().click();
});

Then(/^Vuelve a lista de miembros$/,() => {
    browser.$('/html/body/div/div/section/section/a[3]').click();
});

Then(/^Visualiza lista de prensa$/,() => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admin/others');
});

