<template>
  <div id="app">
    <h1>Named Views</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/other">/other</router-link>
      </li>
    </ul>
    <div class="us__nav">
      <router-link to="/settings/emails">emails</router-link>
      <br />
      <router-link to="/settings/profile">profile</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserSettingsNav",
};
</script>