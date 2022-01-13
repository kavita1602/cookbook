<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="food_item in items" :key="food_item.name">
        <FoodItem
          :name="food_item.strMeal"
          :food_image_url="food_item.strMealThumb+'/preview'"
          ::youtube_Link="food_item.strYoutube"
          :instructions_text="food_item.strInstructions"
        />
      </v-col>
      <v-spacer v-if="items.length%2!=0"></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
import FoodItem from "./FoodItem.vue";
export default {
  name: "MenuList",
  components: {
    FoodItem,
  },
  props:{
    items:Array
  }
};
</script>
<style scoped>
.menu-item-image {
  width: 60px;
  height: 50px;
}
div.col{
  padding:1px;
}
</style>