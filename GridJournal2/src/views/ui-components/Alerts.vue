<script setup lang="ts">
import { ref } from "vue";

import MyJournal from "../dashboard/dashboardComponents/journalCard/MyJournal.vue";
</script>

<template>
  
  <v-row>
    <v-col cols="12" lg="4" class="d-flex align-items-stretch">
      <MyJournal />
    </v-col>
  </v-row>
</template>
