/** @var { vocabulary_sets } */
const STATE = {
  vocabulary_sets: [],
  default_sets: [],
  default_topics: [],
  topic_id: 0,
  query: {
    page: 1,
  },
  currentItem: '',
  currentId: 1,
  updateItem: [],
  currentVocabSet: [],
  learningVocabSet: [],
  added_vocabularies: [
    {
      key: 1,
      word: '',
      definition: '',
      word_lang: '',
      def_lang: '',
      definition_image: '',
    }
  ],
}

export default STATE
