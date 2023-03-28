module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/yarias/github-actions",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/git", {
            assets: [
                { path: "build.zip", label: "Build"},
                { path: "coverage.zip", label: "Coverage"}
            ]
        }]
      ]
}