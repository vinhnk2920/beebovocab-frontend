<template>
  <div class='px-5 w-100'>
    <h3>Hãy bắt đầu tạo bộ từ vựng của bạn</h3>
    <div class='mt-3'>
      <b-form-group
        id="input-group-1"
        label="Tên bộ từ"
        label-for="title"
        class='font-weight-bold '
      >
        <b-form-input
          id="title"
          v-model="title"
          placeholder="Nhập tên của bộ từ"
          class='border-top-0 border-left-0 border-right-0 border-bottom-2 rounded-0'
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Mô tả bộ từ"
        label-for="description"
        class='font-weight-bold '
      >
        <b-form-input
          id="description"
          v-model="description"
          placeholder="Nhập mô tả của bộ từ"
          class='border-top-0 border-left-0 border-right-0 border-bottom-2 rounded-0'
          required
        ></b-form-input>
      </b-form-group>
    </div>
    <div class='mt-5'>
      <b-card class='border-0 bg-white shadow mb-5'>
        <template #header>
          <b-button class='border-0' style='background-color: #F7F7F7; margin-left: 97%;'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </b-button>
        </template>
        <b-card-text class='d-flex custom-card'>
          <div style='width: 40%;' class='mr-5'>
            <h5>Từ</h5>
            <b-input class='border-top-0 border-left-0 border-right-0 border-bottom-2 rounded-0' />
          </div>
          <div style='width: 40%;' class='mr-5'>
            <h5>Nghĩa</h5>
            <b-input class='border-top-0 border-left-0 border-right-0 border-bottom-2 rounded-0' />
          </div>
          <div style='width: 15%;'>
            <b-button class='w-100 h-100 bg-white' style='border: 2px dashed gray;'>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="gray" class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
              </svg>
            </b-button>
          </div>
        </b-card-text>
      </b-card>
      <b-card class='border-0 bg-white shadow'>
        <template #header>
          <b-button class='border-0' style='background-color: #F7F7F7; margin-left: 97%;'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </b-button>
        </template>
        <b-card-text class='d-flex custom-card'>
          <div style='width: 40%;' class='mr-5'>
            <h5>Từ</h5>
            <b-input class='border-top-0 border-left-0 border-right-0 border-bottom-2 rounded-0' />
          </div>
          <div style='width: 40%;' class='mr-5'>
            <h5>Nghĩa</h5>
            <b-input class='border-top-0 border-left-0 border-right-0 border-bottom-2 rounded-0' />
          </div>
          <div style='width: 15%;'>
            <b-button class='w-100 h-100 bg-white' style='border: 2px dashed gray;'>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="gray" class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
              </svg>
            </b-button>
          </div>
        </b-card-text>
      </b-card>
    </div>
    <div class='mt-5 w-100'>
      <b-button variant='outline-warning' class='font-weight-bold rounded w-100 py-3'>THÊM THẺ TỪ VỰNG <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-plus mb-2" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg></b-button>
    </div>
    <div class='mt-5'>
      <b-button variant='warning' class='font-weight-bold btn-create'>Tạo bộ từ</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'create vocab set',
  data() {
    return {
      title: '',
      description: '',
      language: 'English',
    }
  }
}
</script>
<style scoped>
.btn:active { background-color: red }

.custom-card {
  height: 100px;
}

.btn-create {
  font-size: 18px; margin-left: 82%; width: 190px; height: 65px;
}
</style>
