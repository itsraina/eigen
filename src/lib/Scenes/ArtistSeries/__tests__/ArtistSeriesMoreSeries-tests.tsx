import { ContextModule, OwnerType } from "@artsy/cohesion"
import {
  ArtistSeriesMoreSeriesTestsQuery,
  ArtistSeriesMoreSeriesTestsQueryRawResponse,
} from "__generated__/ArtistSeriesMoreSeriesTestsQuery.graphql"
import { ArtistSeriesListItem } from "lib/Scenes/ArtistSeries/ArtistSeriesListItem"
import {
  ArtistSeriesMoreSeries,
  ArtistSeriesMoreSeriesFragmentContainer,
} from "lib/Scenes/ArtistSeries/ArtistSeriesMoreSeries"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import React from "react"
import { TouchableOpacity } from "react-native"
import { graphql, QueryRenderer } from "react-relay"
import { act } from "react-test-renderer"
import { useTracking } from "react-tracking"
import { createMockEnvironment } from "relay-test-utils"

jest.mock("lib/NativeModules/SwitchBoard", () => ({
  presentNavigationViewController: jest.fn(),
}))

jest.unmock("react-relay")

const trackEvent = useTracking().trackEvent

describe("ArtistSeriesMoreSeries", () => {
  let env: ReturnType<typeof createMockEnvironment>

  beforeEach(() => {
    env = createMockEnvironment()
  })

  const TestRenderer = () => (
    <QueryRenderer<ArtistSeriesMoreSeriesTestsQuery>
      environment={env}
      query={graphql`
        query ArtistSeriesMoreSeriesTestsQuery @raw_response_type {
          artistSeries(id: "pumpkins") {
            artist: artists(size: 1) {
              ...ArtistSeriesMoreSeries_artist
            }
          }
        }
      `}
      variables={{}}
      render={({ props, error }) => {
        if (props?.artistSeries) {
          const artist = props.artistSeries.artist?.[0]
          return (
            <ArtistSeriesMoreSeriesFragmentContainer
              artist={artist}
              artistSeriesHeader="This is a header"
              currentArtistSeriesExcluded
              contextScreenOwnerId={"artist-series-id"}
              contextScreenOwnerSlug={"artist-series-slug"}
              contextScreenOwnerType={OwnerType.artistSeries}
              contextModule={ContextModule.artistSeriesRail}
            />
          )
        } else if (error) {
          console.log(error)
        }
      }}
    />
  )

  const getWrapper = (testFixture: any) => {
    const tree = renderWithWrappers(<TestRenderer />)
    act(() => {
      env.mock.resolveMostRecentOperation({
        errors: [],
        data: {
          ...testFixture,
        },
      })
    })
    return tree
  }

  it("renders without throwing an error", () => {
    const wrapper = getWrapper(ArtistSeriesMoreSeriesFixture)
    expect(wrapper.root.findAllByType(ArtistSeriesMoreSeries)).toHaveLength(1)
  })

  it("renders the correct header text", () => {
    const wrapper = getWrapper(ArtistSeriesMoreSeriesFixture)
    expect(wrapper.root.findByProps({ "data-test-id": "header" }).props.children).toBe("This is a header")
  })

  describe("with at least one other series related to the artist to show", () => {
    it("renders the related artist series", () => {
      const wrapper = getWrapper(ArtistSeriesMoreSeriesFixture)
      expect(wrapper.root.findAllByType(ArtistSeriesListItem).length).toBe(5)
    })

    it("tracks an event on click", () => {
      const wrapper = getWrapper(ArtistSeriesMoreSeriesFixture)
      const artistSeriesButton = wrapper.root.findAllByType(ArtistSeriesListItem)[0].findByType(TouchableOpacity)

      act(() => artistSeriesButton.props.onPress())

      expect(trackEvent).toHaveBeenCalledWith({
        action: "tappedArtistSeriesGroup",
        context_module: "artistSeriesRail",
        context_screen_owner_id: "artist-series-id",
        context_screen_owner_slug: "artist-series-slug",
        context_screen_owner_type: "artistSeries",
        destination_screen_owner_id: "da821a13-92fc-49c2-bbd5-bebb790f7020",
        destination_screen_owner_slug: "yayoi-kusama-plums",
        destination_screen_owner_type: "artistSeries",
        horizontal_slide_position: 0,
        curation_boost: true,
        type: "thumbnail",
      })
    })
  })

  describe("with no other series related to the artist to show", () => {
    it("does not render", () => {
      const wrapper = getWrapper(ArtistSeriesMoreSeriesNoSeriesFixture)
      expect(wrapper.root.findAllByType(ArtistSeriesListItem).length).toBe(0)
    })
  })

  describe("with greater than four series associated with an artist", () => {
    it("renders a view all button with a total count for all the series associated with the artist", () => {
      const wrapper = getWrapper(ArtistSeriesMoreSeriesFixture)
      expect(wrapper.root.findByProps({ "data-test-id": "viewAll" }).props.children).toBe("View All (6)")
    })
  })

  describe("with fewer than four series associated with an artist", () => {
    it("does not render a view all button", () => {
      const wrapper = getWrapper(ArtistSeriesMoreSeriesBelowViewAllThresholdFixture)
      expect(wrapper.root.findAllByProps({ "data-test-id": "viewAll" })).toHaveLength(0)
    })
  })
})

