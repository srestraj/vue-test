<script>
  export default {
    name: 'EmailPreview',
    props: {
      email: Object
    }
  }
</script>
<template>
  <div class="preview">
    <button class="btn preview__btn" @click="$emit('previewClosed')">
      Close
    </button>
    <h2>
      {{  email.subject }}
    </h2>
    <p>
      {{ email.body }}
    </p>
  </div>
</template>