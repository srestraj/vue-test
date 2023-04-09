<script>
  export default {
    name: 'EmailList',
    props: {
      subject: String,
      id: Number,
      isRead: Boolean,
      isArchived: Boolean,
      isSelected: Boolean,
      checkedEmails: Array
    },

    data() {
      return {
        isChecked: false,
        checked: []
      }
    },

    methods: {
      updateCheckedEmails(e) {
        this.$emit('checkedEmailsUpdated', this.checked, e.target.checked, e.target.value)
      }
    },

    watch: {
      isSelected(newValue) {
        console.log(newValue)
        if(!newValue) {
          this.checked = []
        }
      }
    },

    mounted() {
      this.checked = this.checkedEmails
      if (this.isSelected) {
        this.isChecked = true
      }
    }
  }
</script>
<template>
  <div class="email__child" :style="isRead ? { opacity: 0.5 } : null">
    <input type="checkbox" class="checkbox" v-model="checked" :value="id" @change="updateCheckedEmails">
    <p class="email__subject" @click="$emit('sidebartoggled')">
      {{ subject }}
    </p>
  </div>
</template>