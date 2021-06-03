const formatReservations = require('./index');

describe("formatReservations", () => {
  test("lists one reservations for the tool", () => {
    const toolData = {
      tool: "Band Saw",
      reservations: [
        {
          username: "Hoppleypawz",
          returnDate: "June 01"
        }
      ]
    };

    const result = formatReservations(toolData);
    expect(result).toEqual(`Reservations for Band Saw:\n- Return Date: June 01`);

    // The expected string would print out like this:
    // Reservations for Band Saw:
    // - Return Date: June 01

  });

  test("creates a list of reservations for the tool", () => {
    const toolData = {
      tool: "Band Saw",
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
    };

    const result = formatReservations(toolData);
    expect(result).toEqual(
      `Reservations for Band Saw:\n- Return Date: June 01\n- Return Date: June 11\n- Return Date: June 13`
    );

    // The expected string would print out like this:
    // Reservations for Band Saw:
    // - Return Date: June 01
    // - Return Date: June 11
    // - Return Date: June 13
  });
});