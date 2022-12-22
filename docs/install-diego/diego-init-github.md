---
sidebar_position: 4
---

1. `diego init github`

 Estimated time: 2 minutes

> Installs a Github app; a bot which sets up permissions to help implement GitOps by enabling communication between Github and ArgoCD


Command will request for:

• Github Organization Name
- Where your organisation's application repos are hosted. 

• Domain Name
- e.g. `<your-organisation's-domain>.com`

Executing the diego command will prompt you to add a Github app to your organisation named `diego-<your Github Org name>-bot`

After this, you will be prompted to install the bot for your organisation. 

![Add Github App](./img/github_app_image_1.png)

Checks:

✔️ Navigate to Github apps for your organisation - `https://github.com/settings/apps`. You should see your Github app listed there. <br/> 

✔️ Do `cat $HOME/.diego/config`. You should see 2 profiles - a default one and also one for your Github organisation. The app ID should be consistent with that listed for the app installed in your Github organisation.