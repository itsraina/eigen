/**
 * @generated SignedSource<<0a1319a85ba6969c7d106c897e1b3597>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowArtistsPreviewTestsQuery$variables = {};
export type ShowArtistsPreviewTestsQueryVariables = ShowArtistsPreviewTestsQuery$variables;
export type ShowArtistsPreviewTestsQuery$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowArtistsPreview_show">;
  } | null;
};
export type ShowArtistsPreviewTestsQueryResponse = ShowArtistsPreviewTestsQuery$data;
export type ShowArtistsPreviewTestsQuery$rawResponse = {
  readonly show: {
    readonly internalID: string;
    readonly slug: string;
    readonly artists: ReadonlyArray<{
      readonly id: string;
      readonly internalID: string;
      readonly slug: string;
      readonly href: string | null;
      readonly name: string | null;
      readonly initials: string | null;
      readonly is_followed: boolean | null;
      readonly nationality: string | null;
      readonly birthday: string | null;
      readonly deathday: string | null;
      readonly image: {
        readonly url: string | null;
      } | null;
    } | null> | null;
    readonly artists_without_artworks: ReadonlyArray<{
      readonly id: string;
      readonly internalID: string;
      readonly slug: string;
      readonly href: string | null;
      readonly name: string | null;
      readonly initials: string | null;
      readonly is_followed: boolean | null;
      readonly nationality: string | null;
      readonly birthday: string | null;
      readonly deathday: string | null;
      readonly image: {
        readonly url: string | null;
      } | null;
    } | null> | null;
    readonly id: string;
  } | null;
};
export type ShowArtistsPreviewTestsQueryRawResponse = ShowArtistsPreviewTestsQuery$rawResponse;
export type ShowArtistsPreviewTestsQuery = {
  variables: ShowArtistsPreviewTestsQueryVariables;
  response: ShowArtistsPreviewTestsQuery$data;
  rawResponse: ShowArtistsPreviewTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "anderson-fine-art-gallery-flickinger-collection"
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
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  (v1/*: any*/),
  (v2/*: any*/),
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
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "initials",
    "storageKey": null
  },
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
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowArtistsPreviewTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowArtistsPreview_show"
          }
        ],
        "storageKey": "show(id:\"anderson-fine-art-gallery-flickinger-collection\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShowArtistsPreviewTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": "artists_without_artworks",
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artistsWithoutArtworks",
            "plural": true,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "show(id:\"anderson-fine-art-gallery-flickinger-collection\")"
      }
    ]
  },
  "params": {
    "cacheID": "4dc5bb7b20b8372673e592dd93fc284c",
    "id": null,
    "metadata": {},
    "name": "ShowArtistsPreviewTestsQuery",
    "operationKind": "query",
    "text": "query ShowArtistsPreviewTestsQuery {\n  show(id: \"anderson-fine-art-gallery-flickinger-collection\") {\n    ...ShowArtistsPreview_show\n    id\n  }\n}\n\nfragment ArtistListItem_artist on Artist {\n  id\n  internalID\n  slug\n  name\n  initials\n  href\n  is_followed: isFollowed\n  nationality\n  birthday\n  deathday\n  image {\n    url\n  }\n}\n\nfragment ShowArtistsPreview_show on Show {\n  internalID\n  slug\n  artists {\n    id\n    internalID\n    slug\n    href\n    ...ArtistListItem_artist\n  }\n  artists_without_artworks: artistsWithoutArtworks {\n    id\n    internalID\n    slug\n    href\n    ...ArtistListItem_artist\n  }\n}\n"
  }
};
})();

(node as any).hash = "2508f0f726263c27cb498e2f47cc504c";

export default node;
