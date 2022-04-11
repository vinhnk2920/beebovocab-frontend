<template>
  <div class="mx-lg-5 mt-3">
    <b-navbar toggleable="lg">
<!--      <b-button v-b-toggle.sidebar-1 v-if='$auth.user'>Toggle Sidebar</b-button>-->
<!--      <b-sidebar id="sidebar-1" title="Sidebar" shadow>-->
<!--        <div class="px-3 py-2">-->
<!--          <p>-->
<!--            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis-->
<!--            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.-->
<!--          </p>-->
<!--          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>-->
<!--        </div>-->
<!--      </b-sidebar>-->

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
          <b-button v-if='this.$auth.user' class='ml-3' variant="warning" to="vocab-set/create-vocab-set"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#212529"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> <span class='pt-2'>Tạo bộ từ</span></b-button>
          <b-nav-item-dropdown right v-if='$auth.user' class='ml-3'>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img src='$auth.user.avatar' />
              <b>{{$auth.user.name}}</b>
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
    openSidebar() {
      this.$root.$emit('bv::toggle::collapse', 'my-sidebar')
    }
  }
}
</script>
