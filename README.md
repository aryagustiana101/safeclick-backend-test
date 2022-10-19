## Overview

SafeClick BackEnd Developer Intern Task

<a name="installation"></a>

## Installation

> **Requires [Node.js 16.18.0+](https://nodejs.org/en).**

You need to install all the dependencies that project required:

```bash
npm install
```

Once project dependencies installed, create `.env` file and configure it according `.env.example` file.

<a name="running"></a>

## Running The Project

To run the project in development state you need to run:

```bash
npm run dev
```

In addition, if you would like to run project in production state you need to run:

```bash
npm run build && npm run start
```

<a name="guide"></a>

## Request Guide

Create data with accessing `/data` with `POST` method. Provide data by setting some headers `cpuname: SafeClick_CPU`, `type: 'Windows_NT'`, `platform: win32`, `release: 10.0.17134`, `remainingRam: 11338039296`, `totalRam: 17063497728`

Or

Create data with accessing `/data` with `POST` method. Provide data by query params `/data?cpuname=SafeClick_CPU&type=Windows_NT&platform=win32&release=10.0.17134&remainingRam=11338039296&totalRam=17063497728`

If data not provided, some data will be sated according to `User-Agent` header (if exist).