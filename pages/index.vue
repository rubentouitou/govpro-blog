<script setup lang="ts">
import { type Post } from "~/types/Post";
import { Site } from "@/variables"

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(query);
</script>

<template>
  <Head>
    <Title>{{ Site.googleName }}</Title>
    <Meta name="description" :content="Site.description" />
    <Meta name="keywords" :content="Site.keywords" />
    <Meta property="og:url" :content="Site.url" />
    <Meta property="og:type" content="website" />
    <Meta property="og:title" :content="Site.googleName" />
    <Meta property="og:site_name" :content="Site.googleName" />
    <Meta property="og:description" :content="Site.description" />
    <Meta http-equiv="cache-control" content="max-age=0" />
    <Meta http-equiv="cache-control" content="no-cache" />
    <Meta http-equiv="pragma" content="no-cache" />
    <Link rel="icon" type="image/x-icon" :href="Site.favicon" />
    <Meta http-equiv="content-language" :content="Site.language" />
  </Head>

  <section class="posts">
    <div class='box'>
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div>
    </div>

    <div class="container">
      <h1>{{ Site.h1 }}</h1>
      <p>{{ Site.p }}</p>
      <div class="row">
        <HeroCard :key="posts[0]._id" :post="posts[0]" />
      </div>
      <div class="row">
        <Card v-if="posts" v-for="post in posts.slice(1)" :key="post._id" :post="post" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: calc(100% - 30px);
}

.container h1 {
  color: var(--primary-font-color);
  margin-top: 30px;
  font-size: 30px;
}

.container p {
  color: var(--primary-font-color);
  margin-bottom: 50px;
  font-size: 17px !important;
}
</style>
