/* eslint-disable */
import Vue from 'vue';
import chai from 'chai';
import lazy from '../src/vue-lazy-component.js';

Vue.use(lazy);

var expect = chai.expect;

describe('v-lazy', () => {
    it('normal', (done) => {
        let vm = new Vue({
            template: '<div><p id="test" v-lazy="1000"></p></div>'
        }).$mount();

        expect(vm.$el.querySelector('#test')).to.be.null;
        setTimeout(() => {
            expect(vm.$el.querySelector('#test')).to.be.null
        }, 500);
        setTimeout(() => {
            expect(vm.$el.querySelector('#test')).not.to.be.null;
            done();
        }, 1000);
    })
});