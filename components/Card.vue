<script>
import { formatDate } from "~/utils";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="col-sm-6">
    <div v-if="post" class="card">
      <img v-if="post.mainImage" class="card__cover" :src="$urlFor(post.mainImage).width(500).height(300).url()"
        alt="Cover image" />

      <div v-else class="card__cover--none" />

      <div class="card__container">
        <h3 class="card__title">
          <a class="card__link" :href="`/post/${post.slug.current}`">
            {{ post.title }}
          </a>
        </h3>
        <p class="card__excerpt">{{ post.excerpt }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {

  & .card__container {
    margin: 0 var(--space-1) 0;
  }

  & .card__cover {
    width: 100%;
    height: 231px;
    object-fit: cover;
  }

  & .card__cover--none {
    width: 100%;
    height: 231px;
    background: var(--black);
  }

  & .card__title {
    font-family: var(--font-family-sans);
    font-weight: 800;
    font-size: var(--font-size-7);
    line-height: var(--line-height-6);
    letter-spacing: -0.025em;
    margin: var(--space-3) 0;
  }

  & .card__excerpt {
    font-family: var(--font-family-serif);
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: var(--line-height-3);
    margin-top: 0;
  }

  & .card__date {
    font-weight: 600;
    font-family: var(--font-family-sans);
    font-size: var(--font-size-1);
    margin-top: calc(var(----space-4) + 7);
  }

  & .card__link {
    color: var(--black);
    text-decoration: none;

    &:hover {
      opacity: 0.8;
      transition: 0.2s;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
    }
  }

  &:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}

@media (min-width: 575px) {
  .card {


    & .card__title {
      margin-top: var(--space-4);
    }

    &:last-child {}
  }
}
</style>
