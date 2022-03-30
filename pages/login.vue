<template>
  <section class='h-100'>
    <div class='container py-5'>
      <div class='card shadow-lg border-warning'>
        <div class='d-flex'>
          <div class='w-50 text-center'>
            <video class='main-video resource-regular' style='margin-top: 15%;'
                   src='https://firebasestorage.googleapis.com/v0/b/justanotherstore-794bc.appspot.com/o/pers_408px.mp4?alt=media&amp;token=192787af-62c6-4bb6-8449-8c32e7924e39'
                   type='video/mp4' width='408' height='408' loop='true' autoplay='true' muted='true'
                   playsinline='true'></video>
          </div>
          <div style='width: 50%; padding: 10%;' class='text-center border-left border-warning bg-warning'>
            <img src='../static/Logo.png' width='50%'>
            <div class='mt-3'>
              <div v-if='!otp_sent'>
                <div class='form-group'>
                  <label>Số điện thoại</label>
                  <input v-model='phone' type='text' class='form-control'>
                </div>
                <button id='sign-in-button' class='btn btn-primary'>Gửi OTP</button>
              </div>

              <div v-else>
                <div class='form-group'>
                  <label>Mã OTP 6 chữ số</label>
                  <input v-model='otp' type='text' class='form-control'>
                </div>
                <button class='btn btn-primary' @click='VerifyOTP'>Xác thực OTP</button>
              </div>
            </div>
            <h3 class='pt-5'>Welcome! You can login to your account with Google</h3>
            <button class='mt-5 py-2 text-white font-weight-bold bg-primary'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'>
                <path fill='#FFC107'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z' />
                <path fill='#FF3D00'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z' />
                <path fill='#4CAF50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z' />
                <path fill='#1976D2'
                      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z' />
              </svg>
              <span>Sign in with Google</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  layout: 'blank-default',
  mounted() {
    console.log(this.$auth.loggedIn)
    if (this.$auth.loggedIn) {
      this.$router.push('/')
    }

    let _this = this
    this.recaptchaVerifier = new this.$fireModule.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback(response) {
        // console.log('Verify Captcha thành công');
        _this.SendOTP()
      }
    })

    this.recaptchaVerifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId
    })

    this.$fireModule.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.getIdToken().then(function(idToken) {
          _this.idToken = idToken
          _this.VerifyUser()
          // _this.$fireModule.auth().signOut()
        })
      }
    })

    this.$fire.auth.settings.appVerificationDisabledForTesting = true
  },
  data() {
    return {
      otp_sent: false,
      otp: null,
      phone: null,
      confirmationResult: null,
      idToken: null,
      isLoading: false,
      recaptchaVerifier: null
    }
  },
  methods: {
    SendOTP() {
      const _this = this
      this.isLoading = true
      const phoneNumber = '+84' + this.phone.replace(/^0+/, '')
      const appVerifier = this.recaptchaVerifier
      this.$fire.auth.languageCode = 'vi'
      this.$fire.auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          _this.otp_sent = true
          _this.confirmationResult = confirmationResult
          setTimeout(function() {
            _this.isLoading = false
          }, 2000)
        }).catch(function(error) {
        _this.isLoading = false
        _this.ShowNotify('error', 'Thất bại', 'Số điện thoại không hợp lệ hoặc bạn đã đăng nhập quá nhiều lần trong ngày nên không thể gửi mã OTP!')
      })
    },
    VerifyOTP() {
      const _this = this
      this.isLoading = true
      this.confirmationResult.confirm(this.otp).then(function(result) {
      }).catch(function(error) {
        console.log('OTP sai', error)
        _this.isLoading = false
        _this.ShowNotify('error', 'Thất bại', 'Mã OTP không chính xác')
      })
    },
    VerifyUser() {
      const _this = this
      this.isLoading = true
      this.$auth.loginWith('laravelJWT', {
        data: {
          id_token: this.idToken
        }
      }).then(function() {
        if (_this.$auth.loggedIn) {
          _this.$router.push('/')
        } else {
          this.ShowNotify('error', 'Đăng nhập thất bại', 'Vui lòng thử lại sau')
        }
      }).catch(function() {
        _this.isLoading = false
      })
    },
    LoginWithFB() {
      const provider = new this.$fireModule.auth.FacebookAuthProvider()
      provider.addScope('email')
      this.$fire.auth.languageCode = 'vi_VN'
      provider.setCustomParameters({
        display: 'popup'
      })
      this.$fire.auth.signInWithPopup(provider).then(function(result) {
      }).catch(function(error) {
        console.log(error)
      })
    },
    LoginWithGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      provider.addScope('email')
      this.$fire.auth.languageCode = 'vi_VN'
      provider.setCustomParameters({
        display: 'popup'
      })
      this.$fire.auth.signInWithPopup(provider).then(function(result) {
      }).catch(function(error) {
        console.log(error)
      })
    },
    ShowNotify(type, title, text) {
      return Swal.fire({
        icon: type,
        title,
        text
      })
    }
  }
}
</script>

<style>
.back-ground {
  background-image: url("https://www.europeanlandowners.org/images/Bee_Award/d0223d5fe31b66e2884cf284484db436.gif");
}
</style>
