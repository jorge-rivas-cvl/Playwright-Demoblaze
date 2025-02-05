import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { LoginPage } from '../pages/LoginPage';
 
test.describe('Sign up and Login Tests', () => {
  test('Automate the sign-up process', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
 
    await signUpPage.navigate();
    await signUpPage.openSignUpModal();
    await signUpPage.fillSignUpForm('aasdfUsuarioDePrueba1239691', 'Contrase1012');
    await signUpPage.submitSignUp();
    await signUpPage.verifySignUpModalHidden();
  });
 
  test('Automate the login process', async ({ page }) => {
    const loginPage = new LoginPage(page);
 
    await loginPage.navigate();
    await loginPage.openLoginModal();
    await loginPage.fillLoginForm('aasdfUsuarioDePrueba1239691', 'Contrase1012');
    await loginPage.submitLogin();
    await loginPage.verifyUserLoggedIn();
  });
});