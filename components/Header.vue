<template>
  <div class="mx-lg-5 mt-3">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/"><b-avatar variant="warning">B</b-avatar> BeeboVocab</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-dropdown text="Language" class="mr-lg-3" variant="warning">
            <b-dropdown-item href="#">English</b-dropdown-item>
            <b-dropdown-item href="#">Vietnamese</b-dropdown-item>
          </b-dropdown>

          <b-button variant="outline-warning" to="/login">SIGN IN</b-button>

<!--          <b-nav-item-dropdown right>-->
<!--            &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--            <template #button-content>-->
<!--              <em>User</em>-->
<!--            </template>-->
<!--            <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
}
</script>
