import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { ProductsPage } from '../pages/ProductsPage.js'

test('Remover produto do carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)

  await loginPage.goto()
  await loginPage.login('standard_user', 'secret_sauce')

  await productsPage.addBackpackToCart()
  await productsPage.goToCart()

  const removeButton = page.locator("[name='remove-sauce-labs-backpack']")
  await removeButton.click()

  const cartItems = page.locator('.cart_item')
  const count = await cartItems.count()
  expect(count).toBe(0)
})
