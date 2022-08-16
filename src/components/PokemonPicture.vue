<template>
    <div class="pokemon-container">

        <img v-if="!showPokemon" class="hidden-pokemon" :src="imgSrc" alt="pokemon">

        <img v-else class="fade-in" :src="imgSrc" alt="pokemon">

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
}
img {
    height: 200px;
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