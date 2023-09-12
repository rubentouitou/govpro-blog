<script setup lang="ts">
// Configuration VueAnalytics
import { type Post } from "~/types/Post";
import BlockContent from "~/components/BlockContent.vue";
import { Site } from "@/variables"
import SocialShare from "~/components/SocialShare.vue";

const route = useRoute();
const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
const { data: post } = await useSanityQuery<Post>(query, {
  slug: route.params.slug,
});

//CHANGE THIS BASED ON TENANT
let path = computed(() => Site.url + route.fullPath);

</script>
<script lang="ts">
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { BlockContent },
};
</script>
<template>
  <Head>

    <Title>{{ post.title }}</Title>
    <Meta name="description" :content="post.excerpt" />
    <Meta name="keywords" :content="post.title" />
    <Meta property="og:url" :content="path" />
    <Meta property="og:type" content="website" />
    <Meta property="og:title" :content="post.title" />
    <Meta property="og:site_name" :content="Site.name" />
    <Meta property="og:description" :content="post.excerpt" />
    <Meta property="og:image" :content="$urlFor(post.mainImage).url()" />
    <Meta http-equiv="cache-control" content="max-age=0" />
    <Meta http-equiv="cache-control" content="no-cache" />
    <Meta http-equiv="pragma" content="no-cache" />
    <Link rel="icon" type="image/x-icon" :href="Site.favicon" />
    <Meta http-equiv="content-language" :content="Site.language" />
  </Head>
  <section class="post">


    <div class="card">

      <FloatGoal />

      <a :href="Site.url" class="back"><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 14l-4 -4l4 -4"></path>
          <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
        </svg>Go back</a>

      <img v-if="post.mainImage" class="post__cover" :src="$urlFor(post.mainImage).width(1920).url()" :alt="post.title" />
      <div v-else class="post__cover--none" />
      <div class="post__container">
        <h1 class="post__title">{{ post.title }}</h1>
        <p class="post__date">{{ formatDate(post._createdAt) }}</p>
        <SocialShare :link="path" :title="post.title" />
        <GoToGoal />
        <div v-if="post.body" class="post__content">
          <BlockContent :blocks="post.body" />
        </div>
        <GoToGoal />
        <SocialShare :link="path" :title="post.title" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.post {
  width: 100%;

  & .post__cover,
  & .post__cover--none {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    object-fit: cover;
  }

  & .post__cover--none {
    background: var(--black);
  }

  & .post__container {
    padding: 0 var(--space-3);
  }

  & .post__content {
    font-family: var(--font-family-serif);
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: var(--line-height-5);
    letter-spacing: -0.02em;
    margin-top: 0;

    /* Targeting tags in PortableText */
    & blockquote {
      border-left: 5px solid var(--black);
      padding-left: var(--space-3);
      margin-left: var(--space-4);
    }

    & a {
      color: var(--blue-600);
      text-decoration: none;
    }
  }

  & .post__title {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-7);
    line-height: var(--line-height-6);
    margin: var(--space-4) 0;
    font-weight: 800;
  }

  & .post__excerpt {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-5);
    line-height: var(--line-height-4);
    margin-top: 0;
    font-weight: 400;
  }

  & .post__date {
    font-family: var(--font-family-sans);
    font-weight: 600;
    font-family: var(--font-family-sans);
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    margin-top: var(--space-4);
  }
}


@media (min-width: 800px) {
  .post {

    & .post__cover,
    & .post__cover--none {
      width: 750px;
      height: 380px;
    }

    & .post__title {
      font-size: var(--font-size-10);
      line-height: var(--line-height-10);
      margin: var(--space-6) 0 0;
      letter-spacing: -0.025em;
    }

    & .post__excerpt {
      font-size: var(--font-size-5);
      line-height: var(--line-height-5);
      margin-top: var(--space-3);
      margin-bottom: var(--space-3);
    }

    & .post__date {
      font-size: var(--font-size-3);
      line-height: var(--line-height-2);
      margin-top: var(--space-0);
    }

    & .post__content {
      margin-top: var(--space-7);
    }
  }
}


.shareicon {
  margin-bottom: -6px;
  width: 40px;
}

.back {
  color: var(--primary-font-color);
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 20px !important;
}
</style>
