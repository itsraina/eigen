/**
 * @generated SignedSource<<1ea21cf3ee7a6ff85a69ddcc69113f15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowLocation_show$data = {
  readonly partner: {
    readonly name?: string | null;
  } | null;
  readonly fair: {
    readonly name: string | null;
    readonly location: {
      readonly " $fragmentSpreads": FragmentRefs<"LocationMap_location">;
    } | null;
  } | null;
  readonly location: {
    readonly " $fragmentSpreads": FragmentRefs<"LocationMap_location">;
  } | null;
  readonly " $fragmentType": "ShowLocation_show";
};
export type ShowLocation_show = ShowLocation_show$data;
export type ShowLocation_show$key = {
  readonly " $data"?: ShowLocation_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowLocation_show">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = {
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
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowLocation_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Partner",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "ExternalPartner",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Fair",
      "kind": "LinkedField",
      "name": "fair",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    (v2/*: any*/)
  ],
  "type": "Show",
  "abstractKey": null
};
})();

(node as any).hash = "c2367832d49a7a511e661d4c9a2db22c";

export default node;
