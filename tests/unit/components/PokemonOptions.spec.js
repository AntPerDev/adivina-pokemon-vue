import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions Component', () => {
  
   let wrapper;
    beforeEach(() => {
    wrapper = shallowMount( PokemonOptions, {
      props: {
        pokemons,
      }
    })
  })

  test('debe hacer match con el snapshot', () => {

    // console.log(wrapper.html() );
    
    expect(wrapper.html())
        .toMatchSnapshot(``);
  });

  test('Debe mostrar las 4 opciones correctamente',()=>{
    // que existan 4 listitems
    // cada li debe tener su nombre del pokemon

    const liTags = wrapper.findAll( 'li' )
    expect( liTags.length ).toBe(4)

    expect( liTags[0].text() ).toBe('pikachu')
    expect( liTags[1].text() ).toBe('charmander')
    expect( liTags[2].text() ).toBe('venusaur')
    expect( liTags[3].text() ).toBe('mew')

  });


  test('Debe emitir "selection" con sus repectivos parámetros al hacer click',()=>{

    const [li1,li2,li3,li4] = wrapper.findAll('li')

    li1.trigger('click') 
    li2.trigger('click') 
    li3.trigger('click') 
    li4.trigger('click') 
    // console.log( wrapper.emitted('selection'))
    expect( wrapper.emitted('selection').length ).toBe(4)
    
    expect( wrapper.emitted('selection')[0] ).toEqual( [ 5 ])
    expect( wrapper.emitted('selection')[1] ).toEqual( [ 10 ])
    expect( wrapper.emitted('selection')[2] ).toEqual( [ 15 ])
    expect( wrapper.emitted('selection')[3] ).toEqual( [ 20 ])


  });
});
