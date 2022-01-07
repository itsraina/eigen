/**
 * @generated SignedSource<<7821d01b5098100a6afd47ddd075665f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairMoreInfo_fair$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly about: string | null;
  readonly name: string | null;
  readonly tagline: string | null;
  readonly profile: {
    readonly name: string | null;
  } | null;
  readonly location: {
    readonly coordinates: {
      readonly lat: number | null;
      readonly lng: number | null;
    } | null;
    readonly summary: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"LocationMap_location">;
  } | null;
  readonly sponsoredContent: {
    readonly activationText: string | null;
    readonly pressReleaseUrl: string | null;
  } | null;
  readonly ticketsLink: string | null;
  readonly fairHours: string | null;
  readonly fairLinks: string | null;
  readonly fairTickets: string | null;
  readonly summary: string | null;
  readonly fairContact: string | null;
  readonly " $fragmentType": "FairMoreInfo_fair";
};
export type FairMoreInfo_fair = FairMoreInfo_fair$data;
export type FairMoreInfo_fair$key = {
  readonly " $data"?: FairMoreInfo_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairMoreInfo_fair">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MARKDOWN"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairMoreInfo_fair",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "about",
      "storageKey": null
    },
    (v0/*: any*/),
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
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "profile",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LocationMap_location"
        },
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
        (v1/*: any*/)
      ],
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ticketsLink",
      "storageKey": null
    },
    {
      "alias": "fairHours",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "hours",
      "storageKey": "hours(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairLinks",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "links",
      "storageKey": "links(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairTickets",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "tickets",
      "storageKey": "tickets(format:\"MARKDOWN\")"
    },
    (v1/*: any*/),
    {
      "alias": "fairContact",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "contact",
      "storageKey": "contact(format:\"MARKDOWN\")"
    }
  ],
  "type": "Fair",
  "abstractKey": null
};
})();

(node as any).hash = "dc6d32db705ecb7dc020039ab60b26ea";

export default node;
