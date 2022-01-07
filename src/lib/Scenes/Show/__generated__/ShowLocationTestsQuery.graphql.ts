/**
 * @generated SignedSource<<d71896d56d07cfa6e1c8a7b50f7d5227>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowLocationTestsQuery$variables = {
  showID: string;
};
export type ShowLocationTestsQueryVariables = ShowLocationTestsQuery$variables;
export type ShowLocationTestsQuery$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowLocation_show">;
  } | null;
};
export type ShowLocationTestsQueryResponse = ShowLocationTestsQuery$data;
export type ShowLocationTestsQuery = {
  variables: ShowLocationTestsQueryVariables;
  response: ShowLocationTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "showID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "showID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Location",
  "kind": "LinkedField",
  "name": "location",
  "plural": false,
  "selections": [
    (v3/*: any*/),
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
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address2",
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
      "name": "summary",
      "storageKey": null
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
    }
  ],
  "storageKey": null
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
  "type": "Location"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "LatLng"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowLocationTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowLocation_show"
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
    "name": "ShowLocationTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
                ],
                "type": "Partner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "type": "ExternalPartner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
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
              (v2/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a09bb9727621dd59b0cebdcfb0878546",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "show": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "show.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "show.fair.id": (v5/*: any*/),
        "show.fair.location": (v6/*: any*/),
        "show.fair.location.address": (v7/*: any*/),
        "show.fair.location.address2": (v7/*: any*/),
        "show.fair.location.city": (v7/*: any*/),
        "show.fair.location.coordinates": (v8/*: any*/),
        "show.fair.location.coordinates.lat": (v9/*: any*/),
        "show.fair.location.coordinates.lng": (v9/*: any*/),
        "show.fair.location.id": (v5/*: any*/),
        "show.fair.location.internalID": (v5/*: any*/),
        "show.fair.location.postalCode": (v7/*: any*/),
        "show.fair.location.summary": (v7/*: any*/),
        "show.fair.name": (v7/*: any*/),
        "show.id": (v5/*: any*/),
        "show.location": (v6/*: any*/),
        "show.location.address": (v7/*: any*/),
        "show.location.address2": (v7/*: any*/),
        "show.location.city": (v7/*: any*/),
        "show.location.coordinates": (v8/*: any*/),
        "show.location.coordinates.lat": (v9/*: any*/),
        "show.location.coordinates.lng": (v9/*: any*/),
        "show.location.id": (v5/*: any*/),
        "show.location.internalID": (v5/*: any*/),
        "show.location.postalCode": (v7/*: any*/),
        "show.location.summary": (v7/*: any*/),
        "show.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "show.partner.__isNode": (v10/*: any*/),
        "show.partner.__typename": (v10/*: any*/),
        "show.partner.id": (v5/*: any*/),
        "show.partner.name": (v7/*: any*/)
      }
    },
    "name": "ShowLocationTestsQuery",
    "operationKind": "query",
    "text": "query ShowLocationTestsQuery(\n  $showID: String!\n) {\n  show(id: $showID) {\n    ...ShowLocation_show\n    id\n  }\n}\n\nfragment LocationMap_location on Location {\n  id\n  internalID\n  city\n  address\n  address2\n  postalCode\n  summary\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment ShowLocation_show on Show {\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  fair {\n    name\n    location {\n      ...LocationMap_location\n      id\n    }\n    id\n  }\n  location {\n    ...LocationMap_location\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e31ec814f09afff42bcc4af8fe480116";

export default node;
