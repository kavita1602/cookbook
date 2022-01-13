<template>
  <v-container fluid class="search">
    <v-row>
      <v-icon color="secondary">mdi-magnify</v-icon>
      <h3>Search here</h3>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Enter the ingredient!"
          outlined
          clearable
          dense
          v-model="ing_value"
          hide-details
          @input="onIngredientInput"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          :items="category_items"
          outlined
          v-model="selected_item"
          item-text="strCategory"
          item-value="strCategory"
          dense
          hide-details
          @input="onCategoryInput"
        >
        </v-select>
      </v-col>
      <v-col>
        <v-btn color="primary" @click="onSearchClick">search</v-btn>
      </v-col>
    </v-row>
    <p  class="app" v-if="ing_value">Great..! you'r searching with Ingrediant </p>
    <p class="app" v-else-if="selected_item!=='--not selected--'">Great..! you'r searching with Category</p>
    <p class="app" v-else> <b>please select atleast one category...!</b></p>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "searchbox",
  data() {
    return {
      ing_value: "",
      category_items: [],
      selected_item: "",
    };
  },
  async created() {
    let response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    this.category_items = [
      { strCategory: "--not selected--" },
      ...response.data.meals,
    ];
    this.selected_item = this.category_items[0].strCategory
    this.ing_value = this.ing_value_from_store
    this.onSearchClick()
  },
  methods: {
    onSearchClick() {
      if(this.ing_value){
        this.$emit('search-with-ingrediant',this.ing_value)
        this.$store.dispatch('updateIngValue',this.ing_value)
      }
      else if (this.selected_item!=='--not selected--'){
        this.$emit('search-with-category',this.selected_item)
      }
      else{
        alert('Please select Category or input the Ingrediant!')
      }
    },
    onIngredientInput(value) {
      this.selected_item = '--not selected--'
      console.log(value)
    },
    onCategoryInput() {
      this.ing_value = ''
    },
  },
  computed:{
    ing_value_from_store(){
      return this.$store.getters.getIngValue
    }
  }
};
</script>
<style scoped>
.search{
  background-color: honeydew;
  color: black;

}
.app{
  background-color: rgb(95, 156, 160);
  color: black;
  
}
</style>
