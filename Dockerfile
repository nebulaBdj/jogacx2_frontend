# multi-stage 빌드 방식 사용
# 이미지를 만드는 과정에서는 필요하지만 최종 컨테이너 이미지에는 필요 없는 환경을 제거하기 위해 단계를 나누어 기반 이미지를 생성하는 방법

FROM node:18-alpine AS base

# 작업 디렉토리를 설정 -> 도커 컨테이너 안에서 어떤 경로에서 실행할 것인지를 명시
WORKDIR /app

# 프로젝트의 의존성을 복사
COPY package*.json ./

# production 패키지만 base에 설치
RUN npm install --production



# 개발용 패키지를 설치하기 위해 단계 구분
FROM base AS deps

WORKDIR /app

# 패키지 설치
RUN npm install



# Build 스테이지
FROM deps AS builder

WORKDIR /app

# 현재 디렉토리를 /app 디렉토리에 복사
COPY . .

# 프리티어 오류 발생으로 빌드 전에 프리티어 규칙 적용
RUN npx prettier --write .

RUN npm run build



# Runtime 스테이지 : 이미지 생성
# 불필요한 의존성을 가져가지 않기 위해 base를 가져오지 않고, node:18-alpine를 사용
FROM node:18-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# next의 standalone을 통해 필요한 파일만 복사하는 도깁 실행형 폴더를 자동 생성
# 아래 설정 next.config.mjs에 설정
# module.exports = {
#   output: 'standalone',
# }
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

# 어플리케이션 start
CMD ["node", "server.js"]


# Base stage (base):
# npm install --production: 프로덕션에서만 필요한 의존성을 설치합니다. (예: react, next 등)
# 이 스테이지에서는 프로덕션에서 실행에 필요한 최소한의 패키지만 설치합니다.

# Dependencies stage (deps):   
# npm install: 개발 의존성까지 포함하여 모든 의존성을 설치합니다. 이 단계는 빌드에 필요한 패키지를 포함하는 것입니다.
# 이 단계에서 storybook, eslint 등 개발 도구와 관련된 패키지들이 설치됩니다.

# Build stage (builder):    
# npm run build: Next.js 애플리케이션을 빌드하는 단계입니다.
# builder는 소스 파일 전체를 복사하고, 빌드를 통해 정적 자원을 생성합니다.

# Runtime stage (runner):    
# 최종 런타임 이미지로, builder에서 빌드된 결과물과 프로덕션 의존성만 복사해 옵니다.
# 이 단계에서는 개발 도구나 빌드에 필요한 패키지들이 포함되지 않으며, 실행에 필요한 것들만 포함된 최소한의 이미지를 생성합니다.
