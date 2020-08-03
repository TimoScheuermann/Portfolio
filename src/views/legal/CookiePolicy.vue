<template>
  <div class="legal-cookies">
    <tc-header variant="sticky" :autoBackground="true" title="Cookie Policy" />
    <tc-hero tc-dark-container>
      <img src="assets/legal-hero.jpg" slot="background" alt="" />
      <tl-flow flow="column">
        <h1>Cookie Policy</h1>
        <p><b>Last updated August 03, 2020</b></p>
      </tl-flow>
    </tc-hero>
    <div content>
      <h2>What Are Cookies</h2>

      <p>
        As is common practice with almost all professional websites this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your experience. This page describes what information they
        gather, how we use it and why we sometimes need to store these cookies.
        We will also share how you can prevent these cookies from being stored
        however this may downgrade or 'break' certain elements of the sites
        functionality.
      </p>

      <p>
        For more general information on cookies, please read
        <tc-link href="https://www.cookieconsent.com/what-are-cookies/"
          >"What Are Cookies"</tc-link
        >.
      </p>

      <h2>How We Use Cookies</h2>

      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately in
        most cases there are no industry standard options for disabling cookies
        without completely disabling the functionality and features they add to
        this site. It is recommended that you leave on all cookies if you are
        not sure whether you need them or not in case they are used to provide a
        service that you use.
      </p>

      <h2>Disabling Cookies</h2>

      <p>
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser Help for how to do this). Be aware that
        disabling cookies will affect the functionality of this and many other
        websites that you visit. Disabling cookies will usually result in also
        disabling certain functionality and features of the this site. Therefore
        it is recommended that you do not disable cookies.
      </p>

      <h2>The Cookies We Set</h2>

      <ul>
        <li>
          <p>Account related cookies</p>
          <p>
            If you create an account with us then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out however in some
            cases they may remain afterwards to remember your site preferences
            when logged out.
          </p>
        </li>

        <li>
          <p>Login related cookies</p>
          <p>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </p>
        </li>
      </ul>

      <h2>More Information</h2>

      <p>
        Hopefully that has clarified things for you and as was previously
        mentioned if there is something that you aren't sure whether you need or
        not it's usually safer to leave cookies enabled in case it does interact
        with one of the features you use on our site.
      </p>

      <p>
        However if you are still looking for more information then you can
        contact us through one of our preferred contact methods:
      </p>

      <ul>
        <li>
          By visiting this link:
          <tc-link href="https://timos.design/contact"
            >https://timos.design/contact</tc-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class CookiePolicy extends Vue {}
</script>

<style lang="scss" scoped>
.tc-hero {
  h1,
  p {
    margin: 0;
  }
}
</style>
