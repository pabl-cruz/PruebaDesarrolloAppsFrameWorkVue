import { shallowMount, mount } from '@vue/test-utils'
import ParentChildView from '@/views/ParentChildView.vue'
import { describe, it, expect } from 'vitest'
import ParentComponent from '@/components/Parent.vue'
import ChildComponent from '@/components/Child.vue'

describe('ParentChildView', () => {
  it('Carga los componentes que controlan la vista ParentChild', async () => {
    const wrapper = shallowMount(ParentChildView)
    //esperar si componente que controla vista ParentChild existe y retorne true
    expect(wrapper.findComponent(ParentComponent).exists()).toBe(true)
  })

  it('Carga el componente hijo que está dentro de componente Parent', async () => {
    const wrapper = shallowMount(ParentComponent)
    //esperar si componente hijo existe dentro de Parent y retorne true para pasar prueba
    expect(wrapper.findComponent(ChildComponent).exists()).toBe(true)
  })
  it('Se envia texto al presionar botón de componente Child', async () => {
    //usar mount para cargar componentes hijo en comprobaciones
    const wrapper = mount(ParentChildView)
    //obtener input con data-test inputText y cargarle un texto
    await wrapper.get('[data-test="textInput"]').setValue('Titulo de prueba')
    //obtener elemento con atributo data-test = form y gatillar acción de subir información
    await wrapper.get('[data-test="form"]').trigger('submit')
    //esperar que elemento data-test title reciba el valor enviado desde data test form y compruebe que el texto sea el mismo
    expect(wrapper.find('[data-test="title"]').text()).toBe('Titulo de prueba')
  })
})
