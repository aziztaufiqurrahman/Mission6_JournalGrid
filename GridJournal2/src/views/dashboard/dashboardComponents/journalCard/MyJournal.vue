<template>
    <v-card
      class="mx-auto"
      max-width="auto"
    >
      <v-img
        src="https://i.pinimg.com/564x/de/b8/93/deb89387bb83d452f3c11833347a584a.jpg"
        height="200px"
      ></v-img>
  
      <v-card-title>
        Halo, Dear..
      </v-card-title>
  
      <v-card-subtitle>
        Di sini tempat yang tepat buat kamu untuk menceritakan semua keluh kesah dan kesenanganmu 😊
      </v-card-subtitle>
      
      

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
          @click="show = !show"
        >
          Start Here
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          color="orange lighten-2"
          text
          @click="show = !show"
        >
          Next
        </v-btn>

        <v-btn
          color="orange lighten-2"
          text
          @click="show = !show"
        >
          Prev
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <p>{{currentDate()}}</p>
          <v-card-actions>
            <input type="date" v-model="date" required/>
            <input type="time" v-model="time" required/>
            <!-- <span>{{moment(date).format('YYYY-MM-DD')}}</span> -->
          </v-card-actions> 
          
          <v-container class="bg-surface-variant">
                    <v-row no-gutters>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                          ></v-textarea>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Save
                        </v-btn>
                     </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                            <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                          ></v-textarea>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Save
                        </v-btn>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                          ></v-textarea>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Save
                        </v-btn>
                        </v-sheet>
                      </v-col>

                      <v-responsive width="100%"></v-responsive>

                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                            <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                          ></v-textarea>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Save
                        </v-btn>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                          ></v-textarea>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Save
                        </v-btn>
                        </v-sheet>
                      </v-col>

                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                          ></v-textarea>
                        <v-spacer></v-spacer>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="white"
                                text
                                @click="dialog = false"
                            >
                                Save
                        </v-btn>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
        </div>
      </v-expand-transition>
    </v-card>
  </template>

<script>
// import moment from 'moment'
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  }
}
</script>


