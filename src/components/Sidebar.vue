<script>
  export default {
    props: {
      inboxEmailCount: Number,
      archivedCount: Number
    }
  }
</script>
<template>
  <aside class="sidebar">
    <router-link to="/inbox" class="sidebar__link">
      Inbox ({{ inboxEmailCount }})
    </router-link>
    <router-link to="/archive" class="sidebar__link">
      Archive ({{ archivedCount }})
    </router-link>
    <button class="btn sidebar__link--btn">Logout</button>
  </aside>
</template>