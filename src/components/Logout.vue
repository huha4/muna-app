<template></template>
<script>
import Cookies from "js-cookie"; // Pastikan Anda telah mengimpor pustaka Cookies
export default {
  name: "Logout",
  mounted() {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      };
      Cookies.remove(cookieName, neededAttributes);
      Cookies.remove("Authorization");
    });
    // Redirect ke halaman lain atau halaman login setelah logout
    // window.location.reload();
    this.$router.push("/login").then(() => {
      window.location.reload();
    });
  },
};
</script>