<script setup lang="ts">
import { Site } from "@/variables"
</script>

<template>
    <div class="floatGoal">
        <h3>Book a demo</h3>
        <p>{{ Site.salesText }}</p>
        <div id="mc_embed_shell">

            <div id="mc_embed_signup">
                <a class="button" href="https://govpro.ai/contact">
                    Get started
                </a>
            </div>
        </div>

        <!--<span>{{ Site.salesAction }}</span> -->
    </div>
</template>

<style scoped>
.floatGoal {
    position: fixed;
    top: 0;
    right: 0;
    text-decoration: none;
    width: calc((100% - 900px)/2);
    background: var(--secondary-background-color);
    z-index: 1;
    border-radius: var(--primary-border-radius);
    margin-top: 20%;
    color: var(--primary-font-color);
    padding: 18px;
    max-width: 300px;
    overflow: hidden;
    padding-top: 0;
}

.floatGoal a {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--primary-font-color);
    background-color: var(--primary-background-color);
    margin-top: 10px;
    display: block;
    text-decoration: none;
    border: 1px solid var(--primary-font-color);
    outline: none;
    cursor: pointer;
    padding: 10px;
    border-radius: var(--primary-border-radius);

    width: 100%;
}

.floatGoal p {
    line-height: 150%;
}

.email {
    cursor: text !important;
}

@media (max-width: 1125px) {
    .floatGoal {
        display: none;
    }
}
</style>
