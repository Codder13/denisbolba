"use client";

import { useEffect } from "react";

/** Adds `.in` to every `.reveal` element as it enters the viewport. */
export default function useReveal(deps = []) {
	useEffect(() => {
		const els = document.querySelectorAll(".reveal:not(.in)");
		if (!("IntersectionObserver" in window)) {
			for (const el of els) el.classList.add("in");
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						e.target.classList.add("in");
						io.unobserve(e.target);
					}
				}
			},
			{ rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
		);
		for (const el of els) io.observe(el);
		return () => io.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
}
