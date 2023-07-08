<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dongdong867/go-cafe">
    <img src="public/logo.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Go Cafe</h3>

  <p align="center">
    Find Café, Go Cafe!
    <br />
    <a href="https://github.com/dongdong867/go-cafe"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dongdong867/go-cafe">View Demo</a>
    ·
    <a href="https://github.com/dongdong867/go-cafe/issues">Report Bug</a>
    ·
    <a href="https://github.com/dongdong867/go-cafe/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <a href="https://gocafe.vercel.app"><img src="public/home.png" width=300 /></a>
</div>

</br>

**Go Cafe** is a coffee community system. \
We hope to create a platform to let user pick their dream café shop in a direct and rapid way.

> Due to financial limits, the CloudSQL server has temporary stopped at 2023/07/05. \
> The deployed website will be available when project successfully migrated from CloudSQL to Firebase.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![Tailwind][TailwindCSS]][Tailwind-url]
[![DaisyUI][DaisyUI]][Daisy-url]
[![GraphQL][GraphQL]][GraphQL-url]
[![Apollo][Apollo]][Apollo-url]
[![Nest][Nest.js]][Nest-url]
[![Typescript][Typescript]][Typescript-url]
[![Prisma][Prisma]][Prisma-url]
[![MySQL][MySQL]][MySQL-url]
[![Firebase][Firebase]][Firebase-url]
[![GoogleCloud][GoogleCloud]][GoogleCloud-url]
[![JWT][JWT]][JWT-url]
[![Vercel][Vercel]][Vercel-url]
[![PWA][PWA]][PWA-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Create a MySQL database, Firestore
2. Get a API key at [Firebase](https://consle.firebase.google.com)
3. Clone the repo

   ```sh
   git clone https://github.com/dongdong867/go-cafe.git
   ```

4. Install NPM or PNPM packages

   ```sh
   > npm
   npm install

   > pnpm
   pnpm i
   ```

5. Create `.env` file in both `/frontend` and `/backend`

   ```properties
   # /frontend
    NEXT_PUBLIC_API_KEY=XXXXXX
    NEXT_PUBLIC_AUTH_DOMAIN=XXXXXX
    NEXT_PUBLIC_PROJECT_ID=XXXXXX
    NEXT_PUBLIC_STORAGE_BUCKET=XXXXXX
    NEXT_PUBLIC_MESSAGING_SENDER_ID=XXXXXX
    NEXT_PUBLIC_APP_ID=XXXXXX
    NEXT_PUBLIC_MEASUREMENT_ID=XXXXXX
    NEXT_PUBLIC_RANDOM_KEY=XXXXXX
   ```

   ```properties
   # /backend
    JWT_SECRET_TOKEN=XXXXXX
    CLOUD_SQL_URL=mysql://${CLOUD_SQL_USER}:${CLOUD_SQL_PASSWORD}@${CLOUD_SQL_HOST}:${CLOUD_SQL_PORT}/${CLOUD_SQL_DATABASE}
    CLOUD_SQL_USER=XXXXXX
    CLOUD_SQL_PASSWORD=XXXXXX
    CLOUD_SQL_HOST=XXXXXX
    CLOUD_SQL_PORT=XXXXXX
    CLOUD_SQL_DATABASE=XXXXXX
    CERT=XXXXXX
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Development

#### Frontend

```shell
#pnpm
pnpm dev

#npm
npm run dev
```

#### Backend

```shell
#pnpm
pnpm start:dev

#npm
npm run start:dev
```

### Deployment

> The deployment has stopped temporary waiting for database migrating.

#### Frontend

CD for frontend is already setup for this repo, actions will run automatically when pull request created.

Visit [Go Cafe](https://vercel.com/dongdong867/go-cafe) for more deployments log.

#### Backend

**!! Firebase related packages are required for deploying backend server !!**

```shell
# pnpm
pnpm serve
pnpm run deployment

#npm
npm run serve
npm run deployment
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the Apache 2.0 License License. See [`LICENSE`](/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

email - <dongdong0867@gmail.com>

Project Link: [dongdong867/go-cafe](https://github.com/dongdong867/go-cafe)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dongdong867/go-cafe.svg?style=for-the-badge
[contributors-url]: https://github.com/dongdong867/go-cafe/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dongdong867/go-cafe.svg?style=for-the-badge
[forks-url]: https://github.com/dongdong867/go-cafe/network/members
[stars-shield]: https://img.shields.io/github/stars/dongdong867/go-cafe.svg?style=for-the-badge
[stars-url]: https://github.com/dongdong867/go-cafe/stargazers
[issues-shield]: https://img.shields.io/github/issues/dongdong867/go-cafe.svg?style=for-the-badge
[issues-url]: https://github.com/dongdong867/go-cafe/issues
[license-shield]: https://img.shields.io/github/license/dongdong867/go-cafe.svg?style=for-the-badge
[license-url]: https://github.com/dongdong867/go-cafe/blob/master/LICENSE.txt
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]:https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[DaisyUI]: https://img.shields.io/badge/DaisyUI-4f14ee?style=for-the-badge&logo=daisyui&logoColor=white
[Daisy-url]: https://daisyui.com
[GraphQL]: https://img.shields.io/badge/GraphQL-e10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org
[Apollo]: https://img.shields.io/badge/Apollo-1c223e?style=for-the-badge&logo=apollographql&logoColor=white
[Apollo-url]: https://apollographql.com
[Nest.js]: https://img.shields.io/badge/Nest.js-DD0031?style=for-the-badge&logo=nestjs&logoColor=white
[Nest-url]: https://nestjs.com
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org
[Prisma]: https://img.shields.io/badge/Prisma-1b202b?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://prisma.io
[MySQL]: https://img.shields.io/badge/MySQL-32738c?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://mysql.com
[Firebase]: https://img.shields.io/badge/Firebase-e3a71e?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.com
[GoogleCloud]: https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[GoogleCloud-url]: https://cloud.google.com
[JWT]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=pink
[JWT-url]: https://jwt.io
[Vercel]:https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com
[PWA]: https://img.shields.io/badge/PWA-000000?style=for-the-badge&logo=pwa&logoColor=white
[PWA-url]: https://web.dev/progressive-web-apps/
