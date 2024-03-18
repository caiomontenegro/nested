export const usersData = defineStore('usersData', {
  state: () => ({
    users: {}
  }),
  getters: {
    usersDataState: (state) => state
  },
  actions: {
    updateUserStatus(payload) {
      this.users = payload
    }
  }
})