<template>
  <div>
    Redirecting you to Okta to login
  </div>
</template>

<script>
export default {
    mounted: function(){
      if(!this.$auth.loggedIn){
        this.$auth.loginWith('okta')
      }
      else {
        this.$router.push('/')
      }
    }
}
</script>

<style>
</style>
