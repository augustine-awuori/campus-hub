# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Features

- User Authentication: Implement a secure authentication system where users can sign up with their campus email addresses and create accounts.
- User Profiles: Allow users to create profiles with basic information such as name, profile picture, and a short bio.
- Feed: Create a central feed where users can see posts from other users. This feed should display both text and image posts in a chronological order.
- Post Creation: Enable users to create text posts with optional images. Include a simple text editor for composing posts.
- Image Upload: Implement functionality for users to upload images from their devices when creating posts.
- Like and Comment: Allow users to like and comment on posts made by others.
- Search Functionality: Include a basic search feature that allows users to search for posts by keywords or usernames.
- Notifications: Implement notifications to alert users when someone likes or comments on their posts, or when they receive a direct message.
- Direct Messaging: Enable users to send private messages to each other.
- Settings: Provide basic settings for users to manage their accounts, such as changing profile information or password.
- Reporting and Moderation: Include a reporting feature for users to flag inappropriate content, and implement basic moderation tools to remove or hide reported posts.
