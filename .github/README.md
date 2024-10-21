### How to Build and Deploy Multiple MDBook Projects Using GitHub Actions

This guide will walk you through how to set up GitHub Actions to build and deploy multiple `mdbook` projects from different folders. This setup is ideal if you have several books in your repository and want to deploy them all to GitHub Pages under different directories.

### Step 1: Set Up Your Repository

1. **Create your repository** on GitHub or use an existing one.
2. **Add each `mdbook` project** in its respective folder. For example:
   ```
   .
   ├── book1/
   ├── book2/
   ├── book3/
   ├── book4/
   ├── book5/
   ```
   Each folder (`book1`, `book2`, etc.) should contain a valid `mdbook` project with a `book.toml` configuration file and content files.

### Step 2: Create a GitHub Actions Workflow

1. In your repository, create the following directory structure if it doesn’t exist:
   ```
   .github/
   └── workflows/
   ```
   
2. Inside the `workflows` folder, create a file named `deploy.yml`. This will be your GitHub Actions configuration file.

### Step 3: Write the Workflow File

Open the `deploy.yml` file and add the following configuration:

```yaml
name: Deploy MDBooks

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Install mdbook
      run: cargo install mdbook

    # Build and deploy the first mdbook
    - name: Build book1
      run: |
        cd book1
        mdbook build
        mkdir -p ../public/book1/
        cp -r book/* ../public/book1/

    # Build and deploy the second mdbook
    - name: Build book2
      run: |
        cd book2
        mdbook build
        mkdir -p ../public/book2/
        cp -r book/* ../public/book2/

    # Build and deploy the third mdbook
    - name: Build book3
      run: |
        cd book3
        mdbook build
        mkdir -p ../public/book3/
        cp -r book/* ../public/book3/

    # Build and deploy the fourth mdbook
    - name: Build book4
      run: |
        cd book4
        mdbook build
        mkdir -p ../public/book4/
        cp -r book/* ../public/book4/

    # Build and deploy the fifth mdbook
    - name: Build book5
      run: |
        cd book5
        mdbook build
        mkdir -p ../public/book5/
        cp -r book/* ../public/book5/

    # Deploy to GitHub Pages
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

### Step 4: Configure the Workflow

#### Explanation of Workflow Steps:

- **Checkout the repository**: The `actions/checkout@v2` action pulls your code from the repository.
  
- **Install MDBook**: The `cargo install mdbook` command installs `mdbook` (you can skip this if you already have `mdbook` installed).
  
- **Build each book**: Each `mdbook` project (from `book1` to `book5`) is built by navigating into the respective folder, running `mdbook build`, and copying the output to a corresponding subdirectory in `public/` (e.g., `public/book1`, `public/book2`, etc.).

- **Deploy to GitHub Pages**: The `peaceiris/actions-gh-pages@v3` action is used to deploy the contents of the `public/` directory (where all books have been built) to GitHub Pages.

### Step 5: Push to GitHub

Once your `deploy.yml` file is ready, commit and push your changes to the `main` branch (or the branch you're using for deployment):

```bash
git add .
git commit -m "Add GitHub Actions workflow for deploying multiple mdbooks"
git push origin main
```

### Step 6: Access Your Deployed Books

After pushing to GitHub, GitHub Actions will run the workflow, build all your `mdbook` projects, and deploy them to GitHub Pages. You can access each book via the following URLs (assuming your repository name is `my-repo` and your GitHub Pages URL is `username.github.io/my-repo`):

- `https://username.github.io/my-repo/book1/`
- `https://username.github.io/my-repo/book2/`
- `https://username.github.io/my-repo/book3/`
- `https://username.github.io/my-repo/book4/`
- `https://username.github.io/my-repo/book5/`

### Step 7: (Optional) Customizing Your GitHub Pages Settings

- Go to your repository’s **Settings**.
- Scroll down to the **GitHub Pages** section and select the source for GitHub Pages, typically the `gh-pages` branch.
- Your GitHub Pages site should now be live, and you can access each of your books under the respective directories.

### Conclusion

You’ve successfully configured a GitHub Actions workflow to build and deploy multiple `mdbook` projects from different folders to GitHub Pages. You can now manage multiple documentation books in one repository and easily deploy them using GitHub Actions.

