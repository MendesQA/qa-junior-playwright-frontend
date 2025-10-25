import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { ProductsPage } from '../pages/ProductsPage.js'
import { CartPage } from '../pages/CartPage.js'
import { CheckoutPage } from '../pages/CheckoutPage.js'

test('Finalizar compra com dois produtos', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.goto()
  await loginPage.login('standard_user', 'secret_sauce')

  await productsPage.addBackpackToCart()
  await productsPage.addBikeLightToCart()

  await productsPage.goToCart()
  await cartPage.startCheckout()

  await checkoutPage.fillCheckoutInfo('Gabriel', 'Mendes', '60347030')
  await checkoutPage.continueCheckout()
  await checkoutPage.finishCheckout()

  const title = await checkoutPage.getCheckoutCompleteTitle()
  expect(title).toBe('Thank you for your order!')
})
