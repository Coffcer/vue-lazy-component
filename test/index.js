/* eslint-disable */
import Vue from 'vue';
import chai from 'chai';
import lazy from '../src/vue-lazy-component.js';

Vue.use(lazy);

var expect = chai.expect;

describe('v-lazy', () => {

    it('normal', (done) => {
        let id = '#test';
        let vm = new Vue({
            template: `<div><p id="test" v-lazy="1000"></p></div>`
        }).$mount();

        expect(vm.$el.querySelector(id)).to.be.null;
        setTimeout(() => {
            expect(vm.$el.querySelector(id)).to.be.null
        }, 500);
        setTimeout(() => {
            expect(vm.$el.querySelector(id)).not.to.be.null;
            done();
        }, 1000);
    })

    it('v-lazy="0"', (done) => {
        let id = '#test';
        let vm = new Vue({
            template: `<div><p id="test" v-lazy></p></div>`
        }).$mount();

        expect(vm.$el.querySelector(id)).to.be.null;
        setTimeout(() => {
            expect(vm.$el.querySelector(id)).not.to.be.null;
            done();
        }, 0);
    })
});