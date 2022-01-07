/**
 * @generated SignedSource<<ff5965281d062646da01c8ce53a6e0c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchCriteriaAttributes = {
  acquireable?: boolean | null;
  additionalGeneIDs?: ReadonlyArray<string> | null;
  artistID?: string | null;
  atAuction?: boolean | null;
  attributionClass?: ReadonlyArray<string> | null;
  colors?: ReadonlyArray<string> | null;
  dimensionRange?: string | null;
  height?: string | null;
  inquireableOnly?: boolean | null;
  locationCities?: ReadonlyArray<string> | null;
  majorPeriods?: ReadonlyArray<string> | null;
  materialsTerms?: ReadonlyArray<string> | null;
  offerable?: boolean | null;
  partnerIDs?: ReadonlyArray<string> | null;
  priceRange?: string | null;
  sizes?: ReadonlyArray<string> | null;
  width?: string | null;
};
export type CreateSavedSearchContentContainerV2RefetchQuery$variables = {
  criteria?: SearchCriteriaAttributes | null;
};
export type CreateSavedSearchContentContainerV2RefetchQueryVariables = CreateSavedSearchContentContainerV2RefetchQuery$variables;
export type CreateSavedSearchContentContainerV2RefetchQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV2_me">;
  } | null;
};
export type CreateSavedSearchContentContainerV2RefetchQueryResponse = CreateSavedSearchContentContainerV2RefetchQuery$data;
export type CreateSavedSearchContentContainerV2RefetchQuery = {
  variables: CreateSavedSearchContentContainerV2RefetchQueryVariables;
  response: CreateSavedSearchContentContainerV2RefetchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "criteria"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "criteria",
    "variableName": "criteria"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSavedSearchContentContainerV2RefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "CreateSavedSearchContentContainerV2_me"
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
    "name": "CreateSavedSearchContentContainerV2RefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emailFrequency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SearchCriteria",
            "kind": "LinkedField",
            "name": "savedSearch",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1ab7d09a51c2c1dc85e672dab4783d1f",
    "id": null,
    "metadata": {},
    "name": "CreateSavedSearchContentContainerV2RefetchQuery",
    "operationKind": "query",
    "text": "query CreateSavedSearchContentContainerV2RefetchQuery(\n  $criteria: SearchCriteriaAttributes\n) {\n  me {\n    ...CreateSavedSearchContentContainerV2_me_1ff8oJ\n    id\n  }\n}\n\nfragment CreateSavedSearchContentContainerV2_me_1ff8oJ on Me {\n  emailFrequency\n  savedSearch(criteria: $criteria) {\n    internalID\n  }\n}\n"
  }
};
})();

(node as any).hash = "f0c000e35ef49f83f05a8e83f042b9fa";

export default node;
