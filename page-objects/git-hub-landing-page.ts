import { expect, type Locator, type Page } from '@playwright/test';

export class GitHubLandingPage {
  readonly page: Page;
  readonly signUpButton: Locator;
  readonly gitHubIcon: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByRole('link', { name: 'Sign up' })
    this.gitHubIcon = page.getByLabel('Homepage', { exact: true })

    
  }

  async goto() {
    await this.page.goto('https://github.com/');
  }

  
}