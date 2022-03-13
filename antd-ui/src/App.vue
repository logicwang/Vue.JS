<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <a-button type="primary"> Primary </a-button>
      <a-button>Default</a-button>
      <a-button type="dashed"> Dashed </a-button>
      <a-button type="danger"> Danger </a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary"> 按钮 </a-button>
      </a-config-provider>
      <a-button type="primary"> 按钮 </a-button>
      <a-button type="link"> Link </a-button>
    </div>
    <div id="components-button-demo-button-group">
      <h4>Basic</h4>
      <a-button-group>
        <a-button>Cancel</a-button>
        <a-button type="primary"> OK </a-button>
      </a-button-group>
      <a-button-group>
        <a-button disabled> L </a-button>
        <a-button disabled> M </a-button>
        <a-button disabled> R </a-button>
      </a-button-group>
      <a-button-group>
        <a-button type="primary"> L </a-button>
        <a-button>M</a-button>
        <a-button>M</a-button>
        <a-button type="dashed"> R </a-button>
      </a-button-group>

      <h4>With Icon</h4>
      <a-button-group>
        <a-button type="primary"> <a-icon type="left" />Go back </a-button>
        <a-button type="primary"> Go forward<a-icon type="right" /> </a-button>
      </a-button-group>
      <a-button-group>
        <a-button type="primary" icon="cloud" />
        <a-button type="primary" icon="cloud-download" />
      </a-button-group>
      <a-icon type="step-backward" />
    </div>
  </div>
</template>

<script>
export default {
  name: "aPP",
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>