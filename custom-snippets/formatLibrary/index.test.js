const formatLibrary = require('./index');

describe("formatLibrary", () => {
  test("lists one tool and its quantity available", () => {
    const libraryData = [
      {
        name: "Band Saw",
        totalQuantity: 35,
        reservations: [
          {
            username: "Hoppleypawz",
            returnDate: "June 01"
          },
          {
            username: "Wyndguyxx",
            returnDate: "June 11"
          },
          {
            username: "Laverbean2001",
            returnDate: "June 13"
          }
        ]
      }
    ];

    const result = formatLibrary(libraryData);

    expect(result).toEqual(
      `Tool Library:\n1. Band Saw (Available: 32)`
    );

    // The expected string would print out like this:
    // Tool Library:
    // 1. Band Saw (Available: 32)
  });

  test("lists multiple tools and their quantity available", () => {
    const libraryData = [
      {
        name: "Band Saw",
        totalQuantity: 35,
        reservations: [
          {
            username: "Hoppleypawz",
            returnDate: "June 01"
          },
          {
            username: "Wyndguyxx",
            returnDate: "June 11"
          },
          {
            username: "Laverbean2001",
            returnDate: "June 13"
          }
        ]
      },
      {
        name: "Bow",
        totalQuantity: 18,
        reservations: [
          {
            username: "Guttersnipe23",
            returnDate: "June 02"
          }
        ]
      }
    ];

    const result = formatLibrary(libraryData);

    expect(result).toEqual(
      `Tool Library:\n1. Band Saw (Available: 32)\n2. Bow (Available: 17)`
    );

    // The expected string would print out like this:
    // Tool Library:
    // 1. Band Saw (Available: 32)
    // 2. Bow (Available: 17)
  });
});
