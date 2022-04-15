<template>
  <b-col class='col-4 mt-5'>
    <b-card>
      <b-card-text v-if='data.created_user_id === $auth.user.id' class='d-flex justify-content-end bg-white text-warning'>
        <b-dropdown size="sm"  variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </template>
          <b-dropdown-item>Sửa</b-dropdown-item>
          <b-dropdown-item>Xóa</b-dropdown-item>
        </b-dropdown>
      </b-card-text>
      <b-card-text class='d-flex justify-content-center'>
        <img :src='data.avatar_image' style='width: 50%; min-height: 145px;' class='rounded-circle' />
      </b-card-text>
      <b-card-text class='text-center border-top pt-2'>
        <h5>{{data.title}}</h5>
        <p>{{data.description}}</p>
        <div class='d-flex justify-content-between px-4'>
          <div class='text-center'>
            <h5>Từ đã học</h5>
            <p>0/20</p>
          </div>
          <div class='text-center'>
            <h5>Từ cần ôn</h5>
            <p>0</p>
          </div>
        </div>
      </b-card-text>
      <template #footer>
        <div class='d-flex justify-content-center'>
          <button class='border border-warning bg-warning rounded-lg px-4 py-1' style='font-size: 18px;'>Học bộ từ</button>
        </div>
      </template>
    </b-card>
  </b-col>
</template>
<script>
export default {
  name: 'VocabSetsDetail',
  props: {
    data: {
      type: Object,
      require: true,
    },

  }
}
</script>
