<template>
  <div>
    <h1 class="statement">Progress Report</h1>
    <p>{{statusDate.toLocaleDateString("en-US")}}</p>
    <p class="bodytext">
      {{statusUpdate}}
    </p>
    <nuxt-link to="/" class="callToAction">Go back</nuxt-link>
  </div>
</template>

<script>
export default {
  authenticated: true,
  data() {
    return {
      statusUpdate: 'We are sorry to report that bad weather has impacted the growth of our widgets. We are working as fast as we can to get widgets dispatched to you.',
      statusDate: new Date(),
    }
  }
}
</script>

<style>
</style>
