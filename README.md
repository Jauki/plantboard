# Plantboard

## Goals

- Develop a Next.js web application exclusively.
- Explore the possibilities of running the application on the Edge.
- Experiment with cutting-edge technologies and concepts.
- Implement a robust deployment and hosting strategy using Vercel and Docker containers.
- Establish a streamlined DevOps workflow with GitHub Actions for automated builds and deployments.
- Conduct thorough testing to ensure the application's reliability and performance.
- Incorporate external devices like PlantboardVaccuum (an Arduino-based system for automating plant data collection and watering).

## Table of Contents

- [Project Description](#project-description)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Testing](#testing)
- [External Devices](#external-devices)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project aims to achieve several ambitious goals, primarily focusing on Next.js, Edge computing, and DevOps. By exploring the cutting-edge aspects of web development and automation, we aim to create a forward-thinking web application.

## Technologies

- Next.js
- Vercel
- Docker
- GitHub Actions
- Arduino (for PlantboardVaccuum)
- Prisma
- Postgres(self-hosted in future maybe Neon)
- TailwindCSS
- Radix Primitives
- NextAuth

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Install the required dependencies.
3. Configure the application for your specific needs.
4. Start the development server.

```shell
git clone https://github.com/jauki/plantboard.git
cd plantboard
yarn install
yarn dev
```

### Deployment

We use Vercel and Docker containers for deployment. The deployment process is automated with GitHub Actions. Follow these steps to deploy the application:

1. Create a Vercel account.
2. Configure your Vercel project settings.
3. Push your changes to the repository, and the GitHub Actions workflow will automatically build and deploy your application.

### Testing

To ensure the reliability and performance of the application, we maintain a rigorous testing process. Various testing methods and tools are used to cover different aspects of the application.

To run tests, use the following command:

```shell
yarn test
```

### External Devices

One of the unique aspects of this project is its integration with external devices, such as PlantboardVaccuum. This Arduino-based system collects data from plants and automates the watering process, contributing to a smarter and more efficient gardening experience.

## Contributing

We welcome contributions from the open-source community. If you'd like to contribute to this project, please follow our Contributing Guidelines.

## License
This project is licensed under The MIT License (MIT)  - see the LICENSE.md file for details.