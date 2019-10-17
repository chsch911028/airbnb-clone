<h3 style="text-align:center;color:#ff5a5f;">Airbnb Clone Project</h3>
<p algin="center">
  <img src="https://kr.object.ncloudstorage.com/boostcamp-chan/airbnb-clone/airbnb-logo.svg" width="300px" height="200"/>
</p>
<p style="text-align:center;">
  <a href="http://49.236.137.229/">데모 보기</a>
</p>

## 프로젝트 기능

- 숙소 목록 제공
- 숙소 필터링(날짜, 숙소 유형, 가격)
- 숙소 예약 기능 제공

## 백엔드

### API 예시

- [GET /api/users](http://49.236.137.229/api/users)
- [GET /api/rooms](http://49.236.137.229/api/rooms)
- [GET /api/reservations](http://49.236.137.229/api/reservations)

### 서버 구성도

![img](https://kr.object.ncloudstorage.com/boostcamp-chan/airbnb-clone/server-structure.png)

### API 서버 앱 구성도

![api-server-structure](https://kr.object.ncloudstorage.com/boostcamp-chan/airbnb-clone/api-server-app-structure.png)

### 디텍토리 구성

**중요 디렉토리**

- **src**: server 관련 소스
- **controllers**: Request(요청)을 받아 Service에게 비즈니스 로직 처리를 위임하고, 처리의 결과를 Response(응답)하는 역할과 관련된 소스 모음
- **services**: repository를 사용하여 비즈니스 로직을 처리하고, controller에게 결과를 반환하는 역할과 관련된 소스 모음
- **repositories**: model(entity)를 사용하여 데이터베이스 작업을 수행하고 결과물을 service에게 반환하는 역할과 관련된 소스 모음
- **models**: orm을 사용하여 table과 object 맵핑을 위한 Entity 소스 모음
- **middlewares**: 미들웨워 관련 소스 모음

**부가적인 디렉토리**

- **database**: Entity 기반 seed 데이터 생성 관련 파일 모음
- **custom**: orm table 및 filed 네이밍 전략 관련 파일

### 기술 및 라이브러리 스택

- **TypeScript**: javascript super set
- **typedi**: @Service 어노테이션을 활용하여 Container에 dependency loading 기능을 제공하는 라이브러리
- **routing-controllers**: @Controller 어노테이션 기반 라우팅 기능을 제공하는 라이브러리
- **typeorm**: @Entity 어노테이션 기반 `테이블 - 객체` 매핑
- **faker**: 임시/랜덤 데이터 제공해주는 라이브러리

## 프론트엔드

## 배포

```bash
git clone https://github.com/chsch911028/airbnb-clone.git

## express server app 실행
cd airbnb-clone
npm install
npm start

## client react app static 파일 빌드
cd client
npm install
npm run build
```

## 개선할 점

1. ORM Entity를 직접 반환하지 않고, DTO 계층을 만들어서 필요한 정보만 json 형태로 반환하도록 개선
2. 현재는 Ncloud 서버 1대에서 DB, STATIC SERVER, API SERVER가 모두 실행되고 있다. 추후에 개별 서버로 분리하여 Nginx를 사용하여 reverse proxy 형태로 서비스 하도록 구성하고 싶다.
3. 현재는 수동으로 배포하고 있지만 추후에 Travis, Github Webhook 등을 사용하여 Auto CI/CD를 구현해야 겠다.
