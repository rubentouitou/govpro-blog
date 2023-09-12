<script setup lang="ts">
import { Site } from "@/variables"
</script>

<template>
    <div class="backlink">
        <a :href="Site.goal">
            <svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 7h-6l4 5l-4 5h6l4 -5z"></path>
            </svg>
            {{ Site.salesText }}</a>
    </div>
</template>

<style scoped>
.shareicon {
    margin-bottom: -6px;
    width: 40px;
}

a {
    color: var(--primary-font-color);
    font-weight: 500;
    text-decoration: none;
}

.backlink {
    background: var(--secondary-background-color);
    padding: 13px;
    border-radius: var(--primary-border-radius);
    padding-top: 12px;
    margin-top: 10px;
}
</style>
