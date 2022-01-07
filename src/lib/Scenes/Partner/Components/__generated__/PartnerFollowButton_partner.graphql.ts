/**
 * @generated SignedSource<<639c65d1e7e983dc6991cd2f7d36cffd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerFollowButton_partner$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly profile: {
    readonly id: string;
    readonly internalID: string;
    readonly isFollowed: boolean | null;
  } | null;
  readonly " $fragmentType": "PartnerFollowButton_partner";
};
export type PartnerFollowButton_partner = PartnerFollowButton_partner$data;
export type PartnerFollowButton_partner$key = {
  readonly " $data"?: PartnerFollowButton_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerFollowButton_partner">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerFollowButton_partner",
  "selections": [
    (v0/*: any*/),
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
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "profile",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isFollowed",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Partner",
  "abstractKey": null
};
})();

(node as any).hash = "0f6992a6d00173390a59c484c352936a";

export default node;
