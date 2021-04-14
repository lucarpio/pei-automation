import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { HomePO } from '../pages/homePO';

const home_page: HomePO = new HomePO();

Given(/^se ingresa al sistema como administrador$/, () => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
});

Given(/^el usuario se logueo correctamente con el mail "(.*?)" y la contraseña "(.*?)"$/, (mail: string, password: string) => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
    // home_page.validatePage();
    home_page.homeEmailInput().setValue(mail);
    home_page.homePasswordInput().setValue(password);
    browser.$('//*[@name="commit"]').click();
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
});

When(/^se completa con mail "(.*?)"$/, (mail: string) => {
    // browser.$('#admin_email').setValue(mail);
    home_page.homeEmailInput().setValue(mail);
});

When(/^el valor del campo mail es igual a "(.*?)"$/, (mail: string) => {
    expect(home_page.homeEmailInput().getValue()).to.be.equal(mail);
});

When(/^se completa con la contraseña "(.*?)"$/, (password: string) => {
    home_page.homePasswordInput().setValue(password);
});

Then(/^el usuario intenta ingresar a la aplicación$/, () => {
    browser.$('//*[@name="commit"]').click();
});

Then(/^el usuario ingresa a la aplicación$/, () => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
});
Then(/^el usuario ciera sesion en la aplicación$/, () => {
    browser.$('body > div > header > nav > div > ul > li > a').click();
    browser.$('/html/body/div/header/nav/div/ul/li/ul/li[2]/div/a').click();
});
Then(/^el usuario cerro la sesion$/, () => {
    browser.$('#body > div:nth-child(2) > div').waitForExist();
    expect(browser.$('#body > div:nth-child(2) > div').getText()).to.be.contains('Cerraste sesión correctamente.');
});

When(/^el usuario no ingresa a la aplicación$/, () => {
    expect(browser.$('//*[@id="body"]/div/div').getText()).to.be.contains('Email o contraseña inválidos.')
});