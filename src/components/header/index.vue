<template>
<!-- header -->
  <nav class="navigation header" id="header">
    <section class="container">
      <div class="row" :class="$route.name === 'home' ? 'flex-row' : 'inline-flex'">
        <div class="navigation-title column column-flex">
          <h4>Logo</h4>
        </div>
        <ul v-if="$route.name === 'home'" class="navigation-list column">
          <li
            v-for="(link, key) in menu"
            :key="key"
            class="navigation-item">
            <a
              v-text="link"
              class="navigation-link"
              href="#"
            >
            </a>
          </li>
        </ul>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    menu: [
      'Home',
      'About',
      'Contact'
    ] // array list menu
  })
}
</script>
