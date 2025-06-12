import { generateSeedPhrase } from "@lucid-evolution/lucid";
import { mnemonicToEntropy } from "bip39";

console.log(mnemonicToEntropy(generateSeedPhrase()));
