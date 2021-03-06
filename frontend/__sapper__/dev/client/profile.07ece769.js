import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as stores$1, v as validate_store, c as component_subscribe, L as onMount, b as validate_slots, B as empty, q as insert_dev, l as detach_dev, M as validate_each_argument, e as element, t as text, f as space, h as claim_element, j as children, k as claim_text, m as claim_space, n as add_location, r as append_dev, x as set_data_dev, N as destroy_each, A as noop } from './client.12c0cabd.js';

/* src\routes\profile.svelte generated by Svelte v3.24.0 */
const file = "src\\routes\\profile.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (22:0) {#if $session && $session.authenticated}
function create_if_block(ctx) {
	let if_block_anchor;
	let if_block = /*profile*/ ctx[0] && create_if_block_1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*profile*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(22:0) {#if $session && $session.authenticated}",
		ctx
	});

	return block;
}

// (23:2) {#if profile}
function create_if_block_1(ctx) {
	let h40;
	let t0;
	let t1;
	let ul0;
	let t2_value = /*profile*/ ctx[0].name + "";
	let t2;
	let t3;
	let h41;
	let t4;
	let t5;
	let ul1;
	let t6_value = /*profile*/ ctx[0].username + "";
	let t6;
	let t7;
	let h42;
	let t8;
	let t9;
	let ul2;
	let each_value = /*profile*/ ctx[0].roles;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h40 = element("h4");
			t0 = text("Name");
			t1 = space();
			ul0 = element("ul");
			t2 = text(t2_value);
			t3 = space();
			h41 = element("h4");
			t4 = text("Login ID");
			t5 = space();
			ul1 = element("ul");
			t6 = text(t6_value);
			t7 = space();
			h42 = element("h4");
			t8 = text("Roles");
			t9 = space();
			ul2 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			h40 = claim_element(nodes, "H4", {});
			var h40_nodes = children(h40);
			t0 = claim_text(h40_nodes, "Name");
			h40_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			ul0 = claim_element(nodes, "UL", {});
			var ul0_nodes = children(ul0);
			t2 = claim_text(ul0_nodes, t2_value);
			ul0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h41 = claim_element(nodes, "H4", {});
			var h41_nodes = children(h41);
			t4 = claim_text(h41_nodes, "Login ID");
			h41_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			ul1 = claim_element(nodes, "UL", {});
			var ul1_nodes = children(ul1);
			t6 = claim_text(ul1_nodes, t6_value);
			ul1_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			h42 = claim_element(nodes, "H4", {});
			var h42_nodes = children(h42);
			t8 = claim_text(h42_nodes, "Roles");
			h42_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			ul2 = claim_element(nodes, "UL", {});
			var ul2_nodes = children(ul2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul2_nodes);
			}

			ul2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h40, file, 23, 2, 488);
			add_location(ul0, file, 24, 2, 504);
			add_location(h41, file, 26, 2, 531);
			add_location(ul1, file, 27, 2, 551);
			add_location(h42, file, 29, 2, 582);
			add_location(ul2, file, 30, 2, 599);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h40, anchor);
			append_dev(h40, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul0, anchor);
			append_dev(ul0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, h41, anchor);
			append_dev(h41, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, ul1, anchor);
			append_dev(ul1, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, h42, anchor);
			append_dev(h42, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, ul2, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul2, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*profile*/ 1 && t2_value !== (t2_value = /*profile*/ ctx[0].name + "")) set_data_dev(t2, t2_value);
			if (dirty & /*profile*/ 1 && t6_value !== (t6_value = /*profile*/ ctx[0].username + "")) set_data_dev(t6, t6_value);

			if (dirty & /*profile*/ 1) {
				each_value = /*profile*/ ctx[0].roles;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul2, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h40);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(ul0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(h41);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(ul1);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(h42);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(ul2);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(23:2) {#if profile}",
		ctx
	});

	return block;
}

