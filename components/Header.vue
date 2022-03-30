<template>
  <div class="mx-lg-5 mt-3">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/"><b-avatar variant="warning">B</b-avatar> BeeboVocab</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
<!--          <b-dropdown text="Language" class="mr-lg-3" variant="warning">-->
<!--            <b-dropdown-item href="#">English</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">Vietnamese</b-dropdown-item>-->
<!--          </b-dropdown>-->
          <b-nav-item v-if='!this.$auth.user' class='font-weight-bold text-black-100' href='#about-us'>Về chúng tôi</b-nav-item>
          <b-nav-item v-if='!this.$auth.user' class='font-weight-bold text-black-100' href='#contact-us'>Liên hệ</b-nav-item>
          <b-button v-if='!this.$auth.user' class='ml-3' variant="outline-warning" to="/login">Đăng nhập</b-button>
          <b-nav-item-dropdown right v-if='$auth.user'>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{$auth.user.name}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click='logout'>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$auth.logout();
      await this.$fireModule.auth().signOut();
      await this.$router.push('/login');
    },
  }
}
</script>
