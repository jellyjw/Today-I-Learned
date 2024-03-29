## **yarn berry zero install**

npm은 모듈을 설치할 경우, `node_modules` 라는 파일이 생성되는데 이는 ‘파일 시스템’ 을 이용해서 의존성을 관리하기 때문이다.

`git` 에 작업하던 코드를 올릴 경우 `node_modules` 의 크기가 너무 크기 때문에 항상 제외하고 올리는 것을 볼 수 있고, 새로 클론받으면 잊지 않고 `install` 을 수행해서 직접 다운로드 받아야 한다.

파일 의존성은 팬덤 디펜던시, 파일 탐색, 폴더구조 생성 등

하지만 yarn berry는 ‘파일 시스템’ 대신 ‘PnP 시스템’ 을 도입했다. 이 시스템을 기반으로 berry를 사용할 경우 의존성 관리에 `node_modules` 를 생성하는 대신 `.yarn/cache` 폴더가 생성된다.

**.yarn/cache 폴더** 안에는 `zip` 으로 묶인 모듈들이 저장된다. 당연히 `node_modules` 폴더가 생성되지 않기 때문에 따로 폴더를 생성할 필요도 없고 굉장히 많은 모듈들을 설치하는 과정이 생략되어 설치 속도가 빨라진다.

Zero install, 즉 설치할 필요가 없어지는 것이다.

- 새로 저장소를 복제할 경우에도 install을 실행하지 않아도 됨.
- 네트워크가 끊어진 곳에서 오프라인 캐시 기능을 해주기도 함.
