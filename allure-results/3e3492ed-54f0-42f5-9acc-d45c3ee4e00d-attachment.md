# Test info

- Name: element comparision
- Location: C:\Users\FATHIMA\playwright_proj\tests\scrshottest.spec.ts:16:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected)

  2001 pixels (ratio 0.04 of all image pixels) are different.

Expected: C:\Users\FATHIMA\playwright_proj\tests\scrshottest.spec.ts-snapshots\login-Google-Chrome-win32.png
Received: C:\Users\FATHIMA\playwright_proj\test-results\scrshottest-element-comparision-Google-Chrome\login-1-actual.png
    Diff: C:\Users\FATHIMA\playwright_proj\test-results\scrshottest-element-comparision-Google-Chrome\login-1-diff.png

Call log:
  - expect.toHaveScreenshot(login.png) with timeout 5000ms
    - verifying given screenshot expectation
  - waiting for locator('//*[@class="auth-form-body mt-3"]')
    - locator resolved to <div class="auth-form-body mt-3">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 2001 pixels (ratio 0.04 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('//*[@class="auth-form-body mt-3"]')
    - locator resolved to <div class="auth-form-body mt-3">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 2001 pixels (ratio 0.04 of all image pixels) are different.

    at C:\Users\FATHIMA\playwright_proj\tests\scrshottest.spec.ts:25:67
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#start-of-content"
- banner:
  - link "Homepage":
    - /url: https://github.com/
- main:
  - heading "Sign in to GitHub" [level=1]
  - text: Username or email address
  - textbox "Username or email address": pru.dev@gmail.com
  - text: Password
  - textbox "Password": pru.dev@gmail.com
  - link "Forgot password?":
    - /url: /password_reset
  - button "Sign in"
  - heading "Password login alternatives" [level=2]
  - paragraph:
    - button "Sign in with a passkey"
  - paragraph:
    - text: New to GitHub?
    - link "Create an account":
      - /url: /signup?source=login
- contentinfo:
  - list:
    - listitem:
      - link "Terms":
        - /url: https://docs.github.com/site-policy/github-terms/github-terms-of-service
    - listitem:
      - link "Privacy":
        - /url: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement
    - listitem:
      - link "Docs":
        - /url: https://docs.github.com
    - listitem:
      - link "Contact GitHub Support":
        - /url: https://support.github.com
    - listitem:
      - button "Manage cookies"
    - listitem:
      - button "Do not share my personal information"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('screenshot comparision', {tag : ['@smoke']}, async ({ page }, testInfo) => {
   4 |
   5 |   await page.goto('https://github.com/login');
   6 |   //await page.press('body', 'F5');
   7 |   await expect(page).toHaveScreenshot('mygit.png');
   8 |   await page.getByRole('textbox', { name: 'Username or email address' }).fill('pru.dev@gmail.com');
   9 |   await page.getByRole('textbox', { name: 'Password' }).fill('pru.dev@gmail.com');
  10 |   //await expect(page).toHaveScreenshot('mygit.png');
  11 |   await expect(page).toHaveScreenshot('mygit.png', {maxDiffPixels : 10});
  12 |
  13 |   page.close();
  14 | });
  15 |
  16 | test('element comparision', {tag : ['@smoke']}, async ({ page }, testInfo) => {
  17 |
  18 |   await page.goto('https://github.com/login');
  19 |   //await page.press('body', 'F5');
  20 |   await expect(page.locator('//*[@class="auth-form-body mt-3"]')).toHaveScreenshot('login.png');
  21 |
  22 |   await page.getByRole('textbox', { name: 'Username or email address' }).fill('pru.dev@gmail.com');
  23 |   await page.getByRole('textbox', { name: 'Password' }).fill('pru.dev@gmail.com');
  24 |   //await expect(page).toHaveScreenshot('mygit.png');
> 25 |   await expect(page.locator('//*[@class="auth-form-body mt-3"]')).toHaveScreenshot('login.png', {maxDiffPixels : 10});
     |                                                                   ^ Error: expect(locator).toHaveScreenshot(expected)
  26 |   
  27 |   page.close();
  28 | });
```