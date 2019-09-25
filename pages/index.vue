<template>
  <div class="container">
    <div class="wrapper">
      <img src="../assets/images/logo.png" alt="logo">
      <h1>samsepy</h1>
      <p class="subscription">1995年8月30日生まれ、24歳。<br>出身は石川で、現在は東京住まい。<br>海外で暮らしたい。</p>
      <h2>Profile</h2>
      <ul>
        <li><b>Name</b>: Hajime Todo (東度 基) - Also known as: todo, samsepy</li>
        <li><b>Job</b>: Software Engineer</li>
        <li><b>Career</b>:</li>
        <ul>
          <li>Kanazawa Institute of Technology (2014-2018) - Bachelor</li>
          <li>SOUYA Co.,Ltd. (2016-2017) - Part time Engineer</li>
          <li>OPEN8, Inc. (2018-2019) - Engineer</li>
          <li>Sole proprietor (2019-) - Engineer</li>
        </ul>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li><b>Programming languages</b>: Ruby, Python</li>
        <li><b>Frameworks</b>: Ruby on Rails</li>
        <li><b>Databases</b>: MySQL</li>
        <li><b>Markup languages</b>: HTML5+CSS3</li>
        <li><b>Environments</b>: macOS, Git, GitHub</li>
      </ul>
      <h2>Sites</h2>
      <ul>
        <li><a href="https://github.com/samsepy" target="_blank">GitHub</a></li>
        <li><a href="http://samsepy.hatenablog.com/" target="_blank">はてなブログ</a></li>
        <li><a href="https://alis.to/users/samsepy" target="_blank">ALIS</a></li>
        <li><a href="https://twitter.com/samsepy"  target="_blank"><s>Twitter</s></a> - やめた</li>
        <li><a href="https://www.facebook.com/hajime.todo" target="_blank">Facebook</a></li>
        <li><a href="https://www.amazon.jp/hz/wishlist/ls/13WQUGCYG4293?ref_=wl_share" target="_blank">Amazon</a> - wishlist</li>
      </ul>
      <h2>Pays</h2>
      <p>請求や送金する際にこちらを使ってもらうと助かります。<s>金くれ</s></p>
      <ul>
        <li><b>Kyash</b>: @samsepy</li>
        <li><b>LINE Pay</b>: @todo1995</li>
        <li><b>PayPay</b>: @samsepy</li>
        <li><b>NEM</b>: NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</li>
      </ul>
      <h2>Contacts</h2>
      <ul>
        <li><b>Mail</b>: <a href="mailto:samsepylot@gmail.com">samsepylot@gmail.com</a></li>
        <li><b>Telegram</b>: @samsepy</li>
        <li><a href="https://www.facebook.com/hajime.todo" target="_blank">Messenger</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 30px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin-top: 25px;
  margin-bottom: 25px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}

h1, h2 {
  color: #96514d;
  font-weight: normal;
}

p {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left
}

li {
  margin: 5px 0;
}

a {
  color: #96514d;
}

.subscription {
  text-align: center;
}

.wrapper {
  padding: 0 10px;
}
</style>
