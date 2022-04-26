<template>
  <div class='px-5 w-100 d-flex'>
    <div style='width: 70%;' class='rounded-lg shadow'>
      <div class=" w-100 rounded-lg">
        <div class="card w-100 rounded-lg">
          <div class="w-100 position-relative">
            <div class='position-absolute d-flex w-100' style='margin-top: 13%; z-index: 10;'>
              <div>
                <b-avatar class="profile ml-5" style='border: 10px solid white ; width: 150px; height: 150px;'><img :src="$auth.user.avatar" alt=''></b-avatar>
              </div>
              <div style='margin-top: 11%;' class='d-flex justify-content-between w-100 px-3'>
                <h4>{{$auth.user.name}}</h4>
                <button class='border border-warning bg-warning rounded-lg px-4 py-1' style='font-size: 18px; height: 50%;'>Chỉnh sửa</button>
              </div>
            </div>
            <div class='position-absolute w-100'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Yellow-maple.jpg" class='w-100 rounded-lg' style='height: 160px;' alt=''>
            </div>
          </div>
        </div>
        <div style='margin-top: 35%;' class='px-5 mb-3'>
          <BarChart />
        </div>
      </div>
    </div>
    <div style='width: 28%; background-color: #FDFDFD; margin-left: 2%;' class='card px-3 py-3'>
      <h3>Danh sách bạn bè</h3>
      <div class='my-3'>
          <label class="sr-only" for="inlineFormInputGroup">Username</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg></div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
          </div>
      </div>
      <div v-for='friend in friendList' :key='friend.id' class='d-flex bg-warning py-3 rounded-lg mb-4 pl-3 shadow'>
        <div>
          <b-avatar :src='friend.avatar'/>
        </div>
        <div class='text-left ml-3 mt-1'>
          <h5 class='p-0 m-0'>{{friend.name}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from '~/components/BarChart'
export default {
  name: 'profile',
  components: { BarChart },
  data() {
    return {
      friendList: [
        {
          id: 1,
          name: 'Nguyễn Khánh Vinh',
          avatar: 'https://img.freepik.com/free-vector/cute-chicken-flying-cartoon_138676-1823.jpg'
        },
        {
          id: 2,
          name: 'Nguyễn Lan Anh',
          avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/275269137_3313272812284760_2276126114517788019_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oN8kiuBZljMAX9jRhT8&_nc_ht=scontent.fhan2-4.fna&oh=00_AT8zOllDUwyfzIzE3MSq4Wto_pIYVSJA1x9lkDMT9RBUSw&oe=62631E36'
        },
        {
          id: 3,
          name: 'Nguyễn Trung',
          avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg'
        },
      ]
    }
  }
}
</script>
<style>
.form-control:active {
  border: 0;
}
</style>
