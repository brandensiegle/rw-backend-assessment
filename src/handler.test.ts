import { handler } from "./handler";

describe("Stub", () => {
  it("Stub", async () => {
    const ExampleBody = {
      duration: 72,
      platforms: ["netflix", "disney", "prime"],
      genre: "scifi",
    };

    const response = await handler({} as any, {} as any);

    expect(response.statusCode).toBe(200);
  });
});
