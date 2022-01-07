/**
 * @generated SignedSource<<c981ba93ba510ceb4239fecd40fd802e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AboutArtist_artwork$data = {
  readonly artists: ReadonlyArray<{
    readonly id: string;
    readonly biographyBlurb: {
      readonly text: string | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistListItem_artist">;
  } | null> | null;
  readonly " $fragmentType": "AboutArtist_artwork";
};
export type AboutArtist_artwork = AboutArtist_artwork$data;
export type AboutArtist_artwork$key = {
  readonly " $data"?: AboutArtist_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"AboutArtist_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AboutArtist_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistBlurb",
          "kind": "LinkedField",
          "name": "biographyBlurb",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistListItem_artist"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "26f6eabf2f6f784d4f380c4aa0dd2874";

export default node;
