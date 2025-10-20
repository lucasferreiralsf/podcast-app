import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { PodcastCard } from "./PodcastCard";
import { renderWithRouter } from "@/test/test-utils";
import type { PodcastListItem } from "@/domain/entities/podcast.entity";

describe("PodcastCard", () => {
  const mockPodcast: PodcastListItem = {
    id: "123456",
    name: "Test Podcast",
    artist: "Test Artist",
    image: "https://example.com/image.jpg",
  };

  it("should render podcast information correctly", () => {
    renderWithRouter("/", [
      {
        path: "/",
        element: <PodcastCard podcast={mockPodcast} />,
      },
    ]);

    expect(screen.getByText("Test Podcast")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();

    const image = screen.getByAltText("Test Podcast");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockPodcast.image);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/podcast/${mockPodcast.id}`);
  });

  it("should render the correct link to podcast detail page", () => {
    renderWithRouter("/", [
      {
        path: "/",
        element: <PodcastCard podcast={mockPodcast} />,
      },
    ]);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/podcast/123456");
  });

  it("should render image with lazy loading", () => {
    renderWithRouter("/", [
      {
        path: "/",
        element: <PodcastCard podcast={mockPodcast} />,
      },
    ]);

    const image = screen.getByAltText("Test Podcast");
    expect(image).toHaveAttribute("loading", "lazy");
  });
});
