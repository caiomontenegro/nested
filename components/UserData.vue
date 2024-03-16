<template>
  <div class="user">
    <!-- User pai -->
    <div>
      <span v-if="lastChild" class="user__verticalLine">
      </span>
      <span class="user__horizontalLine"></span>
      <input class="user__checkbox" type="checkbox">
      <span>{{ userData.name }}</span>

      <!-- User filho  -->
      <div v-if="Object.keys(userData.children).length > 0">
        <div 
          v-for="(userDataChild, index) in userData.children"
          key="index"
          :class="{user__parent: true, user__child: isLastChild(index) }"
        >
          <user-data :userData="userDataChild" :lastChild="isLastChild(index)"></user-data>
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
    },
    lastChild: {
      type: Boolean,
      require: true
    }
  },

  methods: {
    isLastChild(index) {
      const userIndex = parseInt(index)
      if(userIndex === Object.keys(this.userData.children).length -1) {
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
  position: relative;

  &__parent {
    margin-left: 15px;
    border-left: solid 2px;
    background-color: white;
    
    &:hover {
    background-color: rgb(185, 185, 218);
    }
  }
  
  &__child {
    border: none;
  }

  &__horizontalLine {
    position: absolute;
    top: 9px;
    display: block;
    width: 8px;
    border-bottom: solid 2px;
  }

  &__verticalLine {
    position: absolute;
    display: block;
    height: 9px;
    border-left: solid 2px;
  }

  &__checkbox {
    margin-left: 10px;
  }
}


</style>