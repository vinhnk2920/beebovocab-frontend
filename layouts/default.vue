<template>
  <div class='position-relative'>
    <Header/>
    <div class='d-flex' style='padding-top: 10%;'>
      <sidebar />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'
export default {
  components: { Sidebar, Footer }
}
</script>
