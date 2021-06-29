<template>
  <div id="app" style="height: 100%">
    <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div id="nav">
          <div class="logo" />
          <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
            <a-menu-item key="1">
              <a-icon type="question-circle" />
              <router-link to="/info"> <span>Project Info</span></router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="form" />
              <router-link to="/add"><span>Add Entity</span></router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="unordered-list" />
              <span>Entity List</span>
            </a-menu-item>
            <a-menu-item key="4">
              <a-icon type="wechat" />
              <span>Support me</span>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <div></div>

          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <!-- <span style="margin-rigint: 20px"> -->
          <!-- <a-badge dot><a-avatar shape="square" icon="user" /></a-badge> -->
          <!-- <h2 style="margin-left: 30px">Coder - Your Coding Assistant !</h2> -->
          <!-- </span> -->
        </a-layout-header>
        <a-layout-content
          id="root"
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          13
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// import router from "@/router/index.js";

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>