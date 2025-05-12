import path from "path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
    // If server is running on Production environment then using base "/zoom-online-module-1" for Github Pages deploy
    // Otherwise, using "/" on Development/Testing/UAT environment
    base: process.env.NODE_ENV === "production" ? "/zoom-online-module-1" : "/",
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true, // Check if there are files from previous build then delete them and re-build a new one
        rollupOptions: {
            input: {
                // Using __dirname for get the absolute path on this computer upto current directory
                home: path.resolve(__dirname, "src/index.html"),
                about: path.resolve(__dirname, "src/about.html"),
            },
        },
    },
    plugins: [ViteEjsPlugin()],
});
