import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../src/button.vue';
describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('astra__button--primary')
  })
})