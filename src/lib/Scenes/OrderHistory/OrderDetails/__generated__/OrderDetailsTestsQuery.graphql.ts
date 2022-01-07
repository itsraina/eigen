/**
 * @generated SignedSource<<b11153ac961e79ad516db208ecc6962b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDetailsTestsQuery$variables = {};
export type OrderDetailsTestsQueryVariables = OrderDetailsTestsQuery$variables;
export type OrderDetailsTestsQuery$data = {
  readonly commerceOrder: {
    readonly " $fragmentSpreads": FragmentRefs<"OrderDetails_order">;
  } | null;
};
export type OrderDetailsTestsQueryResponse = OrderDetailsTestsQuery$data;
export type OrderDetailsTestsQuery = {
  variables: OrderDetailsTestsQueryVariables;
  response: OrderDetailsTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "order-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  (v2/*: any*/),
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
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
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
  "name": "createdAt",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2
  }
],
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderDetailsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrderDetails_order"
          }
        ],
        "storageKey": "commerceOrder(id:\"order-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrderDetailsTestsQuery",
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
              (v1/*: any*/),
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
            "args": (v4/*: any*/),
            "concreteType": "CommerceLineItemConnection",
            "kind": "LinkedField",
            "name": "lineItems",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceLineItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceLineItem",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "artwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "medium",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "editionOf",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "dimensions",
                            "kind": "LinkedField",
                            "name": "dimensions",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "in",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cm",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
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
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "square60"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(version:\"square60\")"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "shippingOrigin",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShipment",
                        "kind": "LinkedField",
                        "name": "shipment",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "status",
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "trackingUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "trackingNumber",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deliveryStart",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deliveryEnd",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "estimatedDeliveryWindow",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShippingQuote",
                        "kind": "LinkedField",
                        "name": "selectedShippingQuote",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayName",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v4/*: any*/),
                        "concreteType": "CommerceFulfillmentConnection",
                        "kind": "LinkedField",
                        "name": "fulfillments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommerceFulfillmentEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceFulfillment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "trackingId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "estimatedDelivery",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "fulfillments(first:1)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "lineItems(first:1)"
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "kind": "ScalarField",
            "name": "buyerTotal",
            "storageKey": "buyerTotal(precision:2)"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "kind": "ScalarField",
            "name": "taxTotal",
            "storageKey": "taxTotal(precision:2)"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "kind": "ScalarField",
            "name": "shippingTotal",
            "storageKey": "shippingTotal(precision:2)"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "kind": "ScalarField",
            "name": "totalListPrice",
            "storageKey": "totalListPrice(precision:2)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CreditCard",
            "kind": "LinkedField",
            "name": "creditCard",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "brand",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastDigits",
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
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
                    "args": (v7/*: any*/),
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
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "CommerceOfferOrder",
            "abstractKey": null
          }
        ],
        "storageKey": "commerceOrder(id:\"order-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "2deb519c2c3f0babb6886e2c84b60260",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "commerceOrder": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "commerceOrder.__isCommerceOrder": (v8/*: any*/),
        "commerceOrder.__typename": (v8/*: any*/),
        "commerceOrder.buyerTotal": (v9/*: any*/),
        "commerceOrder.code": (v8/*: any*/),
        "commerceOrder.createdAt": (v8/*: any*/),
        "commerceOrder.creditCard": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CreditCard"
        },
        "commerceOrder.creditCard.brand": (v8/*: any*/),
        "commerceOrder.creditCard.id": (v10/*: any*/),
        "commerceOrder.creditCard.lastDigits": (v8/*: any*/),
        "commerceOrder.id": (v10/*: any*/),
        "commerceOrder.lastOffer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOffer"
        },
        "commerceOrder.lastOffer.amount": (v9/*: any*/),
        "commerceOrder.lastOffer.fromParticipant": {
          "enumValues": [
            "BUYER",
            "SELLER"
          ],
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderParticipantEnum"
        },
        "commerceOrder.lastOffer.id": (v10/*: any*/),
        "commerceOrder.lineItems": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItemConnection"
        },
        "commerceOrder.lineItems.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceLineItemEdge"
        },
        "commerceOrder.lineItems.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceLineItem"
        },
        "commerceOrder.lineItems.edges.node.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "commerceOrder.lineItems.edges.node.artwork.artistNames": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.date": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.dimensions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "dimensions"
        },
        "commerceOrder.lineItems.edges.node.artwork.dimensions.cm": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.dimensions.in": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.editionOf": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.id": (v10/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "commerceOrder.lineItems.edges.node.artwork.image.url": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.medium": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "commerceOrder.lineItems.edges.node.artwork.partner.id": (v10/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.partner.name": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.shippingOrigin": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.artwork.title": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceFulfillmentConnection"
        },
        "commerceOrder.lineItems.edges.node.fulfillments.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceFulfillmentEdge"
        },
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceFulfillment"
        },
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.createdAt": (v8/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.estimatedDelivery": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.id": (v10/*: any*/),
        "commerceOrder.lineItems.edges.node.fulfillments.edges.node.trackingId": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.id": (v10/*: any*/),
        "commerceOrder.lineItems.edges.node.selectedShippingQuote": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceShippingQuote"
        },
        "commerceOrder.lineItems.edges.node.selectedShippingQuote.displayName": (v8/*: any*/),
        "commerceOrder.lineItems.edges.node.selectedShippingQuote.id": (v10/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceShipment"
        },
        "commerceOrder.lineItems.edges.node.shipment.deliveryEnd": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.deliveryStart": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.estimatedDeliveryWindow": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.id": (v10/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.status": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.trackingNumber": (v9/*: any*/),
        "commerceOrder.lineItems.edges.node.shipment.trackingUrl": (v9/*: any*/),
        "commerceOrder.mode": {
          "enumValues": [
            "BUY",
            "OFFER"
          ],
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderModeEnum"
        },
        "commerceOrder.requestedFulfillment": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceRequestedFulfillmentUnion"
        },
        "commerceOrder.requestedFulfillment.__typename": (v8/*: any*/),
        "commerceOrder.requestedFulfillment.addressLine1": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.addressLine2": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.city": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.country": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.name": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.phoneNumber": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.postalCode": (v9/*: any*/),
        "commerceOrder.requestedFulfillment.region": (v9/*: any*/),
        "commerceOrder.shippingTotal": (v9/*: any*/),
        "commerceOrder.state": {
          "enumValues": [
            "ABANDONED",
            "APPROVED",
            "CANCELED",
            "FULFILLED",
            "PENDING",
            "REFUNDED",
            "SUBMITTED"
          ],
          "nullable": false,
          "plural": false,
          "type": "CommerceOrderStateEnum"
        },
        "commerceOrder.taxTotal": (v9/*: any*/),
        "commerceOrder.totalListPrice": (v9/*: any*/)
      }
    },
    "name": "OrderDetailsTestsQuery",
    "operationKind": "query",
    "text": "query OrderDetailsTestsQuery {\n  commerceOrder(id: \"order-id\") {\n    __typename\n    ...OrderDetails_order\n    id\n  }\n}\n\nfragment ArtworkInfoSection_artwork on CommerceOrder {\n  __isCommerceOrder: __typename\n  lineItems(first: 1) {\n    edges {\n      node {\n        artwork {\n          medium\n          editionOf\n          dimensions {\n            in\n            cm\n          }\n          date\n          image {\n            url(version: \"square60\")\n          }\n          title\n          artistNames\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrderDetailsHeader_info on CommerceOrder {\n  __isCommerceOrder: __typename\n  createdAt\n  code\n  state\n  requestedFulfillment {\n    __typename\n    ... on CommerceShip {\n      __typename\n    }\n    ... on CommercePickup {\n      __typename\n    }\n    ... on CommerceShipArta {\n      __typename\n    }\n  }\n  lineItems(first: 1) {\n    edges {\n      node {\n        shipment {\n          status\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrderDetailsPayment_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  creditCard {\n    brand\n    lastDigits\n    id\n  }\n}\n\nfragment OrderDetails_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommerceShip {\n      __typename\n      name\n    }\n    ... on CommerceShipArta {\n      __typename\n      name\n    }\n    ... on CommercePickup {\n      __typename\n    }\n  }\n  lineItems(first: 1) {\n    edges {\n      node {\n        artwork {\n          partner {\n            name\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  ...OrderDetailsHeader_info\n  ...ArtworkInfoSection_artwork\n  ...SummarySection_section\n  ...OrderDetailsPayment_order\n  ...TrackOrderSection_section\n  ...ShipsToSection_address\n  ...SoldBySection_soldBy\n}\n\nfragment ShipsToSection_address on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommercePickup {\n      __typename\n    }\n    ... on CommerceShip {\n      __typename\n      addressLine1\n      addressLine2\n      city\n      country\n      phoneNumber\n      postalCode\n      region\n    }\n    ... on CommerceShipArta {\n      __typename\n      addressLine1\n      addressLine2\n      city\n      country\n      phoneNumber\n      postalCode\n      region\n    }\n  }\n}\n\nfragment SoldBySection_soldBy on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommercePickup {\n      __typename\n    }\n  }\n  lineItems(first: 1) {\n    edges {\n      node {\n        artwork {\n          shippingOrigin\n          id\n        }\n        fulfillments(first: 1) {\n          edges {\n            node {\n              estimatedDelivery\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment SummarySection_section on CommerceOrder {\n  __isCommerceOrder: __typename\n  mode\n  buyerTotal(precision: 2)\n  taxTotal(precision: 2)\n  shippingTotal(precision: 2)\n  totalListPrice(precision: 2)\n  lineItems(first: 1) {\n    edges {\n      node {\n        selectedShippingQuote {\n          displayName\n          id\n        }\n        id\n      }\n    }\n  }\n  ... on CommerceOfferOrder {\n    lastOffer {\n      amount(precision: 2)\n      fromParticipant\n      id\n    }\n  }\n}\n\nfragment TrackOrderSection_section on CommerceOrder {\n  __isCommerceOrder: __typename\n  state\n  lineItems(first: 1) {\n    edges {\n      node {\n        shipment {\n          status\n          trackingUrl\n          trackingNumber\n          deliveryStart\n          deliveryEnd\n          estimatedDeliveryWindow\n          id\n        }\n        fulfillments(first: 1) {\n          edges {\n            node {\n              createdAt\n              trackingId\n              estimatedDelivery\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "76f7f61c266d40b4bf94126da71e5bb3";

export default node;
