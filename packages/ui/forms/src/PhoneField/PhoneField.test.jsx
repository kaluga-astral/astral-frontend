import React from 'react';
import { mount } from 'enzyme';

import Form from '../Form';

import PhoneField from './PhoneField';

describe('PhoneField', () => {
  let form;
  let phoneField;
  const onSubmit = jest.fn();

  beforeEach(() => {
    form = mount(<Form onSubmit={onSubmit}>{() => <PhoneField />}</Form>);
    phoneField = form.find('input[name="phone"]');
  });

  afterEach(() => {
    phoneField = null;
    form = null;
  });

  test.each`
    phone                   | expected
    ${'+79105554433'}       | ${'+7 (910) 555-44-33'}
    ${'+7 (910) 555-44-33'} | ${'+7 (910) 555-44-33'}
    ${'791055544'}          | ${'+7 (910) 555-44-'}
    ${'91055544'}           | ${'+7 (910) 555-44-'}
    ${'9'}                  | ${'+7 (9'}
  `(
    'type phone $phone input format value to $expected',
    ({ phone, expected }) => {
      phoneField.simulate('change', {
        target: { name: 'phone', value: phone },
      });

      expect(form.find('input').props().value).toBe(expected);
    },
  );

  test.each`
    phone                   | expected
    ${'+7 (910) 555-44-33'} | ${'79105554433'}
    ${'+79105554433'}       | ${'79105554433'}
    ${'79105554433'}        | ${'79105554433'}
  `(
    'type phone $phone, submit value has`t mask expected $expected',
    ({ phone, expected }) => {
      phoneField.simulate('change', {
        target: { name: 'phone', value: phone },
      });

      form.simulate('submit');

      expect(onSubmit).toBeCalledWith(
        { phone: expected },
        expect.anything(),
        expect.anything(),
      );
    },
  );
});
