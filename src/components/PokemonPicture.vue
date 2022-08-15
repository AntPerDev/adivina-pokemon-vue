<template>
    <div class="pokemon-container">

        <img class="hidden-pokemon" :src="imgSrc" alt="pokemon">

        <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon">

    </div>

</template>
<script>

// Number, required pokemonId

export default {

    props: {
        pokemonId: {
            type: Number,
            default: 1,
            required: true,
            validator(value) {
                return value >= 1
            }
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}
</script>
<style scoped>
.pokemon-container {
    height: 200px;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    padding: 5px;
    width: 200px;
    /* height: 150px; */
    margin: 10px;
    /* line-height: 150px; */
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;




    /* height: 200px; */
    position: absolute;
    /* right: 36%; */
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);

}
</style>