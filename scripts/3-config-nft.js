import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xD3218dC3649B59B2d75Bb47Ac08DFf097944A076");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "CultureDAO Membership NFT",
        description: "This NFT will give you access to CultureDAO!",
        image: readFileSync("scripts/assets/img2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();