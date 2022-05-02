<template>
  <div class="container">
    <div v-if='!$auth.user' class='mt-5'>
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
    <div v-if='$auth.user && $auth.user.role === "admin"' class="d-flex">
      <div class="d-flex w-100">
        <div class='embed-responsive embed-responsive-16by9 video-icon'>
          <video class="embed-responsive-item" src="https://firebasestorage.googleapis.com/v0/b/justanotherstore-794bc.appspot.com/o/pers_408px.mp4?alt=media&amp;token=192787af-62c6-4bb6-8449-8c32e7924e39" type="video/mp4" width="508" height="508" loop="true" autoplay="true" muted="true" playsinline="true"></video>
        </div>
        <div class='pt-lg-5 w-50 text-center'>
          <h1 class='slogan font-weight-bolder'>Xin chào</h1>
          <h1 class='font-weight-bolder bg-warning w-max-min rounded-lg px-2 py-2'>{{$auth.user.name}}</h1>
        </div>
      </div>
    </div>
    <div v-if='$auth.user && $auth.user.role !== "admin"' class="d-flex">
      <div  style='width: 65%; margin-right: 5%;'>
        <div class='d-flex shadow-lg py-5 pr-2 rounded-lg'>
          <div class='embed-responsive embed-responsive-16by9 video-icon'>
            <video class="embed-responsive-item" src="https://firebasestorage.googleapis.com/v0/b/justanotherstore-794bc.appspot.com/o/pers_408px.mp4?alt=media&amp;token=192787af-62c6-4bb6-8449-8c32e7924e39" type="video/mp4" width="508" height="508" loop="true" autoplay="true" muted="true" playsinline="true"></video>
          </div>
          <div class='w-50 text-center'>
            <h2 class='slogan font-weight-bolder'>Xin chào</h2>
            <h2 class='font-weight-bolder bg-warning w-max-min rounded-lg px-2 py-2'>{{$auth.user.name}}</h2>
            <h4 class='py-2'>Bạn có <span>30</span> từ cần ôn tập</h4>
            <button class='border border-warning bg-warning rounded-lg px-4 py-1' style='font-size: 18px;'>Ôn tập</button>
          </div>
        </div>
        <div class='mt-5'>
          <BarChart :chart-data='chartData'/>
        </div>
      </div>
      <div style='width: 30%;' class='text-center shadow-lg rounded-lg'>
        <div class='py-4 border-bottom'>
          <b-calendar locale="vi" selected-variant='warning' />
        </div>
        <div>
          <h3 class='py-2'>Các bài học gần đây</h3>
          <div v-for='set in lastSets' :key='set.id' class='d-flex bg-warning py-3 rounded-lg mb-4 mx-4 shadow'>
            <div style='width: 30%;'>
              <b-avatar :src='set.avatar_image'/>
            </div>
            <div style='width: 65%;' class='text-left'>
              <h5 class='p-0 m-0'>{{set.title}}</h5>
              <p class='p-0 m-0'>{{set.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VCalendar from 'v-calendar';
import BarChart from '~/components/BarChart'

export default {
  name: 'IndexPage',
  components: { BarChart, VCalendar},
  data() {
    return {
      lastSets: [
        {
          avatar_image: "https://d3jlwjv6gmyigl.cloudfront.net/images/2019/11/school1.jpg",
          created_at: "2022-04-17 18:05:25.379024",
          created_user_id: 1,
          description: "Trường học",
          id: 14,
          title: "Schools",
          topic_id: 2,
          update_at: "2022-04-17 18:05:25.379024",
        },
        {
          avatar_image: "https://media.istockphoto.com/vectors/generation-gap-concept-a-young-woman-and-mature-female-look-away-from-vector-id1287595174?k=20&m=1287595174&s=170667a&w=0&h=xpUQxr5nZvcAGUZtZiJnUBee-2klNhcTHa9rrFxNmYU=",
          created_at: "2022-04-12 23:41:23.284712",
          created_user_id: 6,
          description: "Khoảng cách thế hệ 1",
          id: 1,
          title: "Generation Gap",
          topic_id: 0,
          update_at: "2022-04-12 23:41:23.284712",
        },
        {
          avatar_image: "https://cdn.mos.cms.futurecdn.net/PHpPMacPX2Y9PqWXvCVdJg-320-80.jpg",
          created_at: "2022-04-13 16:14:59.779350",
          created_user_id: 6,
          description: "Bộ từ về bạn bè",
          id: 4,
          title: "Friends",
          topic_id: 0,
          update_at: "2022-04-13 16:14:59.779350"
        }
      ],
      vocabLevel: [],
      chartData: {}
    }
  },
  methods: {
    countData() {
      this.$store.dispatch('vocabulary_sets/countVocab', this.$auth.user.id).then((response) => {
        if (response.data.success) {
          this.vocabLevel.push(response.data.data['level1'],response.data.data['level2'],response.data.data['level3'],response.data.data['level4'],response.data.data['level5'])
          this.chartData = {
            labels: [ 'Mức độ 1', 'Mức độ 2', 'Mức độ 3', 'Mức độ 4', 'Mức độ 5' ],
            datasets: [ { data: this.vocabLevel, label: 'Số từ', backgroundColor: '#FFC107' } ]
          }
          console.log(this.chartData)
        }
      })
    }
  },
  mounted() {
    this.countData()
  }
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