const ArtistSeriesMoreSeriesNoSeriesFixture: ArtistSeriesMoreSeriesTestsQueryRawResponse = {
  artistSeries: {
    artist: [
      {
        id: "abc123",
        internalID: "ja292jf92",
        artistSeriesConnection: {
          totalCount: 0,
          edges: [],
        },
      },
    ],
  },
}

const ArtistSeriesMoreSeriesFixture: ArtistSeriesMoreSeriesTestsQueryRawResponse = {
  artistSeries: {
    artist: [
      {
        id: "abc123",
        internalID: "jahfadf981",
        artistSeriesConnection: {
          totalCount: 5,
          edges: [
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-plums",
                internalID: "da821a13-92fc-49c2-bbd5-bebb790f7020",
                title: "plums",
                artworksCountMessage: "40 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/bLKO-OQg8UOzKuKcKxXeWQ/main.jpg",
                },
              },
            },
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-apricots",
                internalID: "ecfa5731-9d64-4bc2-9f9f-c427a9126064",
                title: "apricots",
                artworksCountMessage: "35 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/Oymspr9llGzRC-lTZA8htA/main.jpg",
                },
              },
            },
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-pumpkins",
                internalID: "58597ef5-3390-406b-b6d2-d4e308125d0d",
                title: "Pumpkins",
                artworksCountMessage: "25 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/dL3hz4h6f_tMHQjVHsdO4w/medium.jpg",
                },
              },
            },
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-apples",
                internalID: "5856ee51-35eb-4b75-bb12-15a1cd7e012e",
                title: "apples",
                artworksCountMessage: "4 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/Nv63KiPQo91g2-W2V3lgAw/main.jpg",
                },
              },
            },
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-dragonfruit",
                internalID: "5856ee51-35eb-4b75-bb12-15a1cd18161",
                title: "dragonfruit",
                artworksCountMessage: "8 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/Nv63KiPQo91g2-W2V3lgAw/main.jpg",
                },
              },
            },
          ],
        },
      },
    ],
  },
}

const ArtistSeriesMoreSeriesBelowViewAllThresholdFixture: ArtistSeriesMoreSeriesTestsQueryRawResponse = {
  artistSeries: {
    artist: [
      {
        id: "abc123",
        internalID: "jahfadf981",
        artistSeriesConnection: {
          totalCount: 3,
          edges: [
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-pumpkins",
                internalID: "58597ef5-3390-406b-b6d2-d4e308125d0d",
                title: "Pumpkins",
                artworksCountMessage: "25 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/dL3hz4h6f_tMHQjVHsdO4w/medium.jpg",
                },
              },
            },
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-apples",
                internalID: "5856ee51-35eb-4b75-bb12-15a1cd7e012e",
                title: "apples",
                artworksCountMessage: "4 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/Nv63KiPQo91g2-W2V3lgAw/main.jpg",
                },
              },
            },
            {
              node: {
                featured: true,
                slug: "yayoi-kusama-dragonfruit",
                internalID: "5856ee51-35eb-4b75-bb12-15a1cd18161",
                title: "dragonfruit",
                artworksCountMessage: "8 available",
                image: {
                  url: "https://d32dm0rphc51dk.cloudfront.net/Nv63KiPQo91g2-W2V3lgAw/main.jpg",
                },
              },
            },
          ],
        },
      },
    ],
  },
}
