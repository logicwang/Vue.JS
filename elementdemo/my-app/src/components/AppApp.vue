<template>
  <el-radio-group v-model="radioTreaty" @change="agreeChange">
    <el-button @onclick="bbb()">xxxxxx</el-button>
    <el-radio label="1" border disabled size="medium" name="aaa"
      >不同意
    </el-radio>
    <el-radio label="2" border>同意</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radioTreaty: "1",
      btnstatus: true,
    };
  },
  methods: {
    bbb() {
      
    },
  },
};
</script>