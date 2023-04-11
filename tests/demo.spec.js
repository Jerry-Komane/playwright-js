
const { test, expect } = require('@playwright/test');

const url = 'https://www.saucedemo.com/';

test('Login test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user')
  await page.fill('id=password', 'secret_sauce');


});

