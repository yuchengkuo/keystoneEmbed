import { config, list } from "@keystone-next/keystone/schema";
import { text } from "@keystone-next/fields";

const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text(),
    content: text(),
  },
});

export default config({
  db: {
    provider: "postgresql",
    url: "postgres://postgres:yuchengkuo@localhost:5432/keystone",
  },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
});
