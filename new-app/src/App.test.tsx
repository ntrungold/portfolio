import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', ()=>{
  beforeEach(()=>{
    render(<App />);
  })
})
/*
//some example tests to eventually use
it("has the Control Panel when the application loaded"){
  const element = screen.getByText("Control Panel");

  expect(element).toBeInTheDocument();
}
//get says it must be there, query checks if it is there
it("does not show the Answer when we first load") {
  const element = screen.queryByTestId("answer-label");

  expect(element).not.toBeInTheDocument();
}
//eventually want to get most of the application tested
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/