<script>
  export default {
    name: 'EmailList',
    props: {
      subject: String,
      id: Number,
      isRead: Boolean,
      isArchived: Boolean
    },

    data() {
      return {
        checkedEmails: []
      }
    },

    methods: {
      updateCheckedEmails(e) {
        this.$emit('checkedEmailsUpdated', this.checkedEmails, e.target.checked, e.target.value)
      }
    }
  }
</script>
<template>
  <div class="email__child" :style="isRead ? { opacity: 0.5 } : null">
    <input type="checkbox" class="checkbox" v-model="checkedEmails" :value="id" @change="updateCheckedEmails">
    <p class="email__subject" @click="$emit('sidebartoggled')">
      {{ subject }}
    </p>
  </div>
</template>