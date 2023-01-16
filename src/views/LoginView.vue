<script lang="ts" setup>
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass">
        <div class="space-y-3">
          <h1 class="text-2xl">Login Page</h1>

          <p></p>
        </div>

        <template #footer>
          <BaseButtons>
            <BaseButton label="Back" to="/dashboard" color="info" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
