
<template>
  <div>
    <h1>Welcome to Nested Users</h1>
    <span>Click on the name user, to hide him.</span>
    <div 
      v-for="(user, index) in userData"
      key="index"
      :class="{user__parent: true, user__child: isLastChild(index)}"
    >
      <user-data :userData="user" :lasChild="isLastChild(index)"/>
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
    },
    isLastChild(index) {
      const userIndex = parseInt(index)
      if(userIndex === Object.keys(this.userData).length -1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.user {

  &__parent {
    border-left: solid 2px;
    margin-left: 15px;
    background-color: white;
    
    &:hover {
    background-color: rgb(185, 185, 218);
    }
  }

  &__child {
    border: none;
  }
}

</style>