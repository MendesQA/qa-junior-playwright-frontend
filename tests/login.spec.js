import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'

test.describe('Fluxo de Login', () => {

  test('Login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')

    await expect(page).toHaveURL(/inventory/)
  })

  test('Login com dados incorretos', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('usuario_invalido', 'senha_errada')

    const errorMessage = await loginPage.getErrorMessage()
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service')
  })
})
