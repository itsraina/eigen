/**
 * @generated SignedSource<<12883a09b5f66d9fb093bdfd2e5c1f98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BuyNowButton_artwork$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly saleMessage: string | null;
  readonly " $fragmentType": "BuyNowButton_artwork";
};
export type BuyNowButton_artwork = BuyNowButton_artwork$data;
export type BuyNowButton_artwork$key = {
  readonly " $data"?: BuyNowButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"BuyNowButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BuyNowButton_artwork",
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
      "name": "saleMessage",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "bbca70664b55266ce88ac13572d00a39";

export default node;
