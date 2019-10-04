<template>
  <div class="container">
    <div class="wrapper">
      <img class="logo" src="../assets/images/logo.png" alt="自撮り">
      <h1 class="title">samsepy</h1>
      <p class="bio">1995年8月30日生まれ、24歳。<br>出身は石川で、現在は東京住まい。<br>海外で暮らしたい。</p>
      <h2>Profile</h2>
      <ul class="list">
        <li><span><b>Name</b>:&nbsp;<wbr></span><span>Hajime Todo (東度 基)</span></li>
        <li><span><b>Screen Name</b>:&nbsp;<wbr></span><span>todo, samsepy</span></li>
        <li><span><b>Job</b>:&nbsp;<wbr></span><span>Software Engineer</span></li>
        <li><b>Career</b>:
          <ul class="list">
            <li><span class="term">2014-2018</span>&nbsp;<wbr><span>Kanazawa Institute of Technology - Bachelor</span></li>
            <li><span class="term">2016-2017</span>&nbsp;<wbr><span>SOUYA Co.,Ltd. - Part-time Engineer</span></li>
            <li><span class="term">2018-2019</span>&nbsp;<wbr><span>OPEN8 Inc. - Engineer</span></li>
            <li><span class="term">2019</span>&nbsp;<wbr><span>Sole Proprietor - Engineer</span></li>
          </ul>
        </li>
      </ul>
      <h2>Skills</h2>
      <ul class="list">
        <li><span><b>Programming Languages</b>:&nbsp;<wbr></span><span>Ruby, Python</span></li>
        <li><span><b>Frameworks</b>:&nbsp;<wbr></span><span>Ruby on Rails</span></li>
        <li><span><b>Databases</b>:&nbsp;<wbr></span><span>MySQL</span></li>
        <li><span><b>Markup Languages</b>:&nbsp;<wbr></span><span>HTML5 + CSS3</span></li>
        <li><span><b>Environments</b>:&nbsp;<wbr></span><span>macOS, Git, GitHub</span></li>
      </ul>
      <h2>Works</h2>
      <h3><a href="https://github.com/samsepy/banhst.git">banhst</a></h3>
      <p>任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。</p>
      <h2>Sites</h2>
      <ul class="list">
        <li><nuxt-link to="/blog/">Blog</nuxt-link> - 準備中</li>
        <li><a href="https://github.com/samsepy">GitHub</a></li>
        <li><a href="http://samsepy.hatenablog.com/">はてなブログ</a></li>
        <li><a href="https://alis.to/users/samsepy">ALIS</a></li>
        <li><a href="https://twitter.com/samsepy"><s>Twitter</s></a> - やめた</li>
        <li><a href="https://www.facebook.com/hajime.todo">Facebook</a></li>
        <li><a href="https://www.amazon.jp/hz/wishlist/ls/13WQUGCYG4293?ref_=wl_share">Amazon</a> - wishlist</li>
      </ul>
      <h2>Pays</h2>
      <p>請求や送金する際にこちらを使ってもらうと助かります。</p>
      <ul class="list">
        <li><span><b>Kyash</b>:&nbsp;<wbr></span><span>@samsepy</span></li>
        <li><span><b>LINE Pay</b>:&nbsp;<wbr></span><span>@todo1995</span></li>
        <li><span><b>PayPay</b>:&nbsp;<wbr></span><span>@samsepy</span></li>
        <li><span><b>NEM</b>:&nbsp;<wbr></span><span>NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</span></li>
      </ul>
      <h2>Contacts</h2>
      <ul class="list">
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

<style scoped>
.list {
  list-style-type: none;
  padding: 0;
  text-align: left
}

.bio {
  text-align: center;
}

.logo {
  display: block;
  border-radius: 50%;
  margin: 0 auto;
}

li span {
  display: inline-block;
}

.term {
  color: #96514d;
}

.title {
  text-align: center;
}
</style>
