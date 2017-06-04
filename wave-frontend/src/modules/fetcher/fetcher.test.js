import fetcher from '.';

test("fetcher doesn't use mocks if not in test mode", () => {
  expect(fetcher.isMocked).toBeUndefined();
});
