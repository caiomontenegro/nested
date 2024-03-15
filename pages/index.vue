
<template>
  <div>
    <h1>Welcome to Nested Items</h1>
    <div v-for="(user, index) in userData">
      <input type="checkbox">
      <span>Name</span>
    </div>
  </div>
</template>

<script>
import userFile from '/static/data/userData.json'

export default {
  data () {
    return {
      userData: []
    }
  },

  async beforeMount() {
    try {
      this.userData = await this.consumeData()
    } catch(error) {
      console.error('Error to consume user data: ', error)
    }
  },

  methods: {
    consumeData() {
      return userFile;
    }
  }
}
</script>