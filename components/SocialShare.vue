<script setup lang="ts">
const props = defineProps<{
    link: string
    title: number
}>()
</script>

<template>
    <div class="social-share">
        <p>Share it:
            <a :href="'https://twitter.com/intent/tweet?text=' + title + '&' + 'url=' + link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="#bbbbbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
            </a>


            <a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + link + '&title=' + title" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="#bbbbbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
            </a>


            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
            </a>


            <a :href="'mailto:?subject=' + title + '&amp;body=Check this out ' + link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                </svg>
            </a>


            <a :href="'whatsapp://send?text=' + title + ' ' + link" data-action="share/whatsapp/share" class="no-desktop">
                <svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                    <path
                        d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1">
                    </path>
                </svg>
            </a>

        </p>
    </div>
</template>

<style scoped>
.social-share {
    margin-bottom: 50px;
    margin-top: 30px;
}

.shareicon {
    margin-bottom: -6px;
    width: 40px;
}

p {
    color: var(--primary-font-color);
    font-weight: 500;
}
</style>
