<script setup>
import './variables.css';
import { Site } from "@/variables"

const year = (new Date()).getFullYear()
</script>


<template>
  <header class="header">
    <a class="header__title" href="https://govpro.ai">
      <img src="@/logo.png" alt="Logo" width="90" />
    </a>
    <a href="https://govpro.ai" class="return">
      Back to the site
      <svg xmlns="http://www.w3.org/2000/svg" class="iconshare" width="24" height="24" viewBox="0 0 24 24"
        stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
          stroke-width="0" fill="#bbb"></path>
      </svg>
    </a>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer class="footer">
    <p> © {{ year }} {{ Site.name }}. All rights reserved.
    </p>
  </footer>
</template>

<style>
.header {
  width: calc(100% - 80px) !important;
  left: 40px;
  top: 30px;
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 40px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  min-height: auto;
  -webkit-transform: translate(0) !important;
  -ms-transform: translate(0) !important;
  transform: translate(0) !important;
  height: 72px;
  padding: 0 !important;
}

.header__title img {
  margin-top: 28px;
  margin-left: 12px;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 var(--space-3);

  & .footer__text {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    display: flex;
    align-items: center;
    gap: 2px;
  }
}

@media (min-width: 575px) {
  .container {
    max-width: 900px;
    padding: 0 var(--space-4);
  }

  main {
    margin-top: unset;
  }

  .header {
    position: unset;
    border-bottom: none;
    margin: var(--space-3) 0;
    padding: var(--space-2) 0;
    background: unset;

    & .header__title {
      margin: var(--space-3) 0 var(--space-2);
      font-size: var(--font-size-5);
    }
  }
}
</style>

<style>
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 32px;
  --space-6: 52px;
  --space-7: 84px;
  --space-8: 136px;
  --space-9: 220px;

  --font-family-sans: Inter;
  --font-family-serif: PT Serif;
  --font-family-mono: IMB Plex Mono;

  --font-size-0: 12px;
  --font-size-1: 14px;
  --font-size-2: 16px;
  --font-size-3: 18px;
  --font-size-4: 20px;
  --font-size-5: 24px;
  --font-size-6: 30px;
  --font-size-7: 36px;
  --font-size-8: 48px;
  --font-size-9: 60px;
  --font-size-10: 72px;

  --line-height-0: 16px;
  --line-height-1: 20px;
  --line-height-2: 24px;
  --line-height-3: 28px;
  --line-height-4: 28px;
  --line-height-5: 32px;
  --line-height-6: 36px;
  --line-height-7: 40px;
  --line-height-8: 48px;
  --line-height-9: 60px;
  --line-height-10: 72px;
  --line-height-11: 96px;
  --line-height-12: 128px;

  --white: #fff;
  --black: #101112;
  --gray-200: #ced2d9;
  --gray-600: #6e7683;
  --blue-600: #1e61cd;
  --magenta-100: #f9d7eb;

  --max-width-0: 320px;
  --max-width-1: 768px;
}

html {
  background-color: var(--white);
  font-family: var(--font-family-sans), var(--font-family-serif), sans-serif;
  text-size-adjust: 100%;
}

body {
  margin: 0;
}

.return {
  text-decoration: none;
  color: var(--primary-font-color);
  float: right;
  display: inline-flex;
  margin-right: 22px;
  margin-top: 25px;
}

.return svg {
  margin-top: -3px;
}
</style>
