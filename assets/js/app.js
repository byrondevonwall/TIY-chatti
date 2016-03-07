new Vue({
  el: '.bodywrap',
  data: {
    newChat: '',
    chats: [

    ]
  },
  methods: {
    addChat: function () {
      var text = this.newChat.trim()
      if (text) {
        this.chats.push({ text: text })
        this.newChat = ''
      }
    }
  }
});
