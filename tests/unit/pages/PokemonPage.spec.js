import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage.vue';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe llamar mixPokemonArray al montar', () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonArray'
    );
    const wrapper = shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test('Debe hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe  mostrar los componentes PokemonPicture y PokemonOptions', () => {
    // probar que existen los pokemon picture y pokemon options
    // pokemonpicture tenga atributo pokemonid = 5 5 como string
    // pokemonoptions tenga atributo pokemons tobetru solo que existan

    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    const picture = wrapper.find('pokemon-picture-stub');
    const options = wrapper.find('pokemon-options-stub');

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes('pokemonid')).toBe('5');
    expect(options.attributes('pokemons')).toBeTruthy();
  });

  test('pruebas con checkAnswer()', async() => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    await wrapper.vm.checkAnswer(5)
    // console.log(wrapper.vm);
    expect(wrapper.find('h2').exists()).toBeTruthy()
    // console.log(wrapper.find('h2').text())
    expect(wrapper.vm.showPokemon ).toBeTruthy()
    expect(wrapper.vm.showPokemon ).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe(`Correcto, ${ pokemons[0].name }`)
    

    await wrapper.vm.checkAnswer(10)
    expect(wrapper.vm.message ).toBe(`Oops, era ${ pokemons[0].name }`)
    

  });




});
