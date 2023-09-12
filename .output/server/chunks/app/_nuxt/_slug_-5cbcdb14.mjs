import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, h } from 'vue';
import { b as useRoute, a as useSanityQuery } from '../server.mjs';
import { g as groq, f as formatDate } from './groq-f43edbae.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { t as defu } from '../../nitro/node-server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-router';
import '@sanity/client';
import '@sanity/image-url';
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

const isSpan = (block) => block._type === "span";
const defaults = {
  types: {
    span: "span",
    image: "img"
  },
  marks: {
    strong: "strong",
    em: "em",
    link: "a"
  },
  styles: {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    normal: "p",
    blockquote: "blockquote"
  },
  listItem: "li",
  container: "div"
};
const validAttrs = [
  "abbr",
  "accesskey",
  "accessKey",
  "action",
  "alt",
  "autocomplete",
  "autofocus",
  "autoplay",
  "charset",
  "checked",
  "cite",
  "class",
  "cols",
  "colspan",
  "command",
  "content",
  "datetime",
  "default",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "headers",
  "height",
  "hidden",
  "href",
  "hreflang",
  "id",
  "maxlength",
  "minlength",
  "muted",
  "placeholder",
  "preload",
  "radiogroup",
  "readonly",
  "required",
  "role",
  "selected",
  "src",
  "srcdoc",
  "srcset",
  "tabindex",
  "title",
  "value",
  "width",
  "wrap"
];
function findSerializer(item, serializers) {
  if ((item == null ? void 0 : item.listItem) && item._type !== "list") {
    return serializers.listItem || "li";
  }
  return (item == null ? void 0 : item._type) ? serializers.types[item._type] || serializers.marks[item._type] : void 0;
}
function renderStyle(item, serializers, children) {
  const serializer = item.style && serializers.styles[item.style];
  const isElement = typeof serializer === "string";
  const props = extractProps(item, isElement);
  if (!item.listItem && item.style && serializer) {
    return h(serializer, props, { default: children });
  }
  return children == null ? void 0 : children();
}
function renderInSerializer(item, serializers) {
  return render(serializers, item, () => (item.children || []).map((child) => {
    if (isSpan(child)) {
      return renderMarks(child.text, child.marks, serializers, item.markDefs);
    }
    return render(serializers, child, () => renderMarks(child.text, child.marks, serializers, item.markDefs));
  }));
}
function renderMarks(content, [mark, ...marks] = [], serializers, markDefs = []) {
  if (!mark)
    return content;
  const definition = mark in serializers.marks ? { _type: mark, _key: "" } : markDefs.find((m) => m._key === mark);
  return render(serializers, definition, () => renderMarks(content, marks, serializers, markDefs));
}
function walkList(blocks, block) {
  if (!block.listItem) {
    blocks.push(block);
    return blocks;
  }
  const lastBlock = blocks[blocks.length - 1] || {};
  if (lastBlock._type !== "list" || !lastBlock.children || block.level === 1 && block.listItem !== lastBlock.listItem) {
    blocks.push({
      _type: "list",
      listItem: block.listItem,
      level: block.level,
      children: [block]
    });
    return blocks;
  }
  if (block.level === lastBlock.level && block.listItem === lastBlock.listItem) {
    lastBlock.children.push(block);
    return blocks;
  }
  walkList(lastBlock.children, block);
  return blocks;
}
function render(serializers, item, children) {
  const serializer = findSerializer(item, serializers);
  if (!serializer)
    return children == null ? void 0 : children();
  if (!item) {
    return void 0;
  }
  const isElement = typeof serializer === "string";
  const props = extractProps(item, isElement);
  if (isElement) {
    return h(serializer, props, children == null ? void 0 : children());
  }
  return h(serializer, props, { default: () => children == null ? void 0 : children() });
}
function extractProps(item, isElement) {
  return Object.fromEntries(
    Object.entries(item).filter(([key]) => key !== "_type" && key !== "markDefs").map(
      ([key, value]) => {
        if (key === "_key")
          return ["key", value || null];
        if (!isElement || validAttrs.includes(key))
          return [key, value];
        return [];
      }
    )
  );
}
function renderBlocks(blocks, serializers) {
  return blocks.map((block) => {
    const node = renderStyle(block, serializers, () => renderInSerializer(block, serializers));
    return node;
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "SanityContent",
  props: {
    blocks: {
      type: Array,
      default: () => []
    },
    serializers: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const serializers = defu(props.serializers, defaults);
    serializers.types.list = serializers.types.list || createListSerializer(serializers);
    return () => {
      var _a;
      return renderBlocks(((_a = props.blocks) == null ? void 0 : _a.reduce(walkList, [])) || [], serializers);
    };
  }
});
const createListSerializer = (serializers) => {
  return /* @__PURE__ */ defineComponent({
    name: "ListComponent",
    inheritAttrs: false,
    props: {
      children: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 1
      }
    },
    setup(props) {
      return () => {
        var _a;
        const isOrdered = ((_a = props.children[0]) == null ? void 0 : _a.listItem) === "number";
        if (props.level > 1) {
          return h(serializers.listItem || "li", [h(
            isOrdered ? "ol" : "ul",
            {},
            { default: () => renderBlocks(props.children, serializers) }
          )]);
        }
        return h(
          isOrdered ? "ol" : "ul",
          {},
          { default: () => renderBlocks(props.children, serializers) }
        );
      };
    }
  });
};
const _sfc_main$1 = {
  props: {
    blocks: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SanityContent = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SanityContent, mergeProps({ blocks: $props.blocks }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlockContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlockContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: { BlockContent }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useSanityQuery(query, {
      slug: route.params.slug
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "post" }, _attrs))} data-v-ff0937a4>`);
      if (unref(post).mainImage) {
        _push(`<img class="post__cover"${ssrRenderAttr("src", _ctx.$urlFor(unref(post).mainImage).width(1920).url())} alt="Cover image" data-v-ff0937a4>`);
      } else {
        _push(`<div class="post__cover--none" data-v-ff0937a4></div>`);
      }
      _push(`<div class="post__container" data-v-ff0937a4><h1 class="post__title" data-v-ff0937a4>${ssrInterpolate(unref(post).title)}</h1><p class="post__excerpt" data-v-ff0937a4>${ssrInterpolate(unref(post).excerpt)}</p><p class="post__date" data-v-ff0937a4>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(post)._createdAt))}</p>`);
      if (unref(post).body) {
        _push(`<div class="post__content" data-v-ff0937a4>`);
        _push(ssrRenderComponent(BlockContent, {
          blocks: unref(post).body
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff0937a4"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-5cbcdb14.mjs.map
