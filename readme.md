# Key Manage System using Graplix
Graplix 학습을 위한 학습용 리포지토리입니다.

NodeJS 환경을 이용하여 테스트를 구축하고, 테스트를 실행하는 프로젝트입니다.

## 프로젝트 설명
비공개 키(private-key)를 관리하는 솔루션의 권한 관리 기능을 테스트하는 프로젝트입니다.
프로젝트의 스키마마는 아래와 같습니다.

Root
- System
- Company
- Application
- Key
- User

System은 한 명의 관리자(admin)를 가지고 있습니다.
System은 여러개의 Company를 가지고 있습니다.

Company는 여러개의 Application을 가질 수 있습니다.
예를들어 MS는 GitHub, MS Office, MS Azure 등 여러 어플리케이션을 가지고 있습니다.

Application은 여러개의 Key를 가질 수 있습니다.
예를들어 GitHub는 여러개의 비공개 키(private-key)를 가지고 있습니다.

Key는 여러명의 User에게 부여될 수 있습니다.
단, 관리자는 한 명 입니다.

