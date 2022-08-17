import { shallowMount } from "@vue/test-utils"
import PokemonPicture from '@/components/PokemonPicture.vue'

describe('PokemonPicture componet', () => {

    test('debe hacer match con el snapshot',()=>{

        const wrapper = shallowMount( PokemonPicture,{
            
            props:{
                pokemonId: 1,
                showPokemon: false
            }
        } )
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
    test('Debe mostrar la imagen oculta y el pokemon 100',()=>{
        const wrapper = shallowMount( PokemonPicture,{
            props:{
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect( img1.exists() ).toBeTruthy()
        expect( img2 ).toBe(undefined)

        expect( img1.classes('hidden-pokemon') ).toBeTruthy()

        // console.log( img1.attributes('src'))
        // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg',
        expect( img1.attributes('src') )
            .toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

    })

    
    
    
    test('Debe mostrar el pokemon si showPokemon:true',()=>{
        const wrapper = shallowMount( PokemonPicture,{
            props:{
                pokemonId: 100,
                showPokemon: true
            }
        })

        // console.log(wrapper.html())
        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( img.classes('hidden-pokemon') ).toBe(false)
        expect( img.classes('fade-in') ).toBeTruthy()

    })
})