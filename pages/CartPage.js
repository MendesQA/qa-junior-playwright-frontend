export class CartPage {
  
  constructor(page) {
    this.page = page
    this.removeBackpackButton = page.locator("[name='remove-sauce-labs-backpack']")
    this.cartItems = page.locator('.cart_item')
    this.checkoutButton = page.locator('[data-test="checkout"]')
  }

  async removeBackpack() {
    await this.removeBackpackButton.click()
  }

  async getCartItemsCount() {
    return await this.cartItems.count()
  }

  async startCheckout() {
    await this.checkoutButton.click()
  }
}
