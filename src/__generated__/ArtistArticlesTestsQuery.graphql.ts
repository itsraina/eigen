/**
 * @generated SignedSource<<0fd4a37711fe715e98b6eb07b5ffc9b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistArticlesTestsQuery$variables = {};
export type ArtistArticlesTestsQueryVariables = ArtistArticlesTestsQuery$variables;
export type ArtistArticlesTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistArticles_artist">;
  } | null;
};
export type ArtistArticlesTestsQueryResponse = ArtistArticlesTestsQuery$data;
export type ArtistArticlesTestsQuery = {
  variables: ArtistArticlesTestsQueryVariables;
  response: ArtistArticlesTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistArticlesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistArticles_artist"
          }
        ],
        "storageKey": "artist(id:\"some-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistArticlesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Article",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "slug",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Author",
                        "kind": "LinkedField",
                        "name": "author",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "href",
                        "storageKey": null
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "thumbnailTitle",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "vertical",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "articlesConnection(first:10,inEditorialFeed:true,sort:\"PUBLISHED_AT_DESC\")"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "sort",
              "inEditorialFeed"
            ],
            "handle": "connection",
            "key": "ArtistArticles_articlesConnection",
            "kind": "LinkedHandle",
            "name": "articlesConnection"
          },
          (v4/*: any*/)
        ],
        "storageKey": "artist(id:\"some-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "06792fd1fd9bc1569ac097e93923a925",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artist.articlesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleConnection"
        },
        "artist.articlesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArticleEdge"
        },
        "artist.articlesConnection.edges.cursor": (v5/*: any*/),
        "artist.articlesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "artist.articlesConnection.edges.node.__typename": (v5/*: any*/),
        "artist.articlesConnection.edges.node.author": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Author"
        },
        "artist.articlesConnection.edges.node.author.id": (v6/*: any*/),
        "artist.articlesConnection.edges.node.author.name": (v7/*: any*/),
        "artist.articlesConnection.edges.node.href": (v7/*: any*/),
        "artist.articlesConnection.edges.node.id": (v6/*: any*/),
        "artist.articlesConnection.edges.node.internalID": (v6/*: any*/),
        "artist.articlesConnection.edges.node.slug": (v7/*: any*/),
        "artist.articlesConnection.edges.node.thumbnailImage": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "artist.articlesConnection.edges.node.thumbnailImage.url": (v7/*: any*/),
        "artist.articlesConnection.edges.node.thumbnailTitle": (v7/*: any*/),
        "artist.articlesConnection.edges.node.vertical": (v7/*: any*/),
        "artist.articlesConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "artist.articlesConnection.pageInfo.endCursor": (v7/*: any*/),
        "artist.articlesConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "artist.id": (v6/*: any*/),
        "artist.internalID": (v6/*: any*/),
        "artist.name": (v7/*: any*/)
      }
    },
    "name": "ArtistArticlesTestsQuery",
    "operationKind": "query",
    "text": "query ArtistArticlesTestsQuery {\n  artist(id: \"some-id\") {\n    ...ArtistArticles_artist\n    id\n  }\n}\n\nfragment ArticleCard_article on Article {\n  internalID\n  slug\n  author {\n    name\n    id\n  }\n  href\n  thumbnailImage {\n    url(version: \"large\")\n  }\n  thumbnailTitle\n  vertical\n}\n\nfragment ArtistArticles_artist on Artist {\n  internalID\n  name\n  articlesConnection(first: 10, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) {\n    edges {\n      cursor\n      node {\n        internalID\n        slug\n        ...ArticleCard_article\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f98086bc2a6258dbcc332518e6883664";

export default node;
