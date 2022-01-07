/**
 * @generated SignedSource<<acf0a527a57719abfd3d689b045b8f4f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type OrderInformation_order$data = {
  readonly code: string;
  readonly shippingTotal: string | null;
  readonly taxTotal: string | null;
  readonly buyerTotal: string | null;
  readonly lastOffer?: {
    readonly amount: string | null;
    readonly fromParticipant: CommerceOrderParticipantEnum | null;
  } | null;
  readonly " $fragmentType": "OrderInformation_order";
};
export type OrderInformation_order = OrderInformation_order$data;
export type OrderInformation_order$key = {
  readonly " $data"?: OrderInformation_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderInformation_order">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderInformation_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "code",
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "kind": "ScalarField",
      "name": "shippingTotal",
      "storageKey": "shippingTotal(precision:2)"
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "kind": "ScalarField",
      "name": "taxTotal",
      "storageKey": "taxTotal(precision:2)"
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "kind": "ScalarField",
      "name": "buyerTotal",
      "storageKey": "buyerTotal(precision:2)"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommerceOffer",
          "kind": "LinkedField",
          "name": "lastOffer",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": (v0/*: any*/),
              "kind": "ScalarField",
              "name": "amount",
              "storageKey": "amount(precision:2)"
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fromParticipant",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "CommerceOfferOrder",
      "abstractKey": null
    }
  ],
  "type": "CommerceOrder",
  "abstractKey": "__isCommerceOrder"
};
})();

(node as any).hash = "27794ce1df39282d4241c6ce260cc943";

export default node;
