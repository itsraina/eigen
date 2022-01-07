/**
 * @generated SignedSource<<0b6d6dd1b23afcc230fcba4b909dd74d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateGeminiEntryForAssetInput = {
  clientMutationId?: string | null;
  metadata: any;
  sourceBucket: string;
  sourceKey: string;
  templateKey: string;
};
export type createGeminiAssetWithS3CredentialsMutation$variables = {
  input: CreateGeminiEntryForAssetInput;
};
export type createGeminiAssetWithS3CredentialsMutationVariables = createGeminiAssetWithS3CredentialsMutation$variables;
export type createGeminiAssetWithS3CredentialsMutation$data = {
  readonly createGeminiEntryForAsset: {
    readonly asset: {
      readonly token: string;
    } | null;
  } | null;
};
export type createGeminiAssetWithS3CredentialsMutationResponse = createGeminiAssetWithS3CredentialsMutation$data;
export type createGeminiAssetWithS3CredentialsMutation = {
  variables: createGeminiAssetWithS3CredentialsMutationVariables;
  response: createGeminiAssetWithS3CredentialsMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateGeminiEntryForAssetPayload",
    "kind": "LinkedField",
    "name": "createGeminiEntryForAsset",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GeminiEntry",
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "token",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createGeminiAssetWithS3CredentialsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createGeminiAssetWithS3CredentialsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "55a8c7797e0ad70ce3351836d4745c74",
    "id": null,
    "metadata": {},
    "name": "createGeminiAssetWithS3CredentialsMutation",
    "operationKind": "mutation",
    "text": "mutation createGeminiAssetWithS3CredentialsMutation(\n  $input: CreateGeminiEntryForAssetInput!\n) {\n  createGeminiEntryForAsset(input: $input) {\n    asset {\n      token\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e15ca704c55d48b26d15b9be3a699c47";

export default node;