// (32:4) {#each profile.roles as role}
function create_each_block(ctx) {
	let li;
	let t_value = /*role*/ ctx[3] + "";
	let t;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li, file, 32, 4, 642);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*profile*/ 1 && t_value !== (t_value = /*role*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(32:4) {#each profile.roles as role}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let if_block_anchor;
	let if_block = /*$session*/ ctx[1] && /*$session*/ ctx[1].authenticated && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Profile");
			t1 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Profile");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 20, 0, 412);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*$session*/ ctx[1] && /*$session*/ ctx[1].authenticated) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	let $session;
	const { session } = stores$1();
	validate_store(session, "session");
	component_subscribe($$self, session, value => $$invalidate(1, $session = value));
	let profile;

	onMount(async () => {
		const response = await fetch("mock-profile.json", {
			method: "GET",
			mode: "cors",
			credentials: "include",
			headers: { "Content-Type": "application/json" }
		});

		$$invalidate(0, profile = await response.json());
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Profile> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Profile", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		stores: stores$1,
		session,
		profile,
		$session
	});

	$$self.$inject_state = $$props => {
		if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [profile, $session, session];
}

class Profile extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Profile",
			options,
			id: create_fragment.name
		});
	}
}

export default Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS4wN2VjZTc2OS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9maWxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnXG5cbiAgY29uc3QgeyBzZXNzaW9uIH0gPSBzdG9yZXMoKVxuICBsZXQgcHJvZmlsZVxuICBcbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnbW9jay1wcm9maWxlLmpzb24nLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgcHJvZmlsZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG48L3NjcmlwdD5cblxuPGgxPlByb2ZpbGU8L2gxPlxueyNpZiAkc2Vzc2lvbiAmJiAkc2Vzc2lvbi5hdXRoZW50aWNhdGVkfVxuICB7I2lmIHByb2ZpbGV9XG4gIDxoND5OYW1lPC9oND5cbiAgPHVsPntwcm9maWxlLm5hbWV9PC91bD5cblxuICA8aDQ+TG9naW4gSUQ8L2g0PlxuICA8dWw+e3Byb2ZpbGUudXNlcm5hbWV9PC91bD5cblxuICA8aDQ+Um9sZXM8L2g0PlxuICA8dWw+XG4gICAgeyNlYWNoIHByb2ZpbGUucm9sZXMgYXMgcm9sZX1cbiAgICA8bGk+e3JvbGV9PC9saT5cbiAgICB7L2VhY2h9XG4gIDwvdWw+XG4gIHsvaWZ9XG57L2lmfVxuIl0sIm5hbWVzIjpbInN0b3JlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7NEJBc0JPLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7bUJBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUVQLEdBQU8sSUFBQyxJQUFJOzs7Ozs7OzRCQUdaLEdBQU8sSUFBQyxRQUFROzs7Ozs7OzhCQUlaLEdBQU8sSUFBQyxLQUFLOzs7O2dDQUFsQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBUEgsR0FBTyxJQUFDLElBQUk7cUVBR1osR0FBTyxJQUFDLFFBQVE7Ozs2QkFJWixHQUFPLElBQUMsS0FBSzs7OzsrQkFBbEIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0QsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVhSLEdBQVEsb0JBQUksR0FBUSxJQUFDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFsQyxHQUFRLG9CQUFJLEdBQVEsSUFBQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FqQjdCLE9BQU8sS0FBS0EsUUFBTTs7O0tBQ3RCLE9BQU87O0NBRVgsT0FBTztRQUNDLFFBQVEsU0FBUyxLQUFLLENBQUMsbUJBQW1CO0dBQzlDLE1BQU0sRUFBRSxLQUFLO0dBQ2IsSUFBSSxFQUFFLE1BQU07R0FDWixXQUFXLEVBQUUsU0FBUztHQUN0QixPQUFPLElBQ0wsY0FBYyxFQUFFLGtCQUFrQjs7O2tCQUd0QyxPQUFPLFNBQVMsUUFBUSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
