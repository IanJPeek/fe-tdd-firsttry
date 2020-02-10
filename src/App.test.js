import React from "react";
import App from "./App";
import { shallow } from "enzyme";
// import { render } from '@testing-library/react';

// run with help from : https://dev.to/christopherkade/introduction-to-front-end-unit-testing-510n


describe("UNIT Testing the App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("Component validation", () => {
    it("displays 0 as a default value", () => {
      expect(wrapper.find("h1").text()).toContain("0");
    });
  });

  it("should increase counter when the button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("h1").text()).toContain("1");
  });
});
