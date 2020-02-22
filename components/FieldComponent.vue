<template>
    <div class="field-component">
        <span class="field-label">
            <b>{{ field.label }}:</b>
        </span>
        <br/>
        <div class="d-flex w-100">
            <input type="text" class="form-control" disabled v-model="randomNumber" />
            <div class="arrow-container d-flex align-items-center ml-2">
                <arrow class="arrow" 
                       :class="{'arrow-up' : randomNumber > 0, 'arrow-down' : randomNumber < 0}" />
            </div>
        </div>
        <button class="btn w-100 mt-2"
                :class="{'btn-primary' : field.changeValue, 'btn-danger' : !field.changeValue}"
                @click="toggleButton">
            {{ field.changeValue ? 'Enabled' : 'Disabled' }}
        </button>
    </div>
</template>

<script>

import Arrow from '~/assets/svg/arrow.svg';

export default {
    name: 'field-component',

    data: () => ({
        randomNumber: 0
    }),

    props: [
        'field'
    ],

    watch: {
    },    

    created() {
        this.randomNumber = _.last(this.field.valueHistory)
    },

    mounted() {
        this.$bus.$on('generateRandomValue', this.generateRandomValue)
    },

    beforeDestroy() {
        this.$bus.$off("generateRandomValue", this.generateRandomValue);
    },

    methods: {
        generateRandomValue() {
            if (this.field.changeValue) {
                let randomValue = _.round(_.random(1,2,true), 2)
                this.randomNumber = _.random(0,1) ? randomValue : -randomValue

                this.$store.dispatch("app/ADD_TO_HISTORY", {
                    label: this.field.label,
                    randomNumber: this.randomNumber
                })
            } else {
                this.$store.dispatch("app/ADD_TO_HISTORY", {
                    label: this.field.label,
                    randomNumber: _.last(this.field.valueHistory)
                })
            }
        },

        toggleButton() {
            this.$store.dispatch("app/TOGGLE_BUTTON", this.field.label)
        },
    },

    components: {
        Arrow
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/colors';

.field-component {

    .arrow {
        width: 1rem;
        fill: $darkBlue;
        transition: 0.4s ease-in-out;

        &-up {
            transform: rotate(-90deg);
        }

        &-down {
            transform: rotate(90deg);
        }
    }
}

</style>