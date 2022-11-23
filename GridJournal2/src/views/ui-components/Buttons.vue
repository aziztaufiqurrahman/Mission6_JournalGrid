<template>
  <div class="d-flex" id="app">
    <v-flex v-for="item in items" :key="item.id" xs12 md6 lg3>
      <v-card
      width="344"
      position="relative"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="193.5px"
      ></v-img>

<<<<<<< Updated upstream
      <v-card-title>
        {{item.title}}
      </v-card-title>
=======
import ButtonsDefault from "@/components/vuetifyComponents/buttons/ButtonsDefault.vue";
// import ButtonsOutlined from "@/components/vuetifyComponents/buttons/ButtonsOutlined.vue";
// import ButtonsBlock from "@/components/vuetifyComponents/buttons/ButtonsBlock.vue";
// import ButtonsIcon from "@/components/vuetifyComponents/buttons/ButtonsIcon.vue";
// import ButtonsRounded from "@/components/vuetifyComponents/buttons/ButtonsRounded.vue";
// import ButtonsSizing from "@/components/vuetifyComponents/buttons/ButtonsSizing.vue";
>>>>>>> Stashed changes

      <v-card-subtitle>
        {{item.date}}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
          @click="dialog = true"
        >
          More
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
        @click="dialog = true"
        >
          <v-icon>{{ 'mdi-chevron-right' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>  
      </v-expand-transition>
    </v-card>
  </v-flex>
  
  <v-dialog
      class="mx-auto"
      v-model="dialog"
      width="500"
    >
      <v-card
      class="mx-auto">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script >
//setup lang="ts"
import { ref } from "vue";
// import BaseCard from "@/components/BaseCard.vue";

// import ButtonsDefault from "@/components/vuetifyComponents/buttons/ButtonsDefault.vue";
// import ButtonsOutlined from "@/components/vuetifyComponents/buttons/ButtonsOutlined.vue";
// import ButtonsBlock from "@/components/vuetifyComponents/buttons/ButtonsBlock.vue";
// import ButtonsIcon from "@/components/vuetifyComponents/buttons/ButtonsIcon.vue";
// import ButtonsRounded from "@/components/vuetifyComponents/buttons/ButtonsRounded.vue";
// import ButtonsSizing from "@/components/vuetifyComponents/buttons/ButtonsSizing.vue";\
export default {
    data () {
      return {
        dialog: false,
        items:[
          {
            id:1,
            title:"Reminder Kerja",
            date:"22-04-2020"
          },
          {
            id:2,
            title:"Hari-hariku",
            date:"22-04-2022"
          },
          {
            id:3,
            title:"Ulang Tahunku",
            date:"22-04-2022"
          }
        ]
    }
  }
}
</script>