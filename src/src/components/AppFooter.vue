<template>
  <footer>
    <div id="leftFooter"></div>
    <div id="midFooter">
      <div class="linkContainer">
        <div class="linkLabel">Twitter</div>
        <a href="https://twitter.com/mrquicheBTC"> @mrquicheBTC </a>
      </div>
      <div class="linkContainer">
        <div class="linkLabel">Amboss</div>
        <a
          href="https://amboss.space/node/038cb7e8e97943babaee2d5abdb3805dc328a02fad04bb184a6e6e40ab4d9c80a6"
        >
          MrQuiche
        </a>
      </div>
      <div class="linkContainer">
        <div class="linkLabel">Telegram</div>
        <a href="https://t.me/MrQuiche"> MrQuiche </a>
      </div>
      <div class="linkContainer">
        <div class="linkLabel">Email</div>
        <a href="mailto:mrquiche1@gmail.com"> mrquiche1@gmail.com</a>
      </div>
    </div>
    <div id="rightFooter"></div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  background-color: #06081c;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80px;
}

#leftFooter {
  width: 150px;
  display: flex;
  justify-content: left;
  padding: 10px;
}
.linkLabel {
  display: flex;
  font-size: 12px;
  align-items: flex-end;
}
.linkContainer {
  display: flex;
  font-size: 12px;
  padding: 0 15px 0 15px;
  flex-direction: column;
  align-items: flex-start;
}
#midFooter {
  width: 450px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
}

#rightFooter {
  width: 150px;
  display: flex;
  justify-content: right;
  color: white;
  font-size: 18px;
  padding-top: 5px;
}
a {
  color: #b2b2b2;
  font-size: 15px;
}
</style>
