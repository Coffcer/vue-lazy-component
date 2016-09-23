/**
 * Vue directive for lazy load components or elements.
 */

function findVmFromFrag(frag) {
    let node = frag.node;
    if (frag.end) {
        while (!node.__vue__ && node !== frag.end && node.nextSibling) {
            node = node.nextSibling;
        }
    }
    return node.__vue__;
}

export default function install (Vue, options = {}) {
    const FragmentFactory = Vue.FragmentFactory;
    const { createAnchor, replace } = Vue.util;

    Vue.directive(options.name || 'lazy', {
        terminal: true,

        bind () {
            this.isInit = false;
            this.anchor = createAnchor('v-if')
            replace(this.el, this.anchor);
        },
        update (value) {
            if (this.isInit) { return; }

            window.setTimeout(() => {
                this.insert();
                this.updateRef();
                this.isInit = true;
            }, value || 0);
        },
        unbind () {
            this.frag && this.frag.destroy();
        },
        // insert dom
        insert () {
            if (!this.factory) {
                this.factory = new FragmentFactory(this.vm, this.el);
            }
            this.frag = this.factory.create(this._host, this._scope, this._frag);
            this.frag.before(this.anchor, !this.modifiers['no-animation']); //multiBefore(target, withTransition)
        },
        // update v-ref
        updateRef () {
            let ref = this.descriptor.ref;
            if (!ref) { return; }

            let hash = (this.vm || this._scope).$refs,
                refs = hash[ref],
                key = this._frag.scope.$key;

            if (!refs) { return; }

            if (Array.isArray(refs)) {
                refs.push(findVmFromFrag(this._frag));
            } else {
                refs[key] = findVmFromFrag(this._frag);
            }
        }
    });
}