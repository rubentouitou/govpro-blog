import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { g as groq, f as formatDate } from './groq-f43edbae.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { a as useSanityQuery } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@sanity/client';
import '@sanity/image-url';

const _sfc_main$2 = {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.post) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-64605c87>`);
    if ($props.post.mainImage) {
      _push(`<img class="card__cover"${ssrRenderAttr("src", _ctx.$urlFor($props.post.mainImage).width(500).height(300).url())} alt="Cover image" data-v-64605c87>`);
    } else {
      _push(`<div class="card__cover--none" data-v-64605c87></div>`);
    }
    _push(`<div class="card__container" data-v-64605c87><h3 class="card__title" data-v-64605c87><a class="card__link"${ssrRenderAttr("href", `/post/${$props.post.slug.current}`)} data-v-64605c87>${ssrInterpolate($props.post.title)}</a></h3><p class="card__excerpt" data-v-64605c87>${ssrInterpolate($props.post.excerpt)}</p><p class="card__date" data-v-64605c87>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))($props.post._createdAt))}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-64605c87"]]);
const _imports_0 = "" + publicAssetsURL("nuxt.svg");
const _imports_1 = "" + publicAssetsURL("sanity.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-2e4f6253><div class="logos" data-v-2e4f6253><div class="logos__blur" data-v-2e4f6253></div><img class="logos__entry"${ssrRenderAttr("src", _imports_0)} alt="Nuxt Logo" data-v-2e4f6253><span class="logos__plus" data-v-2e4f6253>+</span><img class="logos__entry"${ssrRenderAttr("src", _imports_1)} alt="Sanity Logo" data-v-2e4f6253></div><div class="steps" data-v-2e4f6253><h2 class="steps__title" data-v-2e4f6253>Next steps</h2><ul class="steps__list" data-v-2e4f6253><li class="steps__entry" data-v-2e4f6253><h3 class="steps__subtitle" data-v-2e4f6253>Publish a post in your Studio</h3><p class="steps__text" data-v-2e4f6253> Visit the Sanity Studio and publish a new document of type post. </p></li><li class="steps__entry" data-v-2e4f6253><h3 class="step__title" data-v-2e4f6253>Dive into the documentation</h3><p class="steps__text" data-v-2e4f6253> Check out${ssrInterpolate(" ")} <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.sanity.io/docs" data-v-2e4f6253> the documentation </a>${ssrInterpolate(" ")} to learn more about Sanity. </p></li><li class="steps__entry" data-v-2e4f6253><h3 class="steps__subtitle" data-v-2e4f6253>Join the Sanity Community</h3><p class="steps__text" data-v-2e4f6253> Leverage${ssrInterpolate(" ")} <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.sanity.io/exchange/community" data-v-2e4f6253> our awesome community </a> , and share tips and discuss! </p></li></ul></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2e4f6253"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useSanityQuery(query)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Card = __nuxt_component_0;
      const _component_Welcome = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "posts" }, _attrs))}>`);
      if (unref(posts)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_Card, {
            key: post._id,
            post
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (((_a = unref(posts)) == null ? void 0 : _a.length) === 0) {
        _push(ssrRenderComponent(_component_Welcome, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-78dbb4ab.mjs.map
