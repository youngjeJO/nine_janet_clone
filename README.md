# 나인커뮤니케이션 사전 테스트

## 프로젝트 소개

- 자넷 홈페이지 클론

## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![TypeScript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)


## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```
## 구현 상태
  ![image](https://user-images.githubusercontent.com/97160021/173723174-2f691564-647f-409f-9d2b-59bf4481e16a.png)
## 요구사항
- 자넷 홈페이지 메인 클론

## 구현 방법


### Styled-component 사용

- 전체적인 css를 style-component를 활용하여 홈페이지를 구현하였습니다. 특히 이번 과제가 기능 보다는 style 요소를 활용할 일이 많아 props 전달 등을 공부할 수 있는 시간이었습니다.
    
  ```
    const InfoBox = styled.div<IMenu>`
  width: 100px;
  height: 65px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  :hover {
    color: ${(props) => {
      if (props.name === '자넷info') {
        return 'rgba(0, 0, 0, 0)';
      } else if (props.name === '자넷톡') {
        return 'rgba(0, 0, 0, 0)';
      } else {
        return '#9c57f5';
      }
    }};
    background: ${(props) => {
      if (props.name === '자넷info') {
        return "url('https://janet.co.kr/img/common/gnbInfo.png') no-repeat center 18px";
      } else if (props.name === '자넷톡') {
        return "url('https://janet.co.kr/img/common/gnbTalk.png') no-repeat center 18px";
      }
    }};
  }

    ```
### json data 제작
 - 홈페이지를 구현하는데 있어 불필요한 마크업 작업이 많다고 생각되어 홈페이지에 있는 정보를 기반으로 json data를 만들어 map() 메소드를 활용하여 마크업 하였습니다.
 - top20에 주어진 data가 21년 기준으로 되어있어 22년으로 수정하여 작업하였습니다.
 
 ```
{
    "name": "자격증정보",
    "contents": [
      {
        "icon": "https://janet.co.kr/html_demo/img/main/inCrfc.png",
        "title": "자격증정보",
        "contents": "자격증정보의 모든 것"
      },
      {
        "icon": "https://janet.co.kr/html_demo/img/main/iCrtfc.png",
        "title": "계열별정보",
        "contents": "자격증에 대하여 알려드립니다."
      },
      {
        "icon": "https://janet.co.kr/html_demo/img/main/sCrtfc.png",
        "title": "자격증 공모전",
        "contents": "자격증 관련 공모전 정보 확인하기"
      },
      {
        "icon": "https://janet.co.kr/html_demo/img/main/rCrtfc.png",
        "title": "시험접수안내",
        "contents": "필기/실기 기본접수안내"
      }
    ]
  }

 ```
    
    
### 캐러셀 구현
 - 이번 과제에서 가장 큰 기능이라고 생각되었던 캐러셀을 자동넘김, 수동넘김, 베너 로 구분하여 구현하였습니다.
   시간 관계상 swipe기능을 넣지 못하여 아쉽지만 리펙토링을 통하여 구현해보겠습니다.
 - 아래에 코드가 캐러셀을 구현하는 공통적으로 사용되었습니다.
 
 
 ```
const [currentSlide, setCurrentSlide] = useState(1);
  const [transition, setTransition] = useState('500ms');
  let timer: NodeJS.Timeout;

  const slideChange = (targetIndex: number) => {
    setTransition('350ms');
    setCurrentSlide(targetIndex);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTransition('0s');
      if (targetIndex < 1) {
        targetIndex = chartData.length - 2;
      } else if (targetIndex === chartData.length - 1) {
        targetIndex = 1;
      } else {
        return;
      }
      setCurrentSlide(targetIndex);
    }, 300);
  };

  const nextSlide = () => {
    const targetIndex = currentSlide + 1;
    slideChange(targetIndex);
  };

  const prevSlide = () => {
    const targetIndex = currentSlide - 1;
    slideChange(targetIndex);
  };

 ```

