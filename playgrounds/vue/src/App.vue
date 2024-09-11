<template>
  <div class="pux-App">
    <div v-for="str in b">
      {{ str }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const b = ['a', 'b', 'c'];
</script>
