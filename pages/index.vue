<template>
  <div class="container">
    <div class="wrapper">
      <img class="logo" src="/logo.png" alt="自撮り" />
      <h1 class="title">samsepy</h1>
      <p class="bio">
        1995年8月30日生まれ、{{currentAge}}歳。
        <br />出身は石川で、現在は東京住まい。
        <br />海外で暮らしたい。
      </p>
      <h2>Profile</h2>
      <ul class="list">
        <li>
          <span>
            <span class="item">Name</span>:
          </span>
          <wbr />
          <span>Hajime Todo (東度 基)</span>
        </li>
        <li>
          <span>
            <span class="item">Screen Name</span>:
          </span>
          <wbr />
          <span>todo, samsepy</span>
        </li>
        <li>
          <span>
            <span class="item">Job</span>:
          </span>
          <wbr />
          <span>Software Engineer</span>
        </li>
        <li>
          <span class="item">Career</span>:
          <ul class="list">
            <li>
              <span class="item">2014-2018</span>
              <wbr />
              <span>
                <a href="https://www.kanazawa-it.ac.jp/">Kanazawa Institute of Technology</a> - Bachelor
              </span>
            </li>
            <li>
              <span class="item">2016-2017</span>
              <wbr />
              <span>
                <a href="https://www.souya.biz/">SOUYA Co.,Ltd.</a> - Part time Engineer
              </span>
            </li>
            <li>
              <span class="item">2018-2019</span>
              <wbr />
              <span>
                <a href="https://open8.com/">OPEN8 Inc.</a> - Engineer
              </span>
            </li>
            <li>
              <span class="item">Currently</span>
              <br />
              <span>
                <a href="https://www.sejuku.net/">Samurai Inc.</a> - Instructor
              </span>
              <br />
              <span>
                <a href="https://entershare.jp/">entershare Inc.</a> - Engineer
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Skills</h2>
      <ul class="list">
        <li>
          <span>
            <span class="item">Programming Languages</span>:
          </span>
          <wbr />
          <span>Ruby, Python</span>
        </li>
        <li>
          <span>
            <span class="item">Frameworks</span>:
          </span>
          <wbr />
          <span>Ruby on Rails</span>
        </li>
        <li>
          <span>
            <span class="item">Databases</span>:
          </span>
          <wbr />
          <span>MySQL</span>
        </li>
        <li>
          <span>
            <span class="item">Markup Languages</span>:
          </span>
          <wbr />
          <span>HTML5 + CSS3</span>
        </li>
        <li>
          <span>
            <span class="item">Environments</span>:
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
          <nuxt-link to="/blog/">Blog</nuxt-link>
        </li>
        <li>
          <a href="https://github.com/samsepy">GitHub</a>
        </li>
        <li>
          <a href="https://qiita.com/samsepy">Qiita</a>
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
            <span class="item">Kyash</span>:
          </span>
          <wbr />
          <span>@samsepy</span>
        </li>
        <li>
          <span>
            <span class="item">LINE Pay</span>:
          </span>
          <wbr />
          <span>@todo1995</span>
        </li>
        <li>
          <span>
            <span class="item">PayPay</span>:
          </span>
          <wbr />
          <span>@samsepy</span>
        </li>
        <li>
          <span>
            <span class="item">NEM</span>:
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
          <a href="mailto:htodo@protonmail.ch">Mail</a>
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
  computed: {
    currentAge() {
      const birthday = new Date(1995, 8 - 1, 30);
      const today = new Date();
      const thisYearBirthDay = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
      );
      const age = today.getFullYear() - birthday.getFullYear();
      return today < thisYearBirthDay ? age - 1 : age;
    }
  }
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

ul {
  padding: 0;
}

li span {
  display: inline-block;
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
