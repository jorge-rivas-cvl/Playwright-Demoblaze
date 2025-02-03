import {expect, test} from '@playwright/test'

test.describe('Sign up and Login Tests', () =>{
    test('Automate the sign-up process', async ({page}) => {

      await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Sign up' }).click();
      await page.getByRole('textbox', { name: 'Username:' }).click();
      await page.getByRole('textbox', { name: 'Username:' }).fill('aasdfUsuarioDePrueba1239691');
      await page.getByRole('textbox', { name: 'Password:' }).click();
      await page.getByRole('textbox', { name: 'Password:' }).fill('Contrase1012');
      await page.getByRole('button', { name: 'Sign up' }).click();
      const modal = page.locator('h5[id="signInModalLabel"]');
      await expect(modal).toBeHidden();
    });

    test('Automate the login process', async({page}) => {
      await page.goto('https://www.demoblaze.com/'); 
      await page.getByRole('link', { name: 'Log in' }).click();
      await page.locator('#loginusername').click();
      await page.locator('#loginusername').fill('asdfUsuarioDePrueba1239691');
      await page.locator('#loginpassword').click();
      await page.locator('#loginpassword').fill('Contrase1012');
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    });
    
});