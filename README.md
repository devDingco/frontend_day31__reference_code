## 과제 요구 사항

### 공통

- [ ]  `day30` 폴더의 코드를 기반으로 `day31` 를 완성해 주세요.

### 게시글 상세

- [ ]  무한 스크롤 구현
    - **경로:** `src/components/boards-detail/comment-list/index.tsx`
    - [ ]  스크롤을 내릴 때마다 추가 댓글을 불러오는 무한 스크롤 기능을 구현해 주세요.
    - [ ]  `react-infinite-scroll-component` 또는 `react-infinite-scroller` 라이브러리를 사용해 보세요.
- [ ]  컴포넌트 분리 및 수정 기능 추가
    - [ ]  경로: `src/components/boards-detail/comment-list/index.tsx`
    - [ ]  댓글 목록 아이템을 별도의 컴포넌트로 분리해 주세요.
        - **새 파일 경로:** `src/components/boards-detail/comment-list-item/index.tsx`
    - [ ]  댓글 아이템의 연필 아이콘을 클릭하면 수정 모드로 전환되도록 만들어 주세요.
        - 클릭 시, 해당 아이템이 **댓글 작성 컴포넌트**(`src/components/boards-detail/comment-write/index.tsx`)로 변경되어야 합니다.
        - 이때, 댓글 작성 컴포넌트에 `isEdit`과 같은 적절한 `props`를 전달하여 **수정 모드**임을 알려주세요.
- [ ]  댓글 작성 컴포넌트 보완
    - **경로:** `src/components/boards-detail/comment-write/index.tsx`
    - [ ]  전달받은 `props`(예: `isEdit`)에 따라 **'등록'**과 **'수정'** 기능을 분기 처리해 주세요.
    - [ ]  `[수정하기]` 버튼을 클릭하면 `GRAPHQL-API`의 `updateBoardComment`를 호출하여 댓글을 수정하세요.
    - [ ]  댓글 수정 후, `fetchBoardComments`를 `refetch`하여 화면에 최신 댓글 목록을 표시해 주세요.
