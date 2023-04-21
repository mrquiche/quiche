<template>
  <header>
    <div id="leftHeader">
      <div id="logo">
        <router-link to="/">
          <img src="../assets/quiche_logo.jpg" alt="Quiche" />
        </router-link>
      </div>
    </div>
    <div id="midHeader">
      <h1>Mr. Quiche</h1>
    </div>
    <div id="rightHeader"></div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  background-color: #06081c;
  color: white;
  display: flex;
  justify-content: space-between;
}
header h1 {
  text-align: center;
  font-size: 36px;
}

hr {
  width: 80%;
  border: black solid 1px;
}

#leftHeader {
  width: 150px;
  flex-direction: column;
  justify-content: flex-start;
}

#logo {
  margin: 20px;
}

#midHeader {
  padding-top: 20px;
  width: 450px;
  display: flex;
  justify-content: center;
}

#rightHeader {
  width: 150px;
  color: white;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
