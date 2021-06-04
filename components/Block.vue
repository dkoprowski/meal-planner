<template>
  <div>
    <h1 v-if="type === 'heading_1'">{{ text }}</h1>
    <h2 v-else-if="type === 'heading_2'">{{ text }}</h2>
    <h3 v-else-if="type === 'heading_3'">{{ text }}</h3>
    <li v-else-if="type === 'bulleted_list_item'">{{ text }}</li>
    <li v-else-if="type === 'numbered_list_item'" class="numbered">
      {{ text }}
    </li>
    <p v-else-if="type === 'paragraph'">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
  },
}
</script>

<style>
.numbered {
  list-style-type: square;
}
</style>
