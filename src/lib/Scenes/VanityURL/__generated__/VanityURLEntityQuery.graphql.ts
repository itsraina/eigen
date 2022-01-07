/**
 * @generated SignedSource<<f01ef1bafb47ffcd10cb92607742849a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VanityURLEntityQuery$variables = {
  id: string;
};
export type VanityURLEntityQueryVariables = VanityURLEntityQuery$variables;
export type VanityURLEntityQuery$data = {
  readonly vanityURLEntity: {
    readonly " $fragmentSpreads": FragmentRefs<"VanityURLEntity_fairOrPartner">;
  } | null;
};
export type VanityURLEntityQueryResponse = VanityURLEntityQuery$data;
export type VanityURLEntityQuery = {
  variables: VanityURLEntityQueryVariables;
  response: VanityURLEntityQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artworks",
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "first",
  "value": 20
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageURL",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v17 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MARKDOWN"
  }
],
v18 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "format",
      "value": "SHORT"
    }
  ],
  "kind": "ScalarField",
  "name": "exhibitionPeriod",
  "storageKey": "exhibitionPeriod(format:\"SHORT\")"
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v20 = {
  "kind": "Literal",
  "name": "first",
  "value": 30
},
v21 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "ARTIST",
      "ARTIST_NATIONALITY",
      "COLOR",
      "DIMENSION_RANGE",
      "FOLLOWED_ARTISTS",
      "LOCATION_CITY",
      "MAJOR_PERIOD",
      "MATERIALS_TERMS",
      "MEDIUM",
      "PARTNER",
      "PRICE_RANGE"
    ]
  },
  (v20/*: any*/),
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "sort": "-decayed_merch"
    }
  }
],
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworksAggregationResults",
  "kind": "LinkedField",
  "name": "aggregations",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slice",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AggregationCount",
      "kind": "LinkedField",
      "name": "counts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        },
        (v15/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "concreteType": "FilterArtworksEdge",
  "kind": "LinkedField",
  "name": "edges",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v5/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    (v23/*: any*/)
  ],
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v25/*: any*/),
    (v26/*: any*/)
  ],
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startCursor",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAuction",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isClosed",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtworkCounts",
  "kind": "LinkedField",
  "name": "counts",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bidderPositions",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v33 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtworkCurrentBid",
  "kind": "LinkedField",
  "name": "currentBid",
  "plural": false,
  "selections": (v32/*: any*/),
  "storageKey": null
},
v34 = [
  (v5/*: any*/)
],
v35 = {
  "kind": "InlineFragment",
  "selections": (v34/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v36 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        (v28/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Artwork",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Image",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                (v16/*: any*/),
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "version",
                      "value": "large"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": "url(version:\"large\")"
                }
              ],
              "storageKey": null
            },
            (v6/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "date",
              "storageKey": null
            },
            (v13/*: any*/),
            (v4/*: any*/),
            (v11/*: any*/),
            (v7/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Sale",
              "kind": "LinkedField",
              "name": "sale",
              "plural": false,
              "selections": [
                (v29/*: any*/),
                (v30/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "displayTimelyAt",
                  "storageKey": null
                },
                (v19/*: any*/),
                (v5/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleArtwork",
              "kind": "LinkedField",
              "name": "saleArtwork",
              "plural": false,
              "selections": [
                (v31/*: any*/),
                (v33/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "lotLabel",
                  "storageKey": null
                },
                (v5/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Partner",
              "kind": "LinkedField",
              "name": "partner",
              "plural": false,
              "selections": [
                (v15/*: any*/),
                (v5/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v35/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "ArtworkConnectionInterface",
  "abstractKey": "__isArtworkConnectionInterface"
},
v37 = [
  "aggregations",
  "input"
],
v38 = [
  (v20/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "FEATURED_ASC"
  }
],
v39 = [
  (v9/*: any*/)
],
v40 = [
  (v5/*: any*/),
  (v15/*: any*/)
],
v41 = [
  "sort"
],
v42 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v43 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "COLOR",
      "DIMENSION_RANGE",
      "ARTIST",
      "MAJOR_PERIOD",
      "MEDIUM",
      "PRICE_RANGE",
      "MATERIALS_TERMS",
      "ARTIST_NATIONALITY"
    ]
  },
  (v42/*: any*/),
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "sort": "-partner_updated_at"
    }
  }
],
v44 = [
  (v42/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "SORTABLE_ID_ASC"
  }
],
v45 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v26/*: any*/),
    (v28/*: any*/),
    (v25/*: any*/)
  ],
  "storageKey": null
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v47 = [
  (v46/*: any*/)
],
v48 = {
  "kind": "Literal",
  "name": "status",
  "value": "CURRENT"
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDisplayable",
  "storageKey": null
},
v50 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 32
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "END_AT_DESC"
  },
  {
    "kind": "Literal",
    "name": "status",
    "value": "CLOSED"
  }
],
v51 = [
  "status",
  "sort"
],
v52 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "END_AT_ASC"
  },
  (v48/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VanityURLEntityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vanityURLEntity",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "VanityURLEntity_fairOrPartner"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VanityURLEntityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vanityURLEntity",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isVanityURLEntityType"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isActive",
                "storageKey": null
              },
              {
                "alias": "articles",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 5
                  },
                  {
                    "kind": "Literal",
                    "name": "inEditorialFeed",
                    "value": true
                  },
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "PUBLISHED_AT_DESC"
                  }
                ],
                "concreteType": "ArticleConnection",
                "kind": "LinkedField",
                "name": "articlesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArticleEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Article",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v4/*: any*/),
                          (v3/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "MMM Do, YYYY"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "publishedAt",
                            "storageKey": "publishedAt(format:\"MMM Do, YYYY\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnailImage",
                            "plural": false,
                            "selections": [
                              {
                                "alias": "src",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "imageURL",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": "articlesConnection(first:5,inEditorialFeed:true,sort:\"PUBLISHED_AT_DESC\")"
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 5
                  }
                ],
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "marketingCollections",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/),
                  (v3/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "category",
                    "storageKey": null
                  },
                  {
                    "alias": "artworks",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3
                      }
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilterArtworksEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "larger"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"larger\")"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:3)"
                  }
                ],
                "storageKey": "marketingCollections(size:5)"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FairCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "partnerShows",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "followedArtistArtworks",
                "args": [
                  (v10/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "input",
                    "value": {
                      "includeArtworksByFollowedArtists": true
                    }
                  }
                ],
                "concreteType": "FilterArtworksConnection",
                "kind": "LinkedField",
                "name": "filterArtworksConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FilterArtworksEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": "artwork",
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v4/*: any*/),
                          (v3/*: any*/),
                          (v7/*: any*/),
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": "filterArtworksConnection(first:20,input:{\"includeArtworksByFollowedArtists\":true})"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "about",
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "profile",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "icon",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "imageUrl",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "untouched-png"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": "url(version:\"untouched-png\")"
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": "imageUrl",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "large_rectangle"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:\"large_rectangle\")"
                  },
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "tagline",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "LatLng",
                    "kind": "LinkedField",
                    "name": "coordinates",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lat",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lng",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ticketsLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FairSponsoredContent",
                "kind": "LinkedField",
                "name": "sponsoredContent",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "activationText",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "pressReleaseUrl",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "fairHours",
                "args": (v17/*: any*/),
                "kind": "ScalarField",
                "name": "hours",
                "storageKey": "hours(format:\"MARKDOWN\")"
              },
              {
                "alias": "fairLinks",
                "args": (v17/*: any*/),
                "kind": "ScalarField",
                "name": "links",
                "storageKey": "links(format:\"MARKDOWN\")"
              },
              {
                "alias": "fairTickets",
                "args": (v17/*: any*/),
                "kind": "ScalarField",
                "name": "tickets",
                "storageKey": "tickets(format:\"MARKDOWN\")"
              },
              {
                "alias": "fairContact",
                "args": (v17/*: any*/),
                "kind": "ScalarField",
                "name": "contact",
                "storageKey": "contact(format:\"MARKDOWN\")"
              },
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startAt",
                "storageKey": null
              },
              (v19/*: any*/),
              {
                "alias": "fairArtworks",
                "args": (v21/*: any*/),
                "concreteType": "FilterArtworksConnection",
                "kind": "LinkedField",
                "name": "filterArtworksConnection",
                "plural": false,
                "selections": [
                  (v22/*: any*/),
                  (v24/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FilterArtworksCounts",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "total",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "followedArtists",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v27/*: any*/),
                  (v5/*: any*/),
                  (v36/*: any*/)
                ],
                "storageKey": "filterArtworksConnection(aggregations:[\"ARTIST\",\"ARTIST_NATIONALITY\",\"COLOR\",\"DIMENSION_RANGE\",\"FOLLOWED_ARTISTS\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\"],first:30,input:{\"sort\":\"-decayed_merch\"})"
              },
              {
                "alias": "fairArtworks",
                "args": (v21/*: any*/),
                "filters": (v37/*: any*/),
                "handle": "connection",
                "key": "Fair_fairArtworks",
                "kind": "LinkedHandle",
                "name": "filterArtworksConnection"
              },
              {
                "alias": "exhibitors",
                "args": (v38/*: any*/),
                "concreteType": "ShowConnection",
                "kind": "LinkedField",
                "name": "showsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Show",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ShowCounts",
                            "kind": "LinkedField",
                            "name": "counts",
                            "plural": false,
                            "selections": (v39/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v40/*: any*/),
                                "type": "Partner",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v40/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              },
                              (v35/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v3/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Fair",
                            "kind": "LinkedField",
                            "name": "fair",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v3/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "artworks",
                            "args": [
                              (v10/*: any*/)
                            ],
                            "concreteType": "ArtworkConnection",
                            "kind": "LinkedField",
                            "name": "artworksConnection",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ArtworkEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Artwork",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v7/*: any*/),
                                      (v11/*: any*/),
                                      (v5/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Image",
                                        "kind": "LinkedField",
                                        "name": "image",
                                        "plural": false,
                                        "selections": [
                                          (v12/*: any*/),
                                          (v16/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v13/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "SaleArtwork",
                                        "kind": "LinkedField",
                                        "name": "saleArtwork",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkOpeningBid",
                                            "kind": "LinkedField",
                                            "name": "openingBid",
                                            "plural": false,
                                            "selections": (v32/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkHighestBid",
                                            "kind": "LinkedField",
                                            "name": "highestBid",
                                            "plural": false,
                                            "selections": (v32/*: any*/),
                                            "storageKey": null
                                          },
                                          (v33/*: any*/),
                                          (v31/*: any*/),
                                          (v5/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Sale",
                                        "kind": "LinkedField",
                                        "name": "sale",
                                        "plural": false,
                                        "selections": [
                                          (v30/*: any*/),
                                          (v29/*: any*/),
                                          (v19/*: any*/),
                                          (v5/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v6/*: any*/),
                                      (v4/*: any*/),
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "artworksConnection(first:20)"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v23/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v27/*: any*/)
                ],
                "storageKey": "showsConnection(first:30,sort:\"FEATURED_ASC\")"
              },
              {
                "alias": "exhibitors",
                "args": (v38/*: any*/),
                "filters": (v41/*: any*/),
                "handle": "connection",
                "key": "FairExhibitorsQuery_exhibitors",
                "kind": "LinkedHandle",
                "name": "showsConnection"
              }
            ],
            "type": "Fair",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "partnerType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "displayFullPartnerPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "profile",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFollowed",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bio",
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": "artworks",
                "args": (v43/*: any*/),
                "concreteType": "FilterArtworksConnection",
                "kind": "LinkedField",
                "name": "filterArtworksConnection",
                "plural": false,
                "selections": [
                  (v22/*: any*/),
                  (v24/*: any*/),
                  (v27/*: any*/),
                  (v5/*: any*/),
                  (v36/*: any*/)
                ],
                "storageKey": "filterArtworksConnection(aggregations:[\"COLOR\",\"DIMENSION_RANGE\",\"ARTIST\",\"MAJOR_PERIOD\",\"MEDIUM\",\"PRICE_RANGE\",\"MATERIALS_TERMS\",\"ARTIST_NATIONALITY\"],first:10,input:{\"sort\":\"-partner_updated_at\"})"
              },
              {
                "alias": "artworks",
                "args": (v43/*: any*/),
                "filters": (v37/*: any*/),
                "handle": "connection",
                "key": "Partner_artworks",
                "kind": "LinkedHandle",
                "name": "filterArtworksConnection"
              },
              (v15/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cities",
                "storageKey": null
              },
              {
                "alias": "artists",
                "args": (v44/*: any*/),
                "concreteType": "ArtistPartnerConnection",
                "kind": "LinkedField",
                "name": "artistsConnection",
                "plural": false,
                "selections": [
                  (v45/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistPartnerEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v4/*: any*/),
                          (v3/*: any*/),
                          (v15/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "initials",
                            "storageKey": null
                          },
                          (v7/*: any*/),
                          {
                            "alias": "is_followed",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isFollowed",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "nationality",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "birthday",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deathday",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": (v47/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ArtistCounts",
                            "kind": "LinkedField",
                            "name": "counts",
                            "plural": false,
                            "selections": (v39/*: any*/),
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v23/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artistsConnection(first:10,sort:\"SORTABLE_ID_ASC\")"
              },
              {
                "alias": "artists",
                "args": (v44/*: any*/),
                "filters": (v41/*: any*/),
                "handle": "connection",
                "key": "Partner_artists",
                "kind": "LinkedHandle",
                "name": "artistsConnection"
              },
              {
                "alias": "locations",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0
                  }
                ],
                "concreteType": "LocationConnection",
                "kind": "LinkedField",
                "name": "locationsConnection",
                "plural": false,
                "selections": [
                  (v8/*: any*/)
                ],
                "storageKey": "locationsConnection(first:0)"
              },
              {
                "alias": "recentShows",
                "args": [
                  (v42/*: any*/),
                  (v48/*: any*/)
                ],
                "concreteType": "ShowConnection",
                "kind": "LinkedField",
                "name": "showsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Show",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v49/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "showsConnection(first:10,status:\"CURRENT\")"
              },
              {
                "alias": "pastShows",
                "args": (v50/*: any*/),
                "concreteType": "ShowConnection",
                "kind": "LinkedField",
                "name": "showsConnection",
                "plural": false,
                "selections": [
                  (v45/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Show",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v49/*: any*/),
                          (v5/*: any*/),
                          (v15/*: any*/),
                          (v3/*: any*/),
                          (v18/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": [
                              (v46/*: any*/),
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v23/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "showsConnection(first:32,sort:\"END_AT_DESC\",status:\"CLOSED\")"
              },
              {
                "alias": "pastShows",
                "args": (v50/*: any*/),
                "filters": (v51/*: any*/),
                "handle": "connection",
                "key": "Partner_pastShows",
                "kind": "LinkedHandle",
                "name": "showsConnection"
              },
              {
                "alias": "currentAndUpcomingShows",
                "args": (v52/*: any*/),
                "concreteType": "ShowConnection",
                "kind": "LinkedField",
                "name": "showsConnection",
                "plural": false,
                "selections": [
                  (v45/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Show",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v49/*: any*/),
                          (v5/*: any*/),
                          (v4/*: any*/),
                          (v3/*: any*/),
                          (v15/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "images",
                            "plural": true,
                            "selections": (v47/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v15/*: any*/)
                                ],
                                "type": "Partner",
                                "abstractKey": null
                              },
                              (v35/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v34/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": (v47/*: any*/),
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v23/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "showsConnection(first:6,sort:\"END_AT_ASC\",status:\"CURRENT\")"
              },
              {
                "alias": "currentAndUpcomingShows",
                "args": (v52/*: any*/),
                "filters": (v51/*: any*/),
                "handle": "connection",
                "key": "Partner_currentAndUpcomingShows",
                "kind": "LinkedHandle",
                "name": "showsConnection"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PartnerCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "eligibleArtworks",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasFairPartnership",
                "storageKey": null
              }
            ],
            "type": "Partner",
            "abstractKey": null
          },
          (v35/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6da9b595260763274f1ef490bd3ba11d",
    "id": null,
    "metadata": {},
    "name": "VanityURLEntityQuery",
    "operationKind": "query",
    "text": "query VanityURLEntityQuery(\n  $id: String!\n) {\n  vanityURLEntity(id: $id) {\n    __typename\n    ...VanityURLEntity_fairOrPartner\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArtistListItem_artist on Artist {\n  id\n  internalID\n  slug\n  name\n  initials\n  href\n  is_followed: isFollowed\n  nationality\n  birthday\n  deathday\n  image {\n    url\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment ArtworkTileRailCard_artwork on Artwork {\n  slug\n  internalID\n  href\n  artistNames\n  image {\n    imageURL\n  }\n  saleMessage\n}\n\nfragment FairArtworks_fair_ZORN9 on Fair {\n  slug\n  internalID\n  fairArtworks: filterArtworksConnection(first: 30, aggregations: [ARTIST, ARTIST_NATIONALITY, COLOR, DIMENSION_RANGE, FOLLOWED_ARTISTS, LOCATION_CITY, MAJOR_PERIOD, MATERIALS_TERMS, MEDIUM, PARTNER, PRICE_RANGE], input: {sort: \"-decayed_merch\"}) {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    counts {\n      total\n      followedArtists\n    }\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment FairCollections_fair on Fair {\n  internalID\n  slug\n  marketingCollections(size: 5) {\n    slug\n    title\n    category\n    artworks: artworksConnection(first: 3) {\n      edges {\n        node {\n          image {\n            url(version: \"larger\")\n          }\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment FairEditorial_fair on Fair {\n  internalID\n  slug\n  articles: articlesConnection(first: 5, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) {\n    totalCount\n    edges {\n      node {\n        id\n        internalID\n        slug\n        title\n        href\n        publishedAt(format: \"MMM Do, YYYY\")\n        thumbnailImage {\n          src: imageURL\n        }\n      }\n    }\n  }\n}\n\nfragment FairEmptyState_fair on Fair {\n  isActive\n  endAt\n}\n\nfragment FairExhibitorRail_show on Show {\n  internalID\n  slug\n  href\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  counts {\n    artworks\n  }\n  fair {\n    internalID\n    slug\n    id\n  }\n  artworks: artworksConnection(first: 20) {\n    edges {\n      node {\n        href\n        artistNames\n        id\n        image {\n          imageURL\n          aspectRatio\n        }\n        saleMessage\n        saleArtwork {\n          openingBid {\n            display\n          }\n          highestBid {\n            display\n          }\n          currentBid {\n            display\n          }\n          counts {\n            bidderPositions\n          }\n          id\n        }\n        sale {\n          isClosed\n          isAuction\n          endAt\n          id\n        }\n        title\n        internalID\n        slug\n      }\n    }\n  }\n}\n\nfragment FairExhibitors_fair on Fair {\n  internalID\n  slug\n  exhibitors: showsConnection(first: 30, sort: FEATURED_ASC) {\n    edges {\n      node {\n        id\n        counts {\n          artworks\n        }\n        partner {\n          __typename\n          ... on Partner {\n            id\n          }\n          ... on ExternalPartner {\n            id\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        ...FairExhibitorRail_show\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment FairFollowedArtistsRail_fair on Fair {\n  internalID\n  slug\n  followedArtistArtworks: filterArtworksConnection(first: 20, input: {includeArtworksByFollowedArtists: true}) {\n    edges {\n      artwork: node {\n        id\n        internalID\n        slug\n        ...ArtworkTileRailCard_artwork\n      }\n    }\n    id\n  }\n}\n\nfragment FairHeader_fair on Fair {\n  about\n  summary\n  name\n  slug\n  profile {\n    icon {\n      imageUrl: url(version: \"untouched-png\")\n    }\n    id\n  }\n  image {\n    imageUrl: url(version: \"large_rectangle\")\n    aspectRatio\n  }\n  tagline\n  location {\n    summary\n    coordinates {\n      lat\n      lng\n    }\n    id\n  }\n  ticketsLink\n  sponsoredContent {\n    activationText\n    pressReleaseUrl\n  }\n  fairHours: hours(format: MARKDOWN)\n  fairLinks: links(format: MARKDOWN)\n  fairTickets: tickets(format: MARKDOWN)\n  fairContact: contact(format: MARKDOWN)\n  ...FairTiming_fair\n}\n\nfragment FairTiming_fair on Fair {\n  exhibitionPeriod(format: SHORT)\n  startAt\n  endAt\n}\n\nfragment Fair_fair on Fair {\n  internalID\n  slug\n  isActive\n  articles: articlesConnection(first: 5, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) {\n    edges {\n      __typename\n    }\n  }\n  marketingCollections(size: 5) {\n    __typename\n    id\n  }\n  counts {\n    artworks\n    partnerShows\n  }\n  followedArtistArtworks: filterArtworksConnection(first: 20, input: {includeArtworksByFollowedArtists: true}) {\n    edges {\n      __typename\n    }\n    id\n  }\n  ...FairHeader_fair\n  ...FairEmptyState_fair\n  ...FairEditorial_fair\n  ...FairCollections_fair\n  ...FairArtworks_fair_ZORN9\n  ...FairExhibitors_fair\n  ...FairFollowedArtistsRail_fair\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment PartnerArtwork_partner_3XSKY6 on Partner {\n  internalID\n  slug\n  artworks: filterArtworksConnection(first: 10, aggregations: [COLOR, DIMENSION_RANGE, ARTIST, MAJOR_PERIOD, MEDIUM, PRICE_RANGE, MATERIALS_TERMS, ARTIST_NATIONALITY], input: {sort: \"-partner_updated_at\"}) {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment PartnerFollowButton_partner on Partner {\n  internalID\n  slug\n  profile {\n    id\n    internalID\n    isFollowed\n  }\n}\n\nfragment PartnerHeader_partner on Partner {\n  name\n  profile {\n    name\n    id\n  }\n  counts {\n    eligibleArtworks\n  }\n  ...PartnerFollowButton_partner\n}\n\nfragment PartnerLocationSection_partner on Partner {\n  slug\n  name\n  cities\n  locations: locationsConnection(first: 0) {\n    totalCount\n  }\n}\n\nfragment PartnerOverview_partner on Partner {\n  internalID\n  name\n  cities\n  profile {\n    bio\n    id\n  }\n  artists: artistsConnection(sort: SORTABLE_ID_ASC, first: 10) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...ArtistListItem_artist\n        counts {\n          artworks\n        }\n        __typename\n      }\n      cursor\n      id\n    }\n  }\n  ...PartnerLocationSection_partner\n}\n\nfragment PartnerShowRailItem_show on Show {\n  internalID\n  slug\n  name\n  exhibitionPeriod(format: SHORT)\n  endAt\n  coverImage {\n    url\n  }\n  images {\n    url\n  }\n}\n\nfragment PartnerShowsRail_partner on Partner {\n  internalID\n  currentAndUpcomingShows: showsConnection(status: CURRENT, sort: END_AT_ASC, first: 6) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        isDisplayable\n        id\n        internalID\n        slug\n        name\n        exhibitionPeriod(format: SHORT)\n        endAt\n        images {\n          url\n        }\n        partner {\n          __typename\n          ... on Partner {\n            name\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n          ... on ExternalPartner {\n            id\n          }\n        }\n        ...PartnerShowRailItem_show\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment PartnerShows_partner on Partner {\n  slug\n  internalID\n  recentShows: showsConnection(status: CURRENT, first: 10) {\n    edges {\n      node {\n        id\n        isDisplayable\n      }\n    }\n  }\n  pastShows: showsConnection(status: CLOSED, sort: END_AT_DESC, first: 32) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        isDisplayable\n        id\n        name\n        slug\n        exhibitionPeriod(format: SHORT)\n        coverImage {\n          url\n          aspectRatio\n        }\n        href\n        __typename\n      }\n      cursor\n    }\n  }\n  ...PartnerShowsRail_partner\n}\n\nfragment PartnerSubscriberBanner_partner on Partner {\n  name\n  hasFairPartnership\n}\n\nfragment Partner_partner on Partner {\n  id\n  internalID\n  slug\n  partnerType\n  displayFullPartnerPage\n  profile {\n    id\n    isFollowed\n    internalID\n  }\n  ...PartnerArtwork_partner_3XSKY6\n  ...PartnerOverview_partner\n  ...PartnerShows_partner\n  ...PartnerHeader_partner\n  ...PartnerSubscriberBanner_partner\n}\n\nfragment VanityURLEntity_fairOrPartner on VanityURLEntityType {\n  __isVanityURLEntityType: __typename\n  __typename\n  ... on Fair {\n    slug\n    ...Fair_fair\n  }\n  ... on Partner {\n    ...Partner_partner\n  }\n}\n"
  }
};
})();

(node as any).hash = "345c641dc3f2ba52a22786a800cb6439";

export default node;
