import faker from 'faker';
import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { DashboardPO } from '../pages/dashboardPO';
import { DivisionPO } from '../pages/divisionPO';

const dashboard_page: DashboardPO = new DashboardPO();
const division_page: DivisionPO = new DivisionPO();
const random = faker.random.number(99999);
const casilla = faker.random.number(11);

When(/^selecciona el boton division$/, () => {
    dashboard_page.dashboardDivisionButton().waitForExist();
    dashboard_page.dashboardDivisionButton().click();
});

Then(/^se visualiza ve el panel de divisiones$/, () => {
    division_page.divisionTituloLabel().waitForExist();
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admin/divisions');
});

Then(/^selecciona nueva division$/, () => {
    division_page.divisionNuevaButton().waitForExist();
    division_page.divisionNuevaButton().click();
});

Then(/^visualiza el formulario division$/,() => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admin/divisions/new');
});

When(/^completa los datos nombre y descripcion$/, () => {
    division_page.divisionNombreInput().setValue("Christian"+random);
    division_page.divisionDescInput().setValue("Descripcion"+random);
    browser.$('#division_categories_'+ faker.random.number(11)).click();
});

Then(/^se Crea la division$/,() => {
    division_page.divisionCrearButton().click();
});

Then(/^previsualiza datos de division$/,() => {
    expect(division_page.divisionRevisionLabel().getText()).to.be.contains('Division Creada');
});

Then(/^Vuelve a lista de divisiones$/,() => {
    division_page.divisionBackButton().click()
});

Then(/^Visualiza lista de divisiones$/,() => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admin/divisions');
    expect(division_page.divisionTituloLabel().getText()).to.be.contains('Lista de Divisiones');
});
