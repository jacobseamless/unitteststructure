"use strict";

describe("/services/some/service", () => {
  let Service;

  beforeAll(() => {
    Service = new (require("./Service"))({});
  });

  describe("someMethod1", () => {
    test("Successfully does something", async () => {
      expect(1).toBe(1);
    });
  });

  describe("someMethod2", () => {
    test("Successfuly does some other thing", async () => {
      expect(true).toBe(false);
    });
  });
});
