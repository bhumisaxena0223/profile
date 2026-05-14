// Updated for @opennextjs/cloudflare v1.19+
// The new API uses defineCloudflareConfig — kvCache import was removed in this version.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  enableCacheInterception: false,
});
