import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Slider from '../../components/Slider';

describe('<Slider />', () => {
  const slider = mount(
    <BrowserRouter>
      <Slider />
    </BrowserRouter>
  );
  test('slider', () => {
    expect(slider.length).toEqual(1);
  });
  test("image render", () => {
    expect(slider.find(".container__img").length).toEqual(2);
  });
  test("container img", () => {
    expect(slider.find(".container__slide").length).toEqual(2);
  });
});