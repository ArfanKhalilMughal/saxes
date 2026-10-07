import {
  NSOptionsWithoutNamespaces,
  SaxesOptions,
  SaxesParser,
  SaxesTagNS,
  SaxesTagPlain,
} from "../build/dist/saxes";

export const plainOptions: NSOptionsWithoutNamespaces = { xmlns: false };
export const commonOptions: SaxesOptions = plainOptions;

export const plainParser = new SaxesParser(plainOptions);
plainParser.on("opentag", (tag: SaxesTagPlain) => {
  tag.attributes.example?.toUpperCase();
});

export const namespacedParser = new SaxesParser({
  xmlns: true,
  additionalNamespaces: { example: "urn:example" },
  resolvePrefix: (prefix: string) => prefix === "fallback" ? "urn:fallback" : undefined,
});
namespacedParser.on("opentag", (tag: SaxesTagNS) => {
  tag.local.toUpperCase();
  tag.uri.toUpperCase();
});
