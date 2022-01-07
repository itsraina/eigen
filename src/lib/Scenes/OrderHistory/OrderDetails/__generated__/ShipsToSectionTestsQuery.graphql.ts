/**
 * @generated SignedSource<<ae76093ff66fdcb30c634505f05cb788>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShipsToSectionTestsQuery$variables = {};
export type ShipsToSectionTestsQueryVariables = ShipsToSectionTestsQuery$variables;
export type ShipsToSectionTestsQuery$data = {
  readonly commerceOrder: {
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"ShipsToSection_address">;
  } | null;
};
export type ShipsToSectionTestsQueryResponse = ShipsToSectionTestsQuery$data;
export type ShipsToSectionTestsQuery = {
  variables: ShipsToSectionTestsQueryVariables;
  response: ShipsToSectionTestsQuery$data;
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
  "name": "__typename",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "addressLine1",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "addressLine2",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "city",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "country",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "phoneNumber",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "postalCode",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "region",
    "storageKey": null
  }
],
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
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
    "name": "ShipsToSectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShipsToSection_address"
          }
        ],
        "storageKey": "commerceOrder(id:\"some-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShipsToSectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isCommerceOrder"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "requestedFulfillment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v3/*: any*/),
                "type": "CommerceShip",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v3/*: any*/),
                "type": "CommerceShipArta",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "commerceOrder(id:\"some-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "f321e6cc7c0b10db691ff3d3dd1e8aeb",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "commerceOrder": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "commerceOrder.__isCommerceOrder": (v4/*: any*/),
        "commerceOrder.__typename": (v4/*: any*/),
        "commerceOrder.id": (v5/*: any*/),
        "commerceOrder.internalID": (v5/*: any*/),
        "commerceOrder.requestedFulfillment": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceRequestedFulfillmentUnion"
        },
        "commerceOrder.requestedFulfillment.__typename": (v4/*: any*/),
        "commerceOrder.requestedFulfillment.addressLine1": (v6/*: any*/),
        "commerceOrder.requestedFulfillment.addressLine2": (v6/*: any*/),
        "commerceOrder.requestedFulfillment.city": (v6/*: any*/),
        "commerceOrder.requestedFulfillment.country": (v6/*: any*/),
        "commerceOrder.requestedFulfillment.phoneNumber": (v6/*: any*/),
        "commerceOrder.requestedFulfillment.postalCode": (v6/*: any*/),
        "commerceOrder.requestedFulfillment.region": (v6/*: any*/)
      }
    },
    "name": "ShipsToSectionTestsQuery",
    "operationKind": "query",
    "text": "query ShipsToSectionTestsQuery {\n  commerceOrder(id: \"some-id\") {\n    __typename\n    internalID\n    ...ShipsToSection_address\n    id\n  }\n}\n\nfragment ShipsToSection_address on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommercePickup {\n      __typename\n    }\n    ... on CommerceShip {\n      __typename\n      addressLine1\n      addressLine2\n      city\n      country\n      phoneNumber\n      postalCode\n      region\n    }\n    ... on CommerceShipArta {\n      __typename\n      addressLine1\n      addressLine2\n      city\n      country\n      phoneNumber\n      postalCode\n      region\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f04d06824af7e10e01b8545c15686f0b";

export default node;
