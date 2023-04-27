import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./Pages/Login";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render login page", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
