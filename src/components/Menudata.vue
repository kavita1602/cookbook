<template>
    <v-data-table
      :headers="headers"
      :items="items"
    ></v-data-table>
</template>

<script>
  export default {
    name:'Menudata.vue',
  props:{
    items:Array
  },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Food Name',
            value: 'strMeal',
          },
          { text: 'Category', value: 'strCategory' },
          { text: 'Area', value: 'strArea' },
          { text: 'Main Ingredient', value: 'strIngredient1' }
        ]
      }
    },
  }
</script>