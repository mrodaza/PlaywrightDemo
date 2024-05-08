import { expect, type Locator, type Page } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly signUpButton: Locator;
    readonly enterEmailInput: Locator;
    readonly continueButton: Locator;
    readonly passwordInput: Locator;
    readonly usernameInput: Locator;
    readonly emailPreferenceRadioButton: Locator;

    readonly verifyAccountText: Locator;
    
    constructor(page: Page) {
      this.page = page;
      this.signUpButton = page.getByRole('link', { name: 'Sign up' })
      this.enterEmailInput = page.getByLabel('Enter your email*')
      this.continueButton = page.getByRole('button', { name: 'Continue' })
  
      this.passwordInput = page.getByLabel('Create a password*')
      this.usernameInput = page.getByLabel('Enter a username*')
      this.emailPreferenceRadioButton = page.getByLabel('Receive occasional product')

      this.verifyAccountText = page.getByText('Verify your account')


    }

}