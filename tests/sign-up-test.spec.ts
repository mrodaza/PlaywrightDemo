import { test, expect } from '@playwright/test';
import { GitHubLandingPage } from '../page-objects/git-hub-landing-page';
import { SignUpPage } from '../page-objects/sign-up-page';

test('getting started should contain table of contents', async ({ page }) => {
  const gitHubLanding = new GitHubLandingPage(page);
  const signUpLandingPage = new SignUpPage(page);

  const randomEmail = Math.random().toString(36).slice(-8)+ '@email.com';
  const randomPassword = Math.random().toString(36).slice(-8)+ '@!';
  const randomUserName = Math.random().toString(36).slice(-8);
  
  await gitHubLanding.goto();
  await gitHubLanding.gitHubIcon.isVisible();
  await expect(gitHubLanding.signUpButton).toBeVisible();
  await gitHubLanding.signUpButton.click();
  await expect(signUpLandingPage.enterEmailInput).toBeVisible();
  await signUpLandingPage.enterEmailInput.click();
  await signUpLandingPage.enterEmailInput.fill(randomEmail);
  await expect(signUpLandingPage.continueButton).toBeEnabled();
  await signUpLandingPage.continueButton.click()
  await expect(signUpLandingPage.passwordInput).toBeVisible();
  await signUpLandingPage.passwordInput.click
  await signUpLandingPage.passwordInput.fill(randomPassword);
  await expect(signUpLandingPage.continueButton).toBeEnabled();
  await signUpLandingPage.continueButton.click()

  await expect(signUpLandingPage.usernameInput).toBeVisible();
  await signUpLandingPage.usernameInput.click
  await signUpLandingPage.usernameInput.fill(randomUserName);
  await expect(signUpLandingPage.continueButton).toBeEnabled();
  await signUpLandingPage.continueButton.click();
  await expect(signUpLandingPage.emailPreferenceRadioButton).toBeVisible();

  await signUpLandingPage.continueButton.click();

  await expect(signUpLandingPage.verifyAccountText).toBeVisible();

});