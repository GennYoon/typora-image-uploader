# Typora Image Uploader

Blog, Portfolio 관리를 모두 `supabase`를 이용하기로 했기 때문에 이미지가 `supabase store`로 올라가기를 원했지만 별도의 plugin이 없었기에 제작하게 되었습니다.

### PLATFORM

- MacOS

### STACK

- javascript
- supabase

### Setup

```bash
npm install

mv .env.sample .env
```

.env.sample 파일을 .env파일로 변경하고 환경변수를 자신에게 맞게 변경합니다.

우선 Node의 설치 위치를 알아야합니다. ( 미설치시 설치해주셔야합니다. )

```bash
which node | pbcopy
```

![typora_setup](https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/typora_setup.png)

typora setting > image에 다음과 같이 " `node 위치` `path/typora-image-uploader.js`" 를 입력해줍니다.

![typora_image_upload](https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/typora_image_upload.png)

이미지를 끌어서 놓으면 다음과 같이 이미지 업로드가 보입니다. 업로드를 선택하면 `supabase storage`에 이미지가 업로드 되면서 링크가 local에서 url로 변경됩니다.

### 마치며

다른 곳에 업로드 하시려면 upload관련 내용만 수정하면 좋을 것 같네요. 나중에 시간이 남으면 `config.json` 파일을 생성해서 여러곳 업로드도 생성해보고 싶네요.
