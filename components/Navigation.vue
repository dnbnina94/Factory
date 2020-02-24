<template>
    <div class="navigation bg-blue"
         :class="{'navigation-hidden' : !showNavbar}">
        <div class="container h-100 d-flex align-items-center justify-content-end">
            <div class="navigation-wrapper">
                <nuxt-link class="navigation-link" to="/">Home</nuxt-link>
                <nuxt-link class="navigation-link" to="/statistics" >Statistics</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navigation",

    data: () => ({
        showNavbar: true,
        lastScrollPosition: 0
    }),

    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },

    methods: {
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }

            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 48) {
                return
            }
            
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    }
}
</script>

<style lang="scss" scoped>
.navigation {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 3rem;
    transition: 0.2s all ease-out;

    &-hidden {
        transform: translateY(-100%);
    }

    .navigation-wrapper {

        margin: -0.5rem;

        .navigation-link {
            color: white;
            margin: 0.5rem;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .nuxt-link-exact-active {
        font-weight: bold;
    }

}
</style>