<template>
  <div class="container">
    <div class="wrapper">
      <img class="logo" src="../assets/images/logo.png" alt="自撮り" />
      <h1 class="title">samsepy</h1>
      <p class="bio">
        1995年8月30日生まれ、24歳。
        <br />出身は石川で、現在は東京住まい。
        <br />海外で暮らしたい。
      </p>
      <h2>Profile</h2>
      <ul class="list">
        <li>
          <span>
            <span class="item">Name</span>:&nbsp;
          </span>
          <wbr />
          <span>Hajime Todo (東度 基)</span>
        </li>
        <li>
          <span>
            <span class="item">Screen Name</span>:&nbsp;
          </span>
          <wbr />
          <span>todo, samsepy</span>
        </li>
        <li>
          <span>
            <span class="item">Job</span>:&nbsp;
          </span>
          <wbr />
          <span>Software Engineer</span>
        </li>
        <li>
          <span class="item">Career</span>:
          <ul class="list">
            <li>
              <span class="term">2014-2018</span>&nbsp;
              <wbr />
              <span>Kanazawa Institute of Technology - Bachelor</span>
            </li>
            <li>
              <span class="term">2016-2017</span>&nbsp;
              <wbr />
              <span>SOUYA Co.,Ltd. - Part time Engineer</span>
            </li>
            <li>
              <span class="term">2018-2019</span>&nbsp;
              <wbr />
              <span>OPEN8 Inc. - Engineer</span>
            </li>
            <li>
              <span class="term">2019</span>&nbsp;
              <wbr />
              <span>Sole Proprietor - Engineer</span>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Skills</h2>
      <ul class="list">
        <li>
          <span>
            <span class="item">Programming Languages</span>:&nbsp;
          </span>
          <wbr />
          <span>Ruby, Python</span>
        </li>
        <li>
          <span>
            <span class="item">Frameworks</span>:&nbsp;
          </span>
          <wbr />
          <span>Ruby on Rails</span>
        </li>
        <li>
          <span>
            <span class="item">Databases</span>:&nbsp;
          </span>
          <wbr />
          <span>MySQL</span>
        </li>
        <li>
          <span>
            <span class="item">Markup Languages</span>:&nbsp;
          </span>
          <wbr />
          <span>HTML5 + CSS3</span>
        </li>
        <li>
          <span>
            <span class="item">Environments</span>:&nbsp;
          </span>
          <wbr />
          <span>macOS, Git, GitHub</span>
        </li>
      </ul>
      <h2>Works</h2>
      <h3>
        <a href="https://github.com/samsepy/banhst.git">banhst</a>
      </h3>
      <p>任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。</p>
      <h2>Sites</h2>
      <ul class="list">
        <li>
          <nuxt-link to="/blog/">Blog</nuxt-link> - 準備中
        </li>
        <li>
          <a href="https://github.com/samsepy">GitHub</a>
        </li>
        <li>
          <a href="http://samsepy.hatenablog.com/">はてなブログ</a>
        </li>
        <li>
          <a href="https://alis.to/users/samsepy">ALIS</a>
        </li>
        <li>
          <a href="https://twitter.com/samsepy">
            <span class="strike-through">Twitter</span>
          </a> - やめた
        </li>
        <li>
          <a href="https://www.facebook.com/hajime.todo">Facebook</a>
        </li>
        <li>
          <a href="https://www.amazon.jp/hz/wishlist/ls/13WQUGCYG4293?ref_=wl_share">Amazon</a> - wishlist
        </li>
      </ul>
      <h2>Pays</h2>
      <p>請求や送金する際にこちらを使ってもらうと助かります。</p>
      <ul class="list">
        <li>
          <span>
            <span class="item">Kyash</span>:&nbsp;
          </span>
          <wbr />
          <span>@samsepy</span>
        </li>
        <li>
          <span>
            <span class="item">LINE Pay</span>:&nbsp;
          </span>
          <wbr />
          <span>@todo1995</span>
        </li>
        <li>
          <span>
            <span class="item">PayPay</span>:&nbsp;
          </span>
          <wbr />
          <span>@samsepy</span>
        </li>
        <li>
          <span>
            <span class="item">NEM</span>:&nbsp;
          </span>
          <wbr />
          <span>NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</span>
        </li>
      </ul>
      <h2>Contacts</h2>
      <ul class="list">
        <li>
          <a href="tel:+819062734866">Tel</a>
        </li>
        <li>
          <a href="mailto:samsepylot@gmail.com">Mail</a>
        </li>
        <li>
          <a href="https://t.me/samsepy">Telegram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/hajime.todo">Messenger</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.list {
  list-style-type: none;
  padding: 0;
  text-align: left;
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

.item {
  font-weight: bold;
}

.strike-through {
  text-decoration: line-through;
}
</style>
