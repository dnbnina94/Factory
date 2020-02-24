export default {
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
            this.onResize()
        })
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },

    methods: {
        onResize() {

            let pageWidth = window.innerWidth
            let state = ''

            if (pageWidth < 768) {
                state = 'mobile'
            } else if (pageWidth >= 768 && pageWidth < 992) {
                state = 'tablet'
            } else if (pageWidth >= 992) {
                state = 'desktop'
            }

            this.$store.dispatch("app/SET_STATE", {
                windowState: state
            })
        }
    },
}