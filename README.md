

<h1 align="center"><img width="600" style="border-radius: 12px 0px 0px 12px;" src="https://user-images.githubusercontent.com/35622595/161645096-1c45d1f2-c9ab-4314-86d6-7f31a8b6f771.png"/></h1>


> 🧑‍💻 Hack this presentation: https://gitpod.io/#/https://github.com/treasurechess-redwood-presentation

Much of the code/tooling we've created along the way has been generalized for any RedwoodJS project, and open sourced- we hope you find these resources useful. Happy hacking!

P.S. We're hiring: https://github.com/treasure-chess/jobs

### Where it all started

Code for Nifty Chess we wrote in a couple days in February, 2021: https://github.com/pi0neerpat/nifty-chess-app. See it LIVE: https://niftychess.com

### Our Redwood Stack

The Redwood Framework is a solid foundation that works all the way to production. Almost every core component we use is "out-of-the-box", or slightly modified.

|                   | Tooling                                    |
| :---------------- | :----------------------------------------- |
| Web styling       | TailwindCSS, node-sass-glob-importer, etc. |
| Prerender         | #                                          |
| Router            | #                                          |
| Graphql           | #                                          |
| Login             | "Extended" dBAuth                          |
| Devops/CI         | Github Actions                             |
| Preview deploy    | Vercel                                     |
| Production deploy | Docker GCP Kubernetes                      |

_"#" = default settings_

### Devops

Managing a team of developers can be difficult. Here's some of things we wouldn't have survived without. These are all supplemental to the existing Redwood flow. Maybe you can help adopt them into the framework!

- Releases + Versioning https://community.redwoodjs.com/t/releases-and-versioning-for-redwood-apps?u=pi0neerpat
- Docker containers https://community.redwoodjs.com/t/containerize-redwood-sides-with-docker-compose/2706/2?u=pi0neerpat
- Encrypted environment variables (also includes CI Actions) https://community.redwoodjs.com/t/encyrpted-environment-variables/2691?u=pi0neerpat

### Frontend

The list here is short, because redwood \*solved\* web development.

- State Store & React Context https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572?u=pi0neerpat

### Tooling

Here are some powerful tools

- "Extended" dbAuth / OAuth https://community.redwoodjs.com/t/combining-dbauth-oauth2/2452?u=pi0neerpat
  - LIVE production example using `eth-auth`: https://github.com/pi0neerpat/swordy-bot-v2/
  - Attempt at using Passport.js, but it was rather cumbersome https://github.com/pi0neerpat/oauth-2-passport-redwood
- OAuth general-purpose code (released soon)
- Headless rendering (for screenshots + image generation)
  - LIVE Hackathon example https://github.com/pi0neerpat/dao-preview
  - Fork-able example https://github.com/pi0neerpat/headless-screenshot. See example here (refresh if times out): https://headless-screenshot.vercel.app/api?url=https://grubhub.com
