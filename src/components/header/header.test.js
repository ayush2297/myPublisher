import { render, screen } from '@testing-library/react';
import Header from "./header";

test("should render header-pane with header title as MyPublisher", () => {
  render(<Header />)
  const headerComp = screen.getByTestId('header-pane')
  const pageTitle = screen.getByTestId("page-title")
  expect(headerComp).toBeInTheDocument()
  expect(pageTitle).toBeInTheDocument()
})