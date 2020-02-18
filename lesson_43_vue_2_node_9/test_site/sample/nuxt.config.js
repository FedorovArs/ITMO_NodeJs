// module.exports = {
//   mode: 'spa'
// };


module.exports = {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false /*При true в заголовок ответа 'Server-Timing' будет выставлено
        время серверного рендеринга.*/
  },
  mode: 'universal',
  modules: [
    '@nuxtjs/axios',
  ],
  css: [ 'assets/main.css' ] /* CSS-файл подключаемый к каждой странице в проекте */
}


