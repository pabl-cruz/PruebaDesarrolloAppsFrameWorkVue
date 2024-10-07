import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { describe, it, expect } from 'vitest'
import TheWelcome from '@/components/TheWelcome.vue'

describe('Homeview', () => {
  it('Carga el componente que controla la vista Home', async () => {
    const wrapper = shallowMount(HomeView)
    //esperar si componente que controla vista home 'TheWelcome' existe y retorne true
    expect(wrapper.findComponent(TheWelcome).exists()).toBe(true)
  })
})
