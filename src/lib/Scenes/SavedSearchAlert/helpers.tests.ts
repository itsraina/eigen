import { SearchCriteriaAttributes } from "lib/Components/ArtworkFilter/SavedSearch/types"
import { __globalStoreTestUtils__ } from "lib/store/GlobalStore"
import { clearDefaultAttributes, getNamePlaceholder } from "./helpers"
import { SavedSearchPill } from "./SavedSearchAlertModel"

describe("getNamePlaceholder", () => {
  it("returns the singular form for the filter label", () => {
    const pills: SavedSearchPill[] = [{ label: "One", paramName: "materialsTerms", value: "one" }]
    expect(getNamePlaceholder("artistName", pills)).toBe("artistName • 1 filter")
  })

  it("returns the plural form for the filter label", () => {
    const pills: SavedSearchPill[] = [
      { label: "One", paramName: "materialsTerms", value: "one" },
      { label: "Two", paramName: "materialsTerms", value: "two" },
    ]
    expect(getNamePlaceholder("artistName", pills)).toBe("artistName • 2 filters")
  })

  it("returns the correct number of filters when artist pill is shown", () => {
    __globalStoreTestUtils__?.injectFeatureFlags({ AREnableImprovedAlertsFlow: true })
    const pills: SavedSearchPill[] = [
      { label: "Artist Name", paramName: "artistID", value: "artistName" },
      { label: "One", paramName: "materialsTerms", value: "one" },
      { label: "Two", paramName: "materialsTerms", value: "two" },
    ]
    expect(getNamePlaceholder("artistName", pills)).toBe("artistName • 3 filters")
  })
})

describe("clearDefaultAttributes", () => {
  it("should remove all default values", () => {
    const attributes: SearchCriteriaAttributes = {
      materialsTerms: [],
      colors: [],
      priceRange: null,
      acquireable: null,
      sizes: ["SMALL", "MEDIUM"],
      atAuction: true,
      artistID: "artistID",
    }

    expect(clearDefaultAttributes(attributes)).toEqual({
      sizes: ["SMALL", "MEDIUM"],
      atAuction: true,
      artistID: "artistID",
    })
  })
})
