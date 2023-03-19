import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "348bd0d2-3b5c-4d41-9ddd-22a95dee61ce", // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "_src/pages",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "_src/pages",
    },
  },
  schema: {
    collections: [
      {
        label: "Main Content",
        name: "main_content",
        path: "_src/pages",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "datetime",
            name: "date_modified",
            label: "Date Modified",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "page_type",
            label: "Page Type",
            options: ["standard"],
          },
        ],
      },
    ],
  },
});
