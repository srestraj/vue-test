<script>
  import EmailList from './EmailList.vue'

  export default {
    name: 'MainSection',
    components: {
      EmailList
    },

    props: {
      filteredEmails: Array,
      selectedEmails: Array,
      isAllSelected: Boolean,
      checkedEmails: Array
    },

    data() {
      return {
        allChecked: false
      }
    },

    mounted() {
      this.isAllSelected ? this.allChecked = true : this.allChecked = false
    },

    methods: {
      toggleSidebar(email) {
        this.$emit('sidebarToggleClicked', email)
      },

      updateCheckedEmails(email, isChecked, value) {
        this.$emit('checkedEmailsUpdated', email, isChecked, value)
      }
    }


  }
</script>
<template>
  <div class="main">
    <h2 class="title">
      {{ $route.name }}
    </h2>

    <h3>
      Emails selected ({{ selectedEmails.length }})
    </h3>

    <div class="main__list">
      <input type="checkbox" class="checkbox" @change="$event => $emit('allEmailsSelected', $event)" v-model="allChecked">
      <button class="btn">
        Mark as read (r)
      </button>
      <button class="btn">
        Archive (a)
      </button>
    </div>


    <div class="emails">
      <EmailList
        v-for="email in filteredEmails"
        :key="email.id"
        :subject="email.subject"
        :isRead="email.isRead"
        :isArchived="email.isArchived"
        :id="email.id"
        @sidebartoggled="toggleSidebar(email)"
        @checkedEmailsUpdated="updateCheckedEmails"
        :isSelected="isAllSelected ? true : false"
        :checkedEmails="checkedEmails"
      />
    </div>
  </div>
</template>