import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, L as onMount, b as validate_slots, M as validate_each_argument, B as empty, q as insert_dev, E as transition_in, C as transition_out, D as check_outros, N as destroy_each, l as detach_dev, H as create_component, I as claim_component, J as mount_component, K as destroy_component, t as text, k as claim_text, x as set_data_dev, e as element, f as space, h as claim_element, j as children, m as claim_space, n as add_location, r as append_dev, G as group_outros } from './client.12c0cabd.js';
import { P as Patient } from './Patient.6c636d19.js';

/* src\routes\patients.svelte generated by Svelte v3.24.0 */
const file = "src\\routes\\patients.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (28:2) {#if patients}
function create_if_block_1(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*patients*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*patients*/ 1) {
				each_value = /*patients*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(28:2) {#if patients}",
		ctx
	});

	return block;
}

// (29:4) {#each patients as patient}
function create_each_block(ctx) {
	let patient;
	let current;

	patient = new Patient({
			props: { patient: /*patient*/ ctx[2] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(patient.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(patient.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(patient, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const patient_changes = {};
			if (dirty & /*patients*/ 1) patient_changes.patient = /*patient*/ ctx[2];
			patient.$set(patient_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(patient.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(patient.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(patient, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(29:4) {#each patients as patient}",
		ctx
	});

	return block;
}

// (33:0) {#if error}
function create_if_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*error*/ ctx[1]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*error*/ ctx[1]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*error*/ 2) set_data_dev(t, /*error*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(33:0) {#if error}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let t2;
	let if_block1_anchor;
	let current;
	let if_block0 = /*patients*/ ctx[0] && create_if_block_1(ctx);
	let if_block1 = /*error*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Patients");
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Patients");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			if (if_block0) if_block0.l(nodes);
			t2 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 26, 0, 530);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t2, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*patients*/ ctx[0]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*patients*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t2.parentNode, t2);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*error*/ ctx[1]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t2);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let patients;
	let error;

	onMount(async () => {
		const response = await fetch("http://localhost:8000/api/v1/patients", {
			method: "GET",
			mode: "cors",
			credentials: "include",
			headers: { "Content-Type": "application/json" }
		});

		if (response.ok) {
			$$invalidate(1, error = null);
			$$invalidate(0, patients = await response.json());
		} else {
			$$invalidate(1, error = await response.text());
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Patients> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Patients", $$slots, []);
	$$self.$capture_state = () => ({ onMount, Patient, patients, error });

	$$self.$inject_state = $$props => {
		if ("patients" in $$props) $$invalidate(0, patients = $$props.patients);
		if ("error" in $$props) $$invalidate(1, error = $$props.error);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [patients, error];
}

class Patients extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Patients",
			options,
			id: create_fragment.name
		});
	}
}

export default Patients;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudHMuZTZjZGRiZTQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcGF0aWVudHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgUGF0aWVudCBmcm9tICcuLi9jb21wb25lbnRzL1BhdGllbnQuc3ZlbHRlJztcblxuICBsZXQgcGF0aWVudHNcbiAgbGV0IGVycm9yXG5cblx0b25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9wYXRpZW50cycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGVycm9yID0gbnVsbFxuICAgICAgcGF0aWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICB9XG5cdH0pO1xuPC9zY3JpcHQ+XG5cbjxoMT5QYXRpZW50czwvaDE+XG4gIHsjaWYgcGF0aWVudHN9XG4gICAgeyNlYWNoIHBhdGllbnRzIGFzIHBhdGllbnR9XG4gICAgICA8UGF0aWVudCBwYXRpZW50PXtwYXRpZW50fS8+XG4gICAgey9lYWNofVxuICB7L2lmfVxueyNpZiBlcnJvcn1cbiAge2Vycm9yfVxuey9pZn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OytCQTRCVyxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQyxHQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FDYyxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztxRUFBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUk1QixHQUFLOzs7bUNBQUwsR0FBSzs7Ozs7O3NEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTkQsR0FBUTsyQkFLVixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBTEgsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBS1YsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E1QkosUUFBUTtLQUNSLEtBQUs7O0NBRVYsT0FBTztRQUNFLFFBQVEsU0FBUyxLQUFLLENBQUMsdUNBQXVDO0dBQ2xFLE1BQU0sRUFBRSxLQUFLO0dBQ2IsSUFBSSxFQUFFLE1BQU07R0FDWixXQUFXLEVBQUUsU0FBUztHQUN0QixPQUFPLElBQ0wsY0FBYyxFQUFFLGtCQUFrQjs7O01BR2xDLFFBQVEsQ0FBQyxFQUFFO21CQUNiLEtBQUssR0FBRyxJQUFJO21CQUNaLFFBQVEsU0FBUyxRQUFRLENBQUMsSUFBSTs7bUJBRzlCLEtBQUssU0FBUyxRQUFRLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
