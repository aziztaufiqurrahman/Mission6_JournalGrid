<script setup lang="ts">
import { ref } from "vue";

import Quotes from "./dashboardComponents/quotesBox/quotes.vue";
import BlogCard from "./dashboardComponents/blog-card/BlogCard.vue";
</script>

<template>
  
  <v-row>
    <v-col cols="12" sm="12">
      <Quotes />
    </v-col>
    <v-col cols="12" lg="8" class="d-flex align-items-stretch">
      <ProductMonthTable />
    </v-col>
    <v-col cols="12" sm="12">
    <BlogCard />
    </v-col>
  </v-row>
</template>
