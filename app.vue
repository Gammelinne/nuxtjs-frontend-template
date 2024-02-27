<script setup lang="ts">
import { useLocaleStore } from "@/stores/LocaleStore";
import Button from "@/components/ui/button/Button.vue";
import { ref, watch } from "vue";

const localeStore = useLocaleStore();
const locale = ref(localeStore.locale);

watch(locale, (newLocale: string) => {
  localeStore.setLocale(newLocale);
});
</script>

<template>
  <div>
    <Button>Click me</Button>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <p>{{ $t("welcome") }}</p>
    </form>
  </div>
</template>
