import { describe, expect, it } from 'vitest';

// https://v1.test-utils.vuejs.org/zh/guides/
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