<template>
  <div class="user">
    <!-- User pai -->
    <div>
      <span v-if="lastChild" class="user__verticalLine"></span>
      <span class="user__horizontalLine"></span>
      <input class="user__checkbox" type="checkbox" v-model="userSelected" @click="toggleUser" :indeterminate="indeterminateUser">
      <span @click="showUser">{{ userData.name }}</span>

      <!-- User filho  -->
      <div v-if="Object.keys(userData.children).length > 0">
        <div
          v-for="(userDataChild, index) in userData.children"
          :key="index"
          :class="{user__parent: true, user__child: isLastChild(index) }"
        >
          <user-data
            :class="{hide: hideUser}"
            :userData="userDataChild"
            :lastChild="isLastChild(index)"
            :childrenSelected="userSelected"
            @receive-child-status="receiveChildStatus(index, $event)"
            @receive-children-status="receiveChildrenStatus(index, $event)"
            @receive-indeterminate-status="receiveIndeterminateStatus"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSelected: false,
      indeterminateUser: false,
      allChildrenSelected: false,
      childQtt: 0,
      childrenStatus: [],
      hideUser: false
    }
  },
  props: {
    userData: {
      type: Object,
      require: true
    },
    lastChild: {
      type: Boolean,
      require: true
    },
    childrenSelected: {
      type: Boolean,
      require: false
    }
  },

  methods: {
    showUser() {
      this.hideUser = !this.hideUser
    },
    isLastChild(index) {
      // Verifica se é o úlitmo component, para realizar a estilização
      const userIndex = parseInt(index)
      if(userIndex === Object.keys(this.userData.children).length -1) {
        return true
      } else {
        return false
      }
    },
    receiveChildrenStatus(index, data) {
      if(Object.keys(this.userData.children).length > 0) {
      }
    },
    receiveIndeterminateStatus(data) {
      // recebe o status do usuário filho, se for true(indeterminate), replica o status para os demais pais
      this.indeterminateUser = data
    },
    storeChildren(user, savedArray) {
      // Armazena todos os filhos salvos
      if('name' in user) {
        savedArray.push({
          id: user.id,
          name: user.name,
          data: true
        })
      }
      for(let key in user) {
        if(user.hasOwnProperty(key)) {
          if(typeof user[key] === 'object' && user[key] !== null) {
            this.storeChildren(user[key], savedArray)
          } 
        }
      }
    },
    receiveChildStatus(index, data) {
      // recebe o status do usuário filho, se for true, o component pai assume indeterminate
      this.indeterminateUser = data
      let haveChildren = false
      
      
      // Adiciona todos os usuários validados, em uma lista de verificação do component pai
      const userSelected = this.userData.children[index]
      const childStatus = {
        id: userSelected.id,
        name: userSelected.name,
        data: data
      }
      
      // Caso o usuário já não esteja cadastrado como validado, seja incluído na lista
      if(!this.childrenStatus.some(user => user.id === userSelected.id)) {
        this.childrenStatus.push(childStatus)
        this.storeChildren(userSelected.children, this.childrenStatus)
      
      }
      
      // Verfica se o component enviado tem filhos, e replica o seu status a eles
      if(Object.keys(this.userData.children).length) {
        
        
        
        // Calcula a quantidade de filhos totais, e os soma.
        this.childQtt = 0
        this.childrenQtt = Object.keys(this.userData.children).length
        for(let child in this.userData.children) {
          if(this.userData.children.hasOwnProperty(child)) {
            const grandChildren = this.userData.children[child].children
            
            this.childQtt++

            
            for(let grandChild in grandChildren) {
              if(grandChildren.hasOwnProperty(grandChild)) {
                
                this.childQtt++
              }
            }
          }
        }
        let registeredNumber = this.childrenStatus.length
        

        // Verifica se todos os filhos estão selecionados.
        for(let user in this.childrenStatus) {
          this.allChildrenSelected = true
          if (!this.childrenStatus[user].data) {
            this.allChildrenSelected = false
            break
          }
        }
        //atualiza os dados do pai par que indeterminate ou true
        if(this.childQtt === registeredNumber && this.allChildrenSelected) {
          this.userSelected = true
          this.indeterminateUser = false
        } else {
          this.userSelected = false
          this.indeterminateUser = true
        }
      }
      
      // Faz um emit recursivo, caso user seja validado
      if(this.userSelected) {
        this.$emit('receiveChildStatus', this.userSelected)
      }
    },
    toggleUser() {
      // sempre que um usuário específico for selecionado, esse metodo será executado enviando ao component pai o status deste usuário
      this.$emit('receiveChildStatus', !this.userSelected)
    },
  },
  
  watch: {
    childrenSelected(newValue) {
      // Verifica sempre que há uma alteração no component pai, e atualiza o component filho
      if(newValue) {

      }
      this.userSelected = this.childrenSelected
      this.indeterminateUser = false
      
    },
    indeterminateUser(newValue) {
      // Verifica se o usuário está indeterminado, e envia o status do component (indeterminate), para o component pai
      this.$emit('receiveIndeterminateStatus', newValue)
    },
    userSelected(newValue) {
      // encaminha para o component pai, o status de todos os componentes filhos, e quantos deles estão validados no checkbox
      // this.$emit('receiveChildStatus', !this.userSelected)

      this.$emit('receiveChildrenStatus', {
          userSelected: newValue // Passa também o novo estado para o componente pai
        }
      )
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

.hide {
  display: none;
}

.userDiv {
  cursor: pointer;
}

</style>