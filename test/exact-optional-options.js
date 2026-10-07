"use strict";

const assert = require("assert");
const path = require("path");
const ts = require("typescript");

describe("published exact optional namespace options", () => {
  it("implements the common options without namespace-only properties", () => {
    const program = ts.createProgram([
      path.join(__dirname, "exact-optional-options.fixture.ts"),
    ], {
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES2016,
      strict: true,
      exactOptionalPropertyTypes: true,
      noUncheckedIndexedAccess: true,
      skipLibCheck: false,
      noEmit: true,
      types: [],
    });
    assert.deepStrictEqual(ts.getPreEmitDiagnostics(program).map(diagnostic =>
      ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")), []);
  });
});
