<template>
  <div class="container">
    <div class="wrapper">
      <img class="logo" src="../assets/images/logo.png" alt="自撮り">
      <h1>samsepy</h1>
      <p class="bio">1995年8月30日生まれ、24歳。<br>出身は石川で、現在は東京住まい。<br>海外で暮らしたい。</p>
      <h2>Profile</h2>
      <ul>
        <li><b>Name</b>: Hajime Todo (東度 基)</li>
        <li><b>Screen Name</b>: todo, samsepy</li>
        <li><b>Job</b>: Software Engineer</li>
        <li><b>Career</b>:</li>
        <ul>
          <li><span class="term">2014-2018</span>&nbsp;<wbr><span>Kanazawa Institute of Technology - Bachelor</span></li>
          <li><span class="term">2016-2017</span>&nbsp;<wbr><span>SOUYA Co.,Ltd. - Part-time Engineer</span></li>
          <li><span class="term">2018-2019</span>&nbsp;<wbr><span>OPEN8, Inc.- Engineer</span></li>
          <li><span class="term">2019</span>&nbsp;<wbr><span>Sole Proprietor - Engineer</span></li>
        </ul>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li><b>Programming Languages</b>: Ruby, Python</li>
        <li><b>Frameworks</b>: Ruby on Rails</li>
        <li><b>Databases</b>: MySQL</li>
        <li><b>Markup Languages</b>: HTML5 + CSS3</li>
        <li><b>Environments</b>: macOS, Git, GitHub</li>
      </ul>
      <h2>Works</h2>
      <h3><a href="https://github.com/samsepy/banhst.git">banhst</a></h3>
      <p>任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。</p>
      <h2>Sites</h2>
      <ul>
        <li><a href="https://github.com/samsepy">GitHub</a></li>
        <li><a href="http://samsepy.hatenablog.com/">はてなブログ</a></li>
        <li><a href="https://alis.to/users/samsepy">ALIS</a></li>
        <li><a href="https://twitter.com/samsepy"><s>Twitter</s></a> - やめた</li>
        <li><a href="https://www.facebook.com/hajime.todo">Facebook</a></li>
        <li><a href="https://www.amazon.jp/hz/wishlist/ls/13WQUGCYG4293?ref_=wl_share">Amazon</a> - wishlist</li>
      </ul>
      <h2>Pays</h2>
      <p>請求や送金する際にこちらを使ってもらうと助かります。</p>
      <ul>
        <li><b>Kyash</b>: @samsepy</li>
        <li><b>LINE Pay</b>: @todo1995</li>
        <li><b>PayPay</b>: @samsepy</li>
        <li><b>NEM</b>: NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</li>
      </ul>
      <h2>Contacts</h2>
      <ul>
        <li><a href="tel:+819062734866">Tel</a></li>
        <li><a href="mailto:samsepylot@gmail.com">Mail</a></li>
        <li><a href="https://t.me/samsepy">Telegram</a></li>
        <li><a href="https://www.facebook.com/hajime.todo">Messenger</a></li>
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

h3 {
  margin-top: 18px;
  margin-bottom: 18px;
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

.bio {
  text-align: center;
}

.wrapper {
  padding: 60px 10px 30px;
}

.logo {
  border-radius: 50%;
}

li span {
  display: inline-block;
}

.term {
  color: #96514d;
}
</style>
