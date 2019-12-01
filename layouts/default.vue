<template>
  <div class="container">
    <header>
      <nav>
        <ul class="list">
          <li>
            <nuxt-link to="/">home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog/">blog</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #696969;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
