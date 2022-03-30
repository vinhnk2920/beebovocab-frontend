<template>
  <div class="container mt-5">
    <div v-if='!$auth.user'>
      <div class="d-flex">
        <div class='pt-lg-5'>
          <h1 class='slogan font-weight-bolder'>Develop your <span class='font-weight-bolder bg-warning rounded-lg px-2'>lexicon</span></h1>
          <h1 class='slogan font-weight-bolder'> with us!</h1>
          <h4 class='mt-3'>Chúng tôi luôn sẵn sàng đồng hành cùng các bạn học ngoại ngữ với mục tiêu nâng cao vốn từ vựng một cách hiệu quả.</h4>
          <b-button class='mt-3' variant="warning">Bắt đầu học</b-button>
          <b-button class='mt-3' variant='outline-warning'>Hướng dẫn</b-button>
        </div>
        <div class='embed-responsive embed-responsive-16by9 video-icon'>
          <video class="embed-responsive-item" src="https://firebasestorage.googleapis.com/v0/b/justanotherstore-794bc.appspot.com/o/pers_408px.mp4?alt=media&amp;token=192787af-62c6-4bb6-8449-8c32e7924e39" type="video/mp4" width="408" height="408" loop="true" autoplay="true" muted="true" playsinline="true"></video>
        </div>
      </div>
      <div id='about-us' class='border-top mt-5 position-relative text-center'>
        <h1 class='pt-5 px-5'>Điều gì khiến chúng tôi trở nên đặc biệt?</h1>
        <div class='mt-5'>
          <b-card-group deck>
            <b-card title="Cá nhân hóa bộ từ" img-src="https://img.freepik.com/free-vector/yellow-color-vocabulary-set-english_23-2148787629.jpg" img-alt="Image" img-top>
              <b-card-text>
                Ngoài các bộ từ được chia theo nhiều cấp độ và chủ đề khác nhau, Beebovocab còn hỗ trợ người dùng tạo bộ từ cá nhân giúp người dùng có thể học và ôn tập những từ vựng mình quan tâm.
              </b-card-text>
            </b-card>

            <b-card title="Ôn tập từ vựng" img-src="https://img.freepik.com/free-vector/school-learning-template_1284-41225.jpg?t=st=1648485481~exp=1648486081~hmac=57e169f480ebe02559d07a484cc3edace0b040f7d154b84c77114d8a5743a0c8&w=740" img-alt="Image" img-top>
              <b-card-text>
                BeeboVocab sử dụng kỹ thuật lặp lại ngắt quãng (spaced repetition) để tìm được thời gian ôn tập từ vựng hiệu quả, giúp cải thiện chất lượng học từ vựng.
              </b-card-text>
            </b-card>

            <b-card title="Miễn phí" img-src="https://img.freepik.com/free-vector/teacher-student-concept-illustration_114360-7925.jpg?t=st=1648485595~exp=1648486195~hmac=1ebba4a1dc6ed802223e942cc4231e80b765fbfc5d7982f97f339f049517948a&w=740" img-alt="Image" img-top>
              <b-card-text>
                Vì đây là sản phẩm của một đề án tại trường đại học, nên BeeboVocab xứng đáng được chia sẻ miễn phí cho cộng đồng.
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
    <div v-if='$auth.user' class="d-flex">
      <div>
        <h3>Xin chào {{ this.$auth.user }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}
</style>

<style scoped>
@media (max-width: 1020px) {
  .video-icon {
    max-width: 50%;
  }
  .slogan {
    font-weight: 900;
    font-size: 150%;
  }
}
@media (min-width: 1024px) {
  .video-icon {
    max-width: 48%;
  }
  .slogan {
    font-weight: 900;
    font-size: 350%;
  }
}
</style>
