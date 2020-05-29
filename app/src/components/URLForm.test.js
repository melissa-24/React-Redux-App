import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import URLForm from "./URLForm";

describe("URLForm", () => {
  const form = shallow(<URLForm />);

  it("renders properly", () => {
    expect(form).toMatchSnapshot();
  });

  describe("when clicking the `shorten url` button", () => {
    beforeEach(() => {
      form.find(".btn-shorten").simulate("click");
    });

    it("submits and receives back a shortened url", () => {
      const result = form.find(".shortened");
      expect(result.text()).toContain("https://cleanuri.com/");
    });
  });
});