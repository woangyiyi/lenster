import { expect, test } from '@playwright/test';
import { APP_NAME } from 'data/constants';

import { BASE_URL } from '../../constants';

test.beforeEach(async ({ page }) => {
  await page.goto(`${BASE_URL}/contact`);
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(`Contact • ${APP_NAME}`);
});