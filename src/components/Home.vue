<script>
  import { useEmailsStore } from '../../store/emails'
  import { mapState, mapActions } from 'pinia'
  import MainSection from './MainSection.vue'
  import Sidebar from './Sidebar.vue'
  import EmailPreview from './EmailPreview.vue'

  export default {
    name: 'Home',
    components: {
      Sidebar,
      MainSection,
      EmailPreview
    },

    data() {
      return {
        filteredEmails: [],
        selectedEmail: {},
        isEmailPreviewOpen: false,
        checkedEmails: [],
        isAllSelected: false
      }
    },

    computed: {
      ...mapState(useEmailsStore, {
        emails: 'emails'
      }),

      inbox() {
        return this.emails.filter((email) => !email.isArchived)
      },

      archivedEmails() {
        return this.emails.filter((email) => email.isArchived)
      }
    },

    created() {
      this.$route.name == 'inbox' ? this.filteredEmails = this.inbox : this.filteredEmails = this.archivedEmails
    },

    watch: {
      $route(newRoute) {
        newRoute.name == 'inbox' ? this.filteredEmails = this.inbox : this.filteredEmails = this.archivedEmails
      },
      isAllSelected(newVal) {
        if (!newVal) {
          this.checkedEmails = []
          this.isAllSelected = false
        }
      }
    },

    methods: {
      ...mapActions(useEmailsStore, ['archiveEmail', 'markAsRead']),
      openEmail(email) {
        this.isEmailPreviewOpen = !this.isEmailPreviewOpen
        this.selectedEmail = email
      },

      updateSelectedEmails(id, isChecked, value) {
        if (!isChecked) {
          let itemInCheckedEmails = this.checkedEmails.find((item) => {
            return item == value
          })
          if (itemInCheckedEmails) {
            const duplicateItemIndex = this.checkedEmails.indexOf(itemInCheckedEmails)
            const newArray = this.checkedEmails.splice(duplicateItemIndex, 1)
            this.checkedEmails = newArray
            return
          }
        } else {
          this.checkedEmails.push(value)
        }
      },

      selectAllEmails(event) {
        if (event.target.checked) {
          this.filteredEmails.map((email) => {
            this.checkedEmails.push(email.id)
            this.isAllSelected = true
          })
        } else {
          this.checkedEmails = []
          this.isAllSelected = false
        }
      }
    },

    mounted() {
      document.addEventListener("keydown", (e) => {
        if (e.key === 'Escape') {
          if (this.isEmailPreviewOpen) {
            this.isEmailPreviewOpen = false
          } else {
            return
          }
        }

        if (e.key ==='r') {
          if (!this.checkedEmails.length) {
            return
          }
          this.checkedEmails.forEach((email) => {
            if (email != undefined) {
              this.markAsRead(email)
            }
          })
        }

        if (e.key ==='a') {
          if (!this.checkedEmails.length) {
            return
          }
          this.checkedEmails.forEach((email) => {
            if (email != undefined) {
              this.archiveEmail(email)
            }
          })
        }
      })
    }

  }
</script>

<template>
  <div>
    <Sidebar :inboxEmailCount="inbox.length" :archivedCount="archivedEmails.length" />
    <MainSection
      :selectedEmails="checkedEmails.filter((email) => email != undefined)"
      :filteredEmails="filteredEmails"
      @sidebarToggleClicked="openEmail"
      @checkedEmailsUpdated="updateSelectedEmails"
      @allEmailsSelected="selectAllEmails"
      :isAllSelected="isAllSelected"
      :checkedEmails="checkedEmails"
    />
    <div class="overlay" v-if="isEmailPreviewOpen" @click="this.isEmailPreviewOpen = !this.isEmailPreviewOpen"></div>
    <EmailPreview
      v-if="isEmailPreviewOpen"
      :email="selectedEmail"
      @previewClosed="this.isEmailPreviewOpen = !this.isEmailPreviewOpen"
    />
  </div>
</template>
