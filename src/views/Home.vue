<template>
  <div>
    <SearchBox
      @search-with-ingrediant="searchAndLoadFoodItemsForIngrediant"
      @search-with-category="searchAndLoadFoodItemsForCategory"
    />
    <v-progress-linear
      indeterminate
      color="red"
      rounded
      height="5px"
      v-show="loading"
    ></v-progress-linear>
    <v-container>
      <v-row>
        <v-col>
        <v-switch
          style="float: right"
          v-model="isGridView"
          color="red"
          :label="isGridView?'Grid View':'Menu View'"
        >
        </v-switch>
        </v-col>
      </v-row>
      <v-row>
        <MenuList :items="food_item_complete_list" v-show="!isGridView" />
        <Menudata :items="food_item_complete_list" v-show="isGridView" />
      </v-row>
    </v-container>
  </div>
</template>


<script>
import axios from "axios";
import SearchBox from "../components/SearchBox";
import MenuList from "../components/MenuList";
import Menudata from "../components/Menudata.vue";
export default {
  name: "Home",
  components: {
    SearchBox,
    MenuList,
    Menudata,
  },
  data() {
    return {
      food_item_complete_list: [],
      loading: false,
      isGridView: false,
    };
  },
  methods: {
    async searchAndLoadFoodItemsForCategory(category) {
      await this.getMealData("c", category);
    },
    async searchAndLoadFoodItemsForIngrediant(ingrediant) {
      await this.getMealData("i", ingrediant);
    },
    async getMealData(querystringname, value) {
      this.loading = true;
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${querystringname}=${value}`
      );
      let food_items_list = response.data.meals;
      this.food_item_complete_list = [];
      for (let food_item of food_items_list) {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food_item.idMeal}`;
        let response = await axios.get(url);
        this.food_item_complete_list.push(response.data.meals[0]);
      }
      console.log(this.food_item_complete_list);
      this.loading = false;
    },
  },
};
</script>
