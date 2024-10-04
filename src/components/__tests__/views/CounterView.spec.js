import { shallowMount } from '@vue/test-utils'
import CounterView from '@/views/CounterView.vue'
import { describe, it, expect } from 'vitest'
import CounterComponent from '@/components/Counter.vue'

describe('Homeview', () => {
  it('Carga el componente que controla la vista Counter', async () => {
    const wrapper = shallowMount(CounterView)
    //esperar si componente que controla vista home 'TheWelcome' existe y retorne true
    expect(wrapper.findComponent(CounterComponent).exists()).toBe(true)
  })
})
