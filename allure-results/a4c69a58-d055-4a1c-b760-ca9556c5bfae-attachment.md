# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SmokeTest\SmokeTest.spec.js >> Smoke Suite >> Smoke Test - Complete Purchase Flow
- Location: SmokeTest\SmokeTest.spec.js:15:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_name')
Expected: "Sauce Labs Backpack"
Error: strict mode violation: locator('.inventory_item_name') resolved to 6 elements:
    1) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Backpack</div> aka locator('[data-test="item-4-title-link"]')
    2) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bike Light</div> aka locator('[data-test="item-0-title-link"]')
    3) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div> aka locator('[data-test="item-1-title-link"]')
    4) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Fleece Jacket</div> aka locator('[data-test="item-5-title-link"]')
    5) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Onesie</div> aka locator('[data-test="item-2-title-link"]')
    6) <div class="inventory_item_name " data-test="inventory-item-name">Test.allTheThings() T-Shirt (Red)</div> aka locator('[data-test="item-3-title-link"]')

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.inventory_item_name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e15]: Your Cart
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Backpack" [ref=e25]:
                - generic [ref=e26]: Sauce Labs Backpack
              - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
              - generic [ref=e28]:
                - generic [ref=e29]: $29.99
                - button "Remove" [ref=e30] [cursor=pointer]
        - generic [ref=e31]:
          - button "Continue Shopping" [ref=e32] [cursor=pointer]
          - button "Checkout" [ref=e33] [cursor=pointer]
  - contentinfo [ref=e34]:
    - list [ref=e35]:
      - listitem [ref=e36]:
        - link "X" [ref=e37]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e38]:
        - link "Facebook" [ref=e39]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e40]:
        - link "LinkedIn" [ref=e41]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e42]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  22  |     const checkout = new Checkout(page);
  23  |     const logout = new Logout(page);
  24  | 
  25  | 
  26  |     // ======================================================
  27  |     // TEST DATA
  28  |     // ======================================================
  29  | 
  30  |     const data = smokeData.smokeTests[0];
  31  | 
  32  | 
  33  |     // ======================================================
  34  |     // STEP 01 - LOGIN
  35  |     // ======================================================
  36  | 
  37  |     await test.step(
  38  |       'Step 01: Enter credential and login',
  39  |       async () => {
  40  | 
  41  |         await loginPage.login(
  42  |           data.username,
  43  |           data.password
  44  |         );
  45  | 
  46  |         await attachStepScreenshot(
  47  |           page,
  48  |           '01 - Enter credential and login'
  49  |         );
  50  | 
  51  |       }
  52  |     );
  53  | 
  54  | 
  55  |     // ======================================================
  56  |     // STEP 02 - VERIFY LOGIN / LANDING PAGE
  57  |     // ======================================================
  58  | 
  59  |     await test.step(
  60  |       'Step 02: Verify user is successfully logged in',
  61  |       async () => {
  62  | 
  63  |         await expect(page.locator('.title'))
  64  |           .toHaveText('Products');
  65  | 
  66  |         await attachStepScreenshot(
  67  |           page,
  68  |           '02 - Verify Products page after login'
  69  |         );
  70  | 
  71  |       }
  72  |     );
  73  | 
  74  | 
  75  |     // ======================================================
  76  |     // STEP 03 - ADD PRODUCT TO CART
  77  |     // ======================================================
  78  | 
  79  |     await test.step(
  80  |       'Step 03: Add Sauce Labs Backpack to cart',
  81  |       async () => {
  82  | 
  83  |         await checkout.addToCart();
  84  | 
  85  |         await attachStepScreenshot(
  86  |           page,
  87  |           '03 - Add Sauce Labs Backpack to cart'
  88  |         );
  89  | 
  90  |       }
  91  |     );
  92  | 
  93  | 
  94  |     // ======================================================
  95  |     // STEP 04 - OPEN SHOPPING CART
  96  |     // ======================================================
  97  | 
  98  |     await test.step(
  99  |       'Step 04: Open shopping cart',
  100 |       async () => {
  101 | 
  102 |         await checkout.openCart();
  103 | 
  104 |         await attachStepScreenshot(
  105 |           page,
  106 |           '04 - Open shopping cart'
  107 |         );
  108 | 
  109 |       }
  110 |     );
  111 | 
  112 | 
  113 |     // ======================================================
  114 |     // STEP 05 - VERIFY PRODUCT IN CART
  115 |     // ======================================================
  116 | 
  117 |     await test.step(
  118 |       'Step 05: Verify Sauce Labs Backpack is present in cart',
  119 |       async () => {
  120 | 
  121 |         await expect(checkout.productName)
> 122 |           .toHaveText(data.productName);
      |            ^ Error: expect(locator).toHaveText(expected) failed
  123 | 
  124 |         await attachStepScreenshot(
  125 |           page,
  126 |           '05 - Verify Sauce Labs Backpack is present in cart'
  127 |         );
  128 | 
  129 |       }
  130 |     );
  131 | 
  132 | 
  133 |     // ======================================================
  134 |     // STEP 06 - PROCEED TO CHECKOUT
  135 |     // ======================================================
  136 | 
  137 |     await test.step(
  138 |       'Step 06: Proceed to checkout',
  139 |       async () => {
  140 | 
  141 |         await checkout.clickCheckout();
  142 | 
  143 |         await attachStepScreenshot(
  144 |           page,
  145 |           '06 - Proceed to checkout'
  146 |         );
  147 | 
  148 |       }
  149 |     );
  150 | 
  151 | 
  152 |     // ======================================================
  153 |     // STEP 07 - ENTER FIRST NAME
  154 |     // ======================================================
  155 | 
  156 |     await test.step(
  157 |       'Step 07: Enter customer first name',
  158 |       async () => {
  159 | 
  160 |         await checkout.enterFirstName(
  161 |           data.firstName
  162 |         );
  163 | 
  164 |         await attachStepScreenshot(
  165 |           page,
  166 |           '07 - Enter customer first name'
  167 |         );
  168 | 
  169 |       }
  170 |     );
  171 | 
  172 | 
  173 |     // ======================================================
  174 |     // STEP 08 - ENTER LAST NAME
  175 |     // ======================================================
  176 | 
  177 |     await test.step(
  178 |       'Step 08: Enter customer last name',
  179 |       async () => {
  180 | 
  181 |         await checkout.enterLastName(
  182 |           data.lastName
  183 |         );
  184 | 
  185 |         await attachStepScreenshot(
  186 |           page,
  187 |           '08 - Enter customer last name'
  188 |         );
  189 | 
  190 |       } 
  191 |     );
  192 | 
  193 | 
  194 |     // ======================================================
  195 |     // STEP 09 - ENTER POSTAL CODE
  196 |     // ======================================================
  197 | 
  198 |     await test.step(
  199 |       'Step 09: Enter customer postal code',
  200 |       async () => {
  201 | 
  202 |         await checkout.enterPostalCode(
  203 |           data.postalCode
  204 |         );
  205 | 
  206 |         await attachStepScreenshot(
  207 |           page,
  208 |           '09 - Enter customer postal code'
  209 |         );
  210 | 
  211 |       }
  212 |     );
  213 | 
  214 | 
  215 |     // ======================================================
  216 |     // STEP 10 - CONTINUE TO ORDER OVERVIEW
  217 |     // ======================================================
  218 | 
  219 |     await test.step(
  220 |       'Step 10: Continue to order overview',
  221 |       async () => {
  222 | 
```