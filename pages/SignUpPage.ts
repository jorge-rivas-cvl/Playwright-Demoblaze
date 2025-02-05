import { Page, Locator, expect } from '@playwright/test';
 
export class SignUpPage {
  readonly page: Page;
  readonly signUpLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signUpButton: Locator;
  readonly modal: Locator;
 
  constructor(page: Page) {
this.page = page;
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.modal = page.locator('h5[id="signInModalLabel"]');
  }
 
  async navigate() {
await this.page.goto('https://www.demoblaze.com/');
  }
 
  async openSignUpModal() {
await this.signUpLink.click();
  }
 
  async fillSignUpForm(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }
 
  async submitSignUp() {
await this.signUpButton.click();
  }
 
  async verifySignUpModalHidden() {
    await expect(this.modal).toBeHidden();
  }
}