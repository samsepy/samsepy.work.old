<template>
  <div>
    <img class="icon" src="/icon.png" alt="icon" width="200" height="200" />
    <h1 class="title">samsepy</h1>
    <p class="bio">
      1995年8月30日生まれ、{{ currentAge }}歳。
      <br />リモートでエンジニアをやっている。 <br />海外で暮らしたい。<a
        href="https://maps.app.goo.gl/tarCyx7BBHcfir986"
        @click="trackEventClick('location')"
        >津々浦々に出没する</a
      >。
    </p>
    <h2>Profile</h2>
    <ul class="list">
      <li>
        <span> <span class="item">Name</span>: </span>
        <wbr />
        <span>Hajime Todo (東度 基)</span>
      </li>
      <li>
        <span> <span class="item">Screen Name</span>: </span>
        <wbr />
        <span>todo, samsepy</span>
      </li>
      <li>
        <span> <span class="item">Job</span>: </span>
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
              <a href="https://www.kanazawa-it.ac.jp/"
                >Kanazawa Institute of Technology</a
              >
            </span>
          </li>
          <li>
            <span class="item">2016-2017</span>
            <wbr />
            <span>
              <a href="https://www.souya.biz/">SOUYA Co.,Ltd.</a>
            </span>
          </li>
          <li>
            <span class="item">2018-2019</span>
            <wbr />
            <span>
              <a href="https://open8.com/">OPEN8 Inc.</a>
            </span>
          </li>
          <li>
            <span class="item">Currently</span>
            <wbr />
            <span>
              <a href="https://entershare.jp/">entershare Inc.</a>
            </span>
          </li>
        </ul>
      </li>
    </ul>
    <h2>Skills</h2>
    <ul class="list">
      <li>
        <span> <span class="item">Programming Languages</span>: </span>
        <wbr />
        <span>
          <a href="https://www.ruby-lang.org/">Ruby</a>,
          <a href="https://www.python.org/">Python</a>
        </span>
      </li>
      <li>
        <span> <span class="item">Frameworks</span>: </span>
        <wbr />
        <span>
          <a href="https://rubyonrails.org/">Ruby on Rails</a>
        </span>
      </li>
      <li>
        <span> <span class="item">Databases</span>: </span>
        <wbr />
        <span>
          <a href="https://www.mysql.com/">MySQL</a>
        </span>
      </li>
      <li>
        <span> <span class="item">Markup Languages</span>: </span>
        <wbr />
        <span>
          <a href="https://en.wikipedia.org/wiki/HTML5/">HTML5</a> +
          <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3"
            >CSS3</a
          >
        </span>
      </li>
      <li>
        <span> <span class="item">Environments</span>: </span>
        <wbr />
        <span>
          <a href="https://www.apple.com/macos/">macOS</a>,
          <a href="https://git-scm.com/">Git</a>,
          <a href="https://github.com/">GitHub</a>
        </span>
      </li>
    </ul>
    <h2>Works</h2>
    <h3>
      <a href="https://github.com/samsepy/banhst.git/">banhst</a>
    </h3>
    <p>
      任意のホストの通信を強制的に遮断するCLIツール。SNS等で消耗している現代の若者におすすめ。
    </p>
    <h2>Links</h2>
    <ul class="list">
      <li>
        <a
          href="https://github.com/samsepy/"
          @click="trackEventClick('github')"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/hajime.todo/"
          @click="trackEventClick('facebook')"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          href="https://line.me/ti/p/pGoAZ-zuEH/"
          @click="trackEventClick('line')"
        >
          LINE
        </a>
      </li>
      <li>
        <a
          href="https://scrapbox.io/samsepy/"
          @click="trackEventClick('scrapbox')"
          >Scrapbox
        </a>
      </li>
    </ul>
    <h2>Pays</h2>
    <p>請求や送金する際にこちらを使ってもらうと助かります。</p>
    <ul class="list">
      <li>
        <span> <span class="item">Kyash</span>: </span>
        <wbr />
        <span>@samsepy</span>
      </li>
      <li>
        <span> <span class="item">LINE Pay</span>: </span>
        <wbr />
        <span>@todo1995</span>
      </li>
      <li>
        <span> <span class="item">PayPay</span>: </span>
        <wbr />
        <span>@samsepy</span>
      </li>
      <li>
        <span> <span class="item">NEM</span>: </span>
        <wbr />
        <span>NAVLPQ-TXNVHP-GSXUE7-NEH5N4-QMPH2X-Q5VZ65-OWFI</span>
      </li>
    </ul>
    <h2>Contacts</h2>
    <ul class="list">
      <li>
        <a href="tel:+819062734866" @click="trackEventClick('tel')">Tel</a>
      </li>
      <li>
        <a href="mailto:htodo@protonmail.ch/" @click="trackEventClick('mail')"
          >Mail</a
        >
      </li>
      <li>
        <a href="https://t.me/samsepy/" @click="trackEventClick('telegram')"
          >Telegram
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/hajime.todo/"
          @click="trackEventClick('messenger')"
        >
          Messenger
        </a>
      </li>
    </ul>
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
    },
  },
};
</script>

<style scoped>
.bio {
  text-align: center;
}

.icon {
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

.related-logo {
  vertical-align: middle;
  margin-right: 8px;
}
</style>
