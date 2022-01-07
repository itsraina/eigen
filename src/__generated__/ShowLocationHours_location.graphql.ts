/**
 * @generated SignedSource<<452a1465b448352f7f78e20b0fb21e12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowLocationHours_location$data = {
  readonly openingHours: {
    readonly schedules?: ReadonlyArray<{
      readonly days: string | null;
      readonly hours: string | null;
    } | null> | null;
    readonly text?: string | null;
  } | null;
  readonly " $fragmentType": "ShowLocationHours_location";
};
export type ShowLocationHours_location = ShowLocationHours_location$data;
export type ShowLocationHours_location$key = {
  readonly " $data"?: ShowLocationHours_location$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowLocationHours_location">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowLocationHours_location",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "openingHours",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FormattedDaySchedules",
              "kind": "LinkedField",
              "name": "schedules",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "days",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hours",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "OpeningHoursArray",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            }
          ],
          "type": "OpeningHoursText",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Location",
  "abstractKey": null
};

(node as any).hash = "9d72ce84b277694788a1013b451f42a7";

export default node;
