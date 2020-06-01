import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import PropertyCard from '../../components/PropertyCard';

describe('<PropertyCard />', () => {
  const propertyCard = mount(
    <BrowserRouter>
      <PropertyCard />
    </BrowserRouter>
  );
  test('PropertyCard', () => {
    expect(propertyCard.length).toEqual(1);
  });
  test('property slider', () => {
    expect(propertyCard.find('.property__slider').length).toEqual(1);
  })
  test('property description', () => {
    expect(propertyCard.find('.property__description').length).toEqual(1);
  })
  test('property details', () => {
    expect(propertyCard.find('.property__description--details').length).toEqual(3);
  })
});