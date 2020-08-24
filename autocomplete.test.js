import MyAutocomplete, { INPUT_ID } from "./component.react";
import { fireEvent, render, findByTestId } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import regeneratorRuntime from "regenerator-runtime";
import React from "react";

expect.extend(toHaveNoViolations);

it("should pass axe", async () => {
  const { findByTestId } = render(<MyAutocomplete />);
  const input = await findByTestId(INPUT_ID);
  fireEvent.change(input, {
    target: { value: "my value" },
  });
  expect(await axe(input)).toHaveNoViolations();
});
