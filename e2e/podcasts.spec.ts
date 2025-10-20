import { test, expect } from "@playwright/test";

test.describe("Podcast App", () => {
  test("should display podcast list and navigate to podcast detail", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Discover Podcasts" })
    ).toBeVisible();

    await page.waitForSelector("a[href^='/podcast/']", { timeout: 10000 });

    const podcastCards = page.locator("a[href^='/podcast/']");
    const count = await podcastCards.count();
    expect(count).toBeGreaterThan(0);

    const firstPodcast = podcastCards.first();
    await expect(firstPodcast).toBeVisible();

    await firstPodcast.click();

    await page.waitForURL(/\/podcast\/\d+/, { timeout: 10000 });

    expect(page.url()).toMatch(/\/podcast\/\d+/);

    await page.waitForSelector("aside", { timeout: 10000 });

    const pageContent = await page.textContent("body");
    expect(pageContent).toBeTruthy();

    await expect(page.getByText(/episodes/i)).toBeVisible({
      timeout: 10000,
    });

    await expect(
      page.getByRole("button", { name: /back to podcasts/i })
    ).toBeVisible();
  });
});
