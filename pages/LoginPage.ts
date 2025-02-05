import { Page, Locator, expect } from '@playwright/test';
 
export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutLink: Locator;
 
  constructor(page: Page) {
this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }
 
  async navigate() {
await this.page.goto('https://www.demoblaze.com/');
  }
 
  async openLoginModal() {
await this.loginLink.click();
  }
 
  async fillLoginForm(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }
 
  async submitLogin() {
await this.loginButton.click();
  }
 
  async verifyUserLoggedIn() {
    await expect(this.logoutLink).toBeVisible();
  }
}