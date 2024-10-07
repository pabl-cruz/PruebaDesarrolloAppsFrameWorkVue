import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import { describe, it, expect } from 'vitest'
import AboutComponent from '@/components/AboutComponent.vue'

describe('Homeview', () => {
  it('Carga el componente que controla la vista About', async () => {
    const wrapper = shallowMount(AboutView)
    //esperar si componente que controla vista home 'TheWelcome' existe y retorne true
    expect(wrapper.findComponent(AboutComponent).exists()).toBe(true)
  })
})
