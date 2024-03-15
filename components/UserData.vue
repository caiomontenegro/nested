<template>
  <div>
    <input type="checkbox">
    <span>{{ userData.name }}</span>
    {{ Object.keys(userData.children).length }}

    <div v-if="Object.keys(userData.children).length > 0">
      <div v-for="(userDataChild, index) in userData.children" key="index">
        
        <div class="user">
          <span>----</span>
          <user-data :userData="userDataChild"></user-data>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object, 
      require: true
    }
  }
}
</script>