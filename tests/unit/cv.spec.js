import { shallowMount } from '@vue/test-utils'
import cv from '@/components/cv.vue'

describe('cv.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(cv, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
