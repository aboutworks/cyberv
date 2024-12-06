<template>
  <HeaderPart></HeaderPart>
  <main style="display: flex; justify-content: center; align-items: center;">
    <RemidMessage></RemidMessage>
    <LoginForm></LoginForm>
    </main>
    <FooterPart></FooterPart>
</template>

<script>
import RemidMessage from '@/components/MessageBox/RemidMessage.vue';
import LoginForm from '@/components/LoginForm.vue';
import FooterPart from './FooterPart.vue';
import HeaderPart from './HeaderPart.vue';
export default {
  data() {
    return {};
  },
  components: {
    RemidMessage,
    FooterPart,
    HeaderPart,LoginForm
  },
};
</script>

<style>
.loginTop{

}
</style>