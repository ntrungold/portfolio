import { render, screen } from '@testing-library/react';
import App from './App';
import React, {useState} from 'react';
import './App.css';
import SETS from './assets/q-sets.json';
import { ControlPanel } from './components/ControlPanel';
import { SetViewer } from './components/SetViewer';
import {GameBoard} from './components/GameBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Set} from './interfaces/set';
describe('App', ()=>{
  beforeEach(()=>{
    render(<App />);
  })
})
/*
describe('Control Panel', () => {
  it("has the Control Panel when the application loaded",  () =>{
    const element = screen.getByText("Control Panel");
  
    expect(element).toBeInTheDocument();
  });
  describe('setRandomSet', () => {
    it('should pick a set from my q-sets.JSON', ()=>{
      const random: RandomSet = new setRandomSet();

      const result: set = RandomSet.setRandomSet();

      expect(set).toEqual(getRandomElement(SETS as Set[]));
    });
  describe('togglePopup', () => {

      it('should open the popup for setup', () => {

        jest.spyOn(App, 'togglePopup');

      });

    });

  });
});

//some example tests to eventually use
it("has the Control Panel when the application loaded"){
  const element = screen.getByText("Control Panel");

  expect(element).toBeInTheDocument();
}
it("has the Popup when the application loaded"){
  const element = screen.getByText("Control Panel");

  expect(element).toBeInTheDocument();
}
it("has the Control Panel when the application loaded"){
  const element = screen.getByText("Control Panel");

  expect(element).toBeInTheDocument();
}
it("has the Control Panel when the application loaded"){
  const element = screen.getByText("Control Panel");

  expect(element).toBeInTheDocument();
}
//get says it must be there, query checks if it is there
it("does not show the Answer when we first load") {
  const element = screen.queryByTestId("answer-label");

  expect(element).not.toBeInTheDocument();
}

eventually want to get most of the application tested
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/