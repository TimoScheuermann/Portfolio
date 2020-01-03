<template>
  <div class="project" :class="{ dark: dark }">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="desciption">{{ desc }}</div>
      <div class="readMore"></div>
    </div>
    <div class="background">
      <img :src="img" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "img", "desc", "dark"]
};
</script>
<style lang="scss" scoped>
.project {
  background: var(--paragraph);
  &.dark {
    background: var(--color);
    color: var(--paragraph);
  }
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .content {
    text-align: center;
    margin-bottom: 10px;
    .title {
      font-weight: bold;
      font-size: 20px;
    }
    .desciption {
      margin: 10px 0px;
    }
    .readMore {
      display: inline-block;
      cursor: pointer;
      color: #08f;
      border: 1px solid #08f;
      margin: 10px;
      padding: 5px 10px;
      border-radius: 5px;
      transition: 0.2s ease-in;
      &:hover {
        background: #08f;
        color: #fff;
      }
      &::before {
        content: "Read more";
      }
    }
  }
  .background {
    img {
      max-width: 100%;
      max-height: 200px;
    }
  }
}
</style>