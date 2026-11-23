import * as hooks from "vitest";

const helpers = require("./helpers/global-setup");

describe("ipWhitelist directive configuration", () => {
	describe("When IP is not in whitelist", () => {
		hooks.beforeAll(async () => {
			await helpers.startApplication("tests/configs/noIpWhiteList.js");
		});
		hooks.afterAll(async () => {
			await helpers.stopApplication();
		});

		it("should reject request with 403 (Forbidden)", async () => {
			const port = global.testPort || 8080;
			const res = await fetch(`http://localhost:${port}`);
			expect(res.status).toBe(403);
		});
	});

	describe("When whitelist is empty (allow all IPs)", () => {
		hooks.beforeAll(async () => {
			await helpers.startApplication("tests/configs/empty_ipWhiteList.js");
		});
		hooks.afterAll(async () => {
			await helpers.stopApplication();
		});

		it("should allow request with 200 (OK)", async () => {
			const port = global.testPort || 8080;
			const res = await fetch(`http://localhost:${port}`);
			expect(res.status).toBe(200);
		});
	});
});
