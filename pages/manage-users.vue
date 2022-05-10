<template>
  <div class='px-5 w-100'>
    <div></div>
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Họ và tên</th>
          <th scope="col">Email</th>
          <th scope="col">Số điện thoại</th>
          <th scope="col">Thời gian tạo</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'manage-users',
  methods: {
    loadUsers() {
      this.$store.dispatch('vocabulary_sets/showUsers', {'user_id': this.$auth.user.id, 'page': this.$store.state.vocabulary_sets.query.page}).then((response) => {
        console.log(response.data.users.data)
      })
    }
  },
  mounted() {
    this.loadUsers()
  }
}
</script>
