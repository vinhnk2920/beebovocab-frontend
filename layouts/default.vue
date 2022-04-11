<template>
  <div>
    <Header/>
    <div class='d-flex mt-4'>
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
