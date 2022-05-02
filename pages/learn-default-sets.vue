<template>
  <div class='px-5 w-100'>
    <h3 class='ml-3 mb-5'>{{$store.state.vocabulary_sets.currentVocabSet.title}}</h3>
    <div v-for='(vocab, index) in $store.state.vocabulary_sets.learningVocabSet'>
      <div v-if='!isShowQuestion' :class='index === currentIndex ? "" : "d-none"'>
        <vue-flashcard
          :headerFront='index+1 + " / " + $store.state.vocabulary_sets.learningVocabSet.length'
          :front="vocab.word"
          :back="vocab.definition"
          :img-front='vocab.definition_image'
          :img-back='vocab.definition_image'
          footer-front=''
          header-back=''
          footer-back=''
          color-back='white'
          color-text-back='black'>
        </vue-flashcard>
      </div>
      <div v-if='isShowQuestion' :class='index === currentIndex ? "" : "d-none"'>
        <div class='card'>
          <div class='card-body shadow-lg py-5 text-center' style='padding-left: 15%; padding-right: 15%;'>
            <h4>{{vocab.test}}</h4>
            <b-textarea v-model='answer' class='mt-5' @keydown.enter='learnVocab(vocab.id, vocab.word)' />
            <b-button @click='learnVocab(vocab.id, vocab.word)' v-if='isShowQuestion'  variant='warning' class='font-weight-bold btn-create mt-5'>Kiểm tra đáp án</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class='mt-5 text-center'>
      <div class='card mb-5' v-if='currentIndex === $store.state.vocabulary_sets.learningVocabSet.length && !isShowQuestion'>
        <div class='card-body shadow-lg py-5 text-center' style='padding-left: 15%; padding-right: 15%;'>
          <h1>Bạn đã trả lời đúng {{countTrueAnswer}}/{{$store.state.vocabulary_sets.learningVocabSet.length}}</h1>
          <img v-if='countTrueAnswer >=5' src='https://c.tenor.com/qmOrGDaaMlwAAAAC/cheer-up-cheering.gif' alt='cheer up'/>
          <img v-else src='https://1.bp.blogspot.com/-6oB00hdTzzs/YAjs5nn161I/AAAAAAAAB74/ViTuhf2mNP0Z98L6Mdo3lwH_jkqiBdh5wCLcBGAsYHQ/s0/tenor.gif' alt='its okay' />
        </div>
      </div>
      <b-button v-if='currentIndex === $store.state.vocabulary_sets.learningVocabSet.length && !isShowQuestion' @click='endLearning' variant='warning' class='font-weight-bold btn-create'>Trở về</b-button>
      <b-button @click='showQuestion' v-if='!isShowQuestion && currentIndex < $store.state.vocabulary_sets.learningVocabSet.length' variant='warning' class='font-weight-bold btn-create'>Tôi đã hiểu từ này</b-button>
<!--      <b-button @click='addCurrentIndex' v-if='isShowQuestion' variant='warning' class='font-weight-bold btn-create'>Tiếp tục</b-button>-->
    </div>
  </div>
</template>
<script>
import vueFlashcard from 'vue-flashcard';
import Swal from 'sweetalert2'
export default {
  name: 'LearnDefaultSets',
  components : { vueFlashcard },
  data() {
    return {
      vocab: [],
      currentIndex: 0,
      isShowQuestion: false,
      answer: '',
      countTrueAnswer: 0,
    }
  },
  methods: {
    addCurrentIndex() {
      this.currentIndex++
      this.isShowQuestion = false
    },
    endLearning() {
      this.$router.push("/default-vocab-sets")
    },
    showQuestion() {
      this.isShowQuestion = true
    },
    learnVocab(id, word) {
      if(this.answer === word) {
        Swal.fire({
          title: 'Yeah quá giỏi',
          text: "Bạn đã trả lời đúng rồi",
          showConfirmButton: false,
          timer: 1500,
          icon: 'success',
        })
        this.$store.dispatch('vocabulary_sets/reviewVocabularies', {vocab_id: id, answer: '0', user_id: this.$auth.user.id})
        this.countTrueAnswer++;
        this.addCurrentIndex();
        this.answer = ''
      } else {
        Swal.fire({
          title: 'Oh no bạn đã sai rồi',
          text: "Đáp án phải là " + word,
          showConfirmButton: false,
          icon: 'warning',
          timer: 2500,
        })
        this.$store.dispatch('vocabulary_sets/reviewVocabularies', {vocab_id: id, answer: '1', user_id: this.$auth.user.id})
        this.addCurrentIndex();
        this.answer = ''
      }
    }
  }
}
</script>
<style>
.card-header, .card-footer {
  background-color: white;
  border: 0;
}

.flashcard {
  height: 330px;
}

.card-content img {
  max-width: 200px;
  max-height: 160px;
}
</style>
