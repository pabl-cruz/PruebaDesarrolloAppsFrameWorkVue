import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
//importar modulos que crean y activan instancia de pinia
import { createPinia, setActivePinia } from 'pinia'
import CounterComponent from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter'

describe('CounterComponent', () => {
  //cargar instancia de pinia antes de empezar cada prueba
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('Se coloca y retorna valor inicial en contador', () => {
    //se monta componente y se carga plugin global de instancia de pinia
    mount(CounterComponent, {
      global: {
        plugins: [createPinia()]
      }
    })
    const store = useCounterStore()
    store.count = 3
    const counter = store.count
    console.log(counter)
    expect(counter).toBe(3)
  })

  it('Aumenta el contador en uno al hacer clic en "Incrementar Contador"', async () => {
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [createPinia()]
      }
    })

    //capturar valor de contador antes de realizar valor
    const counterBefore = Number(wrapper.find('#counterHTML').text())
    const increase = wrapper.find('#increase')
    //esperar a que se gatille accion click en btnaumentar
    await increase.trigger('click')
    const counterAfter = Number(wrapper.find('#counterHTML').text())
    //esperar que valor del contador antes de gatillar boton de aumento de contador, sea menos que valor despues del evento de gatillado
    expect(counterBefore).toBeLessThan(counterAfter)
  })

  it('Disminuye el contador en uno al hacer clic en "Disminuir Contador"', async () => {
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [createPinia()]
      }
    })

    //capturar valor de contador antes de realizar valor
    const counterBefore = Number(wrapper.find('#counterHTML').text())
    const decrease = wrapper.find('#decrease')
    //esperar a que se gatille accion click en btnaumentar
    await decrease.trigger('click')
    const counterAfter = Number(wrapper.find('#counterHTML').text())

    expect(counterAfter).toBeLessThan(counterBefore)
  })
})
