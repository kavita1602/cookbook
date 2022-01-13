<template>
  <v-container style="min-width: 400px; background-color: whitesmoke">
    <v-row>
      <v-col cols="4">
        <img
          style="max-width:100px;height:auto;"
          :src="food_image_url"
          alt="no image"
        />
      </v-col>
      <v-col cols="8">
        <v-row>
          <h3>{{name}}</h3>
        </v-row>
        <v-row>
          <v-icon color="secondary">mdi-youtube</v-icon>
          <a :href="youtube_Link"
            target="_blank"
          >watch on youtube</a>
        </v-row>
        <v-row>
          <v-btn align="center" color="secondary" @click="openInstructions"
            >Intructions Will Help You</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "FoodItem",
  props:{
    name:String,
    food_image_url:String,
    youtube_Link: String,
    instructions_text: String
    
  },
  methods: {
    openInstructions() {
      alert(
        this.instructions_text
      );
    },
  },
};
</script>

<style scoped>
.v-col {
  padding: 8px;
}
div.col{
  padding:10px;
}
</style>
